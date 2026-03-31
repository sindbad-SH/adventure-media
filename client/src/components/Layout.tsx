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
      {/* River Line SVG — weaving path effect */}
      <div className="river-line-wrapper" aria-hidden="true">
        <svg viewBox="0 0 200 6000" preserveAspectRatio="none" fill="none">
          <path
            d="M 160 0 C 140 100, 60 200, 80 400 C 100 600, 40 800, 60 1000 C 80 1200, 150 1400, 120 1600 C 90 1800, 40 2000, 70 2200 C 100 2400, 160 2600, 130 2800 C 100 3000, 50 3200, 80 3400 C 110 3600, 150 3800, 120 4000 C 90 4200, 50 4400, 80 4600 C 110 4800, 140 5000, 100 5200 C 60 5400, 90 5700, 100 6000"
            stroke="url(#riverGradient)"
            strokeWidth="0.6"
            strokeLinecap="round"
            opacity="1"
          />
          {/* Secondary thinner path for depth */}
          <path
            d="M 155 0 C 135 120, 55 220, 75 420 C 95 620, 35 820, 55 1020 C 75 1220, 145 1420, 115 1620 C 85 1820, 35 2020, 65 2220 C 95 2420, 155 2620, 125 2820 C 95 3020, 45 3220, 75 3420 C 105 3620, 145 3820, 115 4020 C 85 4220, 45 4420, 75 4620 C 105 4820, 135 5020, 95 5220 C 55 5420, 85 5720, 95 6000"
            stroke="url(#riverGradient2)"
            strokeWidth="0.25"
            strokeLinecap="round"
            opacity="0.5"
          />
          <defs>
            <linearGradient id="riverGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#38F8EC" stopOpacity="0" />
              <stop offset="3%" stopColor="#38F8EC" stopOpacity="0.35" />
              <stop offset="20%" stopColor="#38F8EC" stopOpacity="0.2" />
              <stop offset="50%" stopColor="#38F8EC" stopOpacity="0.3" />
              <stop offset="80%" stopColor="#38F8EC" stopOpacity="0.2" />
              <stop offset="97%" stopColor="#38F8EC" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#38F8EC" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="riverGradient2" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#38F8EC" stopOpacity="0" />
              <stop offset="10%" stopColor="#38F8EC" stopOpacity="0.15" />
              <stop offset="50%" stopColor="#38F8EC" stopOpacity="0.1" />
              <stop offset="90%" stopColor="#38F8EC" stopOpacity="0.15" />
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
            <div className="footer-blue-effect">
              <span className="footer-email-label">Email</span>
              <a href="mailto:sindbad@advstmedia.com" aria-label="Email Sindbad at sindbad@advstmedia.com">sindbad@advstmedia.com</a>
            </div>
            <a href="https://www.linkedin.com/in/sindbad-horizon-b19b4a264" target="_blank" rel="noopener noreferrer" aria-label="Sindbad Horizon's LinkedIn profile (opens in new tab)" style={{ marginTop: '0.75rem', display: 'block' }}>LinkedIn</a>
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
