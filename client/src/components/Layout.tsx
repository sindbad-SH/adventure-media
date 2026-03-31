import { useState, useEffect, useCallback, type ReactNode } from "react";
import { Link, useLocation } from "wouter";

const CDN = "https://d2xsxph8kpxj0f.cloudfront.net/310519663488690227/895rg4FQazWBsi7DRhtfWX";

export default function Layout({ children }: { children: ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [location] = useLocation();

  const isHome = location === "/";

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest(".more-dropdown")) setDropdownOpen(false);
    };
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);

  // Close mobile nav on route change
  useEffect(() => {
    setMobileOpen(false);
    setDropdownOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  // Fade-in observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll(".fade-in").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [location]);

  const handleNavClick = useCallback(() => {
    setMobileOpen(false);
    setDropdownOpen(false);
  }, []);

  return (
    <>
      {/* River Line SVG */}
      <div className="river-line-wrapper" aria-hidden="true">
        <svg viewBox="0 0 100 4000" preserveAspectRatio="none" fill="none">
          <path
            d="M 50 0 C 30 200, 70 400, 45 600 C 20 800, 75 1000, 55 1200 C 35 1400, 65 1600, 40 1800 C 15 2000, 80 2200, 50 2400 C 20 2600, 70 2800, 45 3000 C 25 3200, 60 3400, 50 3600 C 40 3800, 55 3900, 50 4000"
            stroke="url(#riverGradient)"
            strokeWidth="0.3"
            strokeLinecap="round"
            opacity="1"
            pathLength="1"
            strokeDasharray="1 1"
            strokeDashoffset="0"
          />
          <defs>
            <linearGradient id="riverGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#38F8EC" stopOpacity="0" />
              <stop offset="5%" stopColor="#38F8EC" stopOpacity="0.25" />
              <stop offset="50%" stopColor="#38F8EC" stopOpacity="0.15" />
              <stop offset="95%" stopColor="#38F8EC" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#38F8EC" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Navigation */}
      <nav className="nav">
        <div className="nav-inner">
          <Link href="/" className="nav-logo" aria-label="Adventure Storytelling Media — Home">
            <img src={`${CDN}/logo-nav_5f29c51f.webp`} alt="Adventure Storytelling Media logo" />
          </Link>
          <button
            className="mobile-toggle"
            aria-label="Toggle navigation"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <span></span><span></span><span></span>
          </button>
          <div className={`nav-links${mobileOpen ? " open" : ""}`}>
            {isHome ? (
              <>
                <a href="#main" className="active" onClick={handleNavClick}>Home</a>
                <a href="#field" onClick={handleNavClick}>The Field</a>
                <a href="#services" onClick={handleNavClick}>What I Do</a>
                <a href="#contact" onClick={handleNavClick}>Connect</a>
              </>
            ) : (
              <>
                <Link href="/" onClick={handleNavClick}>Home</Link>
                <Link href="/#field" onClick={handleNavClick}>The Field</Link>
                <Link href="/#services" onClick={handleNavClick}>What I Do</Link>
                <Link href="/#contact" onClick={handleNavClick}>Connect</Link>
              </>
            )}
            <div className={`more-dropdown${dropdownOpen ? " open" : ""}`}>
              <button
                className="more-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  setDropdownOpen(!dropdownOpen);
                }}
              >
                More{" "}
                <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M2 4l4 4 4-4" />
                </svg>
              </button>
              <div className="dropdown-menu">
                <Link href="/story-test" onClick={handleNavClick}>The Story Test</Link>
                <Link href="/field-notes" onClick={handleNavClick}>Field Notes</Link>
                <Link href="/arsenal" onClick={handleNavClick}>The Arsenal</Link>
                <Link href="/map" onClick={handleNavClick}>The Map</Link>
                <Link href="/connect" onClick={handleNavClick}>Let's Connect</Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      {children}

      {/* Footer */}
      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-brand">
            <img src={`${CDN}/logo-footer_34beaa60.webp`} alt="Adventure Storytelling Media — vertical logo" />
            <p className="footer-quote">"The most powerful stories aren't just told — they are tested."</p>
          </div>
          <div className="footer-col">
            <h4>Navigate</h4>
            <Link href="/">Home</Link>
            {isHome ? <a href="#field">The Field</a> : <Link href="/#field">The Field</Link>}
            {isHome ? <a href="#services">What I Do</a> : <Link href="/#services">What I Do</Link>}
            {isHome ? <a href="#contact">Connect</a> : <Link href="/#contact">Connect</Link>}
            <Link href="/story-test">The Story Test</Link>
          </div>
          <div className="footer-col">
            <h4>Explore</h4>
            <Link href="/field-notes">Field Notes</Link>
            <Link href="/arsenal">The Arsenal</Link>
            <Link href="/map">The Map</Link>
            <Link href="/connect">Let's Connect</Link>
          </div>
          <div className="footer-col">
            <h4>Contact</h4>
            <a href="mailto:sindbad@advstmedia.com" aria-label="Email Sindbad at sindbad@advstmedia.com">sindbad@advstmedia.com</a>
            <a href="https://www.linkedin.com/in/sindbad-horizon-b19b4a264" target="_blank" rel="noopener noreferrer" aria-label="Sindbad Horizon's LinkedIn profile (opens in new tab)">LinkedIn</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>&copy; 2026 Adventure Storytelling Media</span>
          <div className="footer-bottom-links">
            <span>adventurestorytellingmedia.com</span>
            <span>&middot;</span>
            <span>advstmedia.com</span>
            <span>&middot;</span>
            <span>sindbad@advstmedia.com</span>
          </div>
        </div>
      </footer>

      {/* Floating Story Test Button */}
      <Link href="/story-test" className="floating-btn">
        The Story Test{" "}
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M2 7h10M8 3l4 4-4 4" />
        </svg>
      </Link>
    </>
  );
}
