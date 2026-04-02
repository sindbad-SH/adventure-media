import { useEffect } from "react";
import { Link } from "wouter";

const CDN = "https://d2xsxph8kpxj0f.cloudfront.net/310519663488690227/895rg4FQazWBsi7DRhtfWX";

const PAGE_TITLE = "Adventure Storytelling Media | Boulder, CO";

function ScrollIndicator() {
  return (
    <div className="scroll-indicator" aria-hidden="true">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 5v14" /><path d="m19 12-7 7-7-7" />
      </svg>
    </div>
  );
}

function DecoLine() {
  return (
    <div className="deco-line">
      <div className="deco-line-left"></div>
      <div className="deco-diamond"></div>
      <div className="deco-line-right"></div>
    </div>
  );
}

function SubsectionHeader({ num }: { num: string }) {
  return (
    <div style={{ display: "flex", alignItems: "baseline", gap: "0.75rem", marginBottom: "0.75rem" }}>
      <span className="subsection-num">{num}</span>
      <div style={{ width: "32px", height: "1px", background: "rgba(56,248,236,0.3)" }}></div>
    </div>
  );
}

export default function Home() {
  useEffect(() => {
    document.title = PAGE_TITLE;
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.1 }
    );
    document.querySelectorAll(".fade-in").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Handle hash scrolling on load
  useEffect(() => {
    if (window.location.hash) {
      const el = document.querySelector(window.location.hash);
      if (el) setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 100);
    }
  }, []);

  return (
    <main id="main">
      {/* Hero */}
      <section className="hero">
        <div className="hero-mountain-bg">
          <svg viewBox="0 0 1440 400" preserveAspectRatio="none">
            <path d="M0,400 L0,280 L120,180 L240,260 L360,140 L480,220 L600,100 L720,200 L840,80 L960,180 L1080,60 L1200,160 L1320,120 L1440,200 L1440,400 Z" fill="#38F8EC" />
          </svg>
        </div>
        <div className="hero-inner">
          <div className="hero-content">
            <div className="hero-location">BOULDER, CO</div>
            <h1>Adventure Storytelling <span className="turquoise">Media</span></h1>
            <p className="hero-desc">A Boulder-based media and market intelligence operation at the intersection of storytelling, entrepreneurship, and adventure.</p>
            <p className="hero-italic">ASM exists at a simple crossroads: the stories worth telling are usually the ones attached to the most ambitious people and ideas. We find them, capture them, and test whether they actually land — then hand the founder, creator, or entrepreneur the tools to act on what we find.</p>
            <div className="hero-buttons">
              <a href="#field" className="btn btn-primary">
                See The Work{" "}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 5v14" /><path d="m19 12-7 7-7-7" /></svg>
              </a>
              <a href="#contact" className="btn btn-outline">Get In Touch</a>
            </div>
          </div>
          <div className="hero-visual">
            <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663488690227/895rg4FQazWBsi7DRhtfWX/ASM_Logo_Mark_SkyandLuminescentcyan_c4754089.webp" alt="ASM logo mark — mountain and river S design" />
          </div>
        </div>
      </section>

      <ScrollIndicator />
      <DecoLine />

      {/* Section 01: About */}
      <section className="asm-section" id="about">
        <div className="asm-container">
          <span className="section-number">01</span>
          <div className="section-label">ABOUT</div>
          <div className="about-grid">
            <div className="about-text fade-in">
              <h2>The StorySmith</h2>
              <p>I'm Sindbad Horizon — StorySmith and founder of Adventure Storytelling Media. I cover startup pitch events, luxury automotive showcases, independent film festivals, and anywhere else ambitious people are building something worth capturing.</p>
              <p>The most powerful stories aren't just told — they are tested. I build the asset, measure its effectiveness, and feed those insights back into the next iteration. Research → Creation → Refinement. I don't just capture your story — I help you find out if it lands.</p>
              <Link href="/story-test" className="btn-link">Curious about the research side? Learn about The Story Test →</Link>
              <p className="italic-text" style={{ marginTop: "1.5rem" }}>Boulder is home base. The world is the territory.</p>
            </div>
            <div className="about-visual fade-in">
              <div className="smithy-container">
                <img src={`${CDN}/smithy-scene_8d9f9aa6.png`} alt="2D illustrated smithy scene — faceless figure forging at an anvil with hammer, teal and charcoal palette" />
                <div className="smithy-label">FORGING STORIES</div>
              </div>
              <div className="sindbad-photo-wrapper">
                <img src={`${CDN}/sindbad-photo_dbfa7430.webp`} alt="Sindbad Horizon — StorySmith and founder of Adventure Storytelling Media" className="sindbad-photo" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <ScrollIndicator />
      <DecoLine />

      {/* Section 02: The Field */}
      <section className="asm-section section-bg-lighter" id="field">
        <div className="section-field-overlay"></div>
        <div className="asm-container" style={{ position: "relative", zIndex: 1 }}>
          <span className="section-number">02</span>
          <div className="section-label">PORTFOLIO</div>
          <div className="field-header">
            <h2>The Field</h2>
            <img src={`${CDN}/field-scene_b90a48f7.png`} alt="Faceless illustrated figure with camera on a mountain" style={{ height: "60px", width: "auto" }} />
          </div>
          <p className="field-subtitle">Story Scout — Events I've covered. Worlds I've entered.</p>

          {/* Portfolio 01: Concours d'Elegance */}
          <div className="portfolio-item fade-in">
            <div className="portfolio-video">
              <iframe src="https://www.youtube.com/embed/SvIIXnM2R70" title="Shelby 427 SC Roadster — Pebble Beach Concours d'Elegance cinematic video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen loading="lazy"></iframe>
            </div>
            <div className="portfolio-info">
              <SubsectionHeader num="01" />
              <h3>Concours d'Elegance</h3>
              <div className="location">PEBBLE BEACH</div>
              <p>A restored Shelby 427 SC Roadster at the most prestigious automotive showcase in the world. The assignment wasn't to film a car — it was to capture why someone spends decades and a fortune restoring one, and make sure anyone who watches understands exactly what they're looking at. Jack Bell's words say it better than mine.</p>
              <div className="testimonial">
                <p>"Working with Sindbad Horizon of Adventure Storytelling Media was a great experience. He not only captured stunning footage and photographs of the Cobra at Pebble Beach, but also brought the story and character of the car to life through his editing and creative direction. The results went far beyond documentation — they conveyed the emotion, craftsmanship, and legacy behind the machine itself. Highly recommended for anyone who values authentic, cinematic storytelling."</p>
                <div className="testimonial-author">Jack Bell <span>— Owner</span></div>
              </div>
            </div>
          </div>

          {/* Portfolio 02: PitchBoulder */}
          <div className="portfolio-item fade-in">
            <div className="portfolio-info">
              <SubsectionHeader num="02" />
              <h3>PitchBoulder</h3>
              <div className="location">BOULDER, CO</div>
              <p>Every Wednesday, founders step into a room of investors, operators, and advisors and try to explain why their company matters. I've been embedded in that room for nearly three years. What I've learned is that the camera is the least interesting part — the real story is whether the audience actually heard what the founder thought they said. Sometimes they did. Often they didn't. That gap is everything.</p>
              <div className="testimonial">
                <p>"When we created the website for PitchBoulder, we needed a video to capture the spirit of our meetings and the energy in the room. I hired Sindbad Horizon to create a piece that would address these requirements. Did he ever! The video is sensational, and I could not be more pleased."</p>
                <div className="testimonial-author">Peter Rothschild <span>— Founder</span></div>
              </div>
            </div>
            <div className="portfolio-video">
              <iframe src="https://www.youtube.com/embed/n7k-Bwu3KIU" title="PitchBoulder — startup pitch event highlight video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen loading="lazy"></iframe>
            </div>
          </div>

          {/* Portfolio 03: Colorado Medieval Festival */}
          <div className="portfolio-item fade-in">
            <div className="portfolio-video">
              <iframe src="https://www.youtube.com/embed/2OMfPSibhvE" title="Colorado Medieval Festival — drone and ground footage of jousting and performances" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen loading="lazy"></iframe>
            </div>
            <div className="portfolio-info">
              <SubsectionHeader num="03" />
              <h3>Colorado Medieval Festival</h3>
              <div className="location">LOVELAND, CO</div>
              <p>Most people know the Colorado Renaissance Festival south of Denver. Fewer know about this one — tucked into the forest west of Loveland at Colorado Castle. The Knights of Mayhem brought full contact jousting front and center, with performers whose credits include Game of Thrones. Drone work, ground footage, and a story hiding in plain sight.</p>
            </div>
          </div>

          {/* Portfolio 04: On Location */}
          <div className="portfolio-item fade-in" style={{ gridTemplateColumns: "1fr" }}>
            <div>
              <SubsectionHeader num="04" />
              <h3 style={{ fontSize: "1.75rem", marginBottom: "0.5rem" }}>On Location — Places Worth Going</h3>
              <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 600, fontSize: "0.7rem", letterSpacing: "0.15em", textTransform: "uppercase" as const, color: "var(--text-dim)", marginBottom: "1rem" }}>SWITZERLAND &amp; ITALY</div>
              <p style={{ color: "var(--text-muted)", fontStyle: "italic", fontSize: "0.9rem", marginBottom: "1.5rem" }}>Not every story needs a client brief. Some just need someone willing to show up with a drone and a good eye. Switzerland, Italy, and counting.</p>
              <div className="video-grid">
                {["NDSCqskuloU", "JXRdUW44Ogc", "4nCOwBhR8wY", "wscRbnML_U4", "yVSUIavDFeg", "1_YW_4ulyrs"].map((id, i) => (
                  <div className="portfolio-video" key={id}>
                    <iframe src={`https://www.youtube.com/embed/${id}`} title={`Alpine drone footage — short ${i + 1}`} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen loading="lazy"></iframe>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Portfolio 05: More From The Field */}
          <div className="fade-in">
            <SubsectionHeader num="05" />
            <h3 style={{ fontSize: "1.75rem", marginBottom: "1rem" }}>More From The Field</h3>
            <p style={{ color: "var(--text-muted)", fontStyle: "italic", fontSize: "0.9rem", marginBottom: "1.5rem" }}>Not every story fits a single frame. SeriesFest Denver, the American Film Market, Boulder Startup Week, Colorado Startup Week, Pitch Boulder — if it's ambitious, interesting, and worth covering, a StorySmith belongs there. More coverage documented on LinkedIn.</p>
            <div className="photo-grid">
              {[
                { src: `${CDN}/pebble-beach_3258d527.jpg`, alt: "Pebble Beach Concours d'Elegance — Shelby Cobra 427 SC Roadster on the lawn", label: "CONCOURS D'ELEGANCE — PEBBLE BEACH", url: "https://www.pebblebeachconcours.net/" },
                { src: `${CDN}/american-film-market_75ebac43.jpg`, alt: "American Film Market — independent film industry event coverage", label: "AMERICAN FILM MARKET", url: "https://americanfilmmarket.com/" },
                { src: `${CDN}/pitchboulder-image_5a2ff2a6.jpg`, alt: "PitchBoulder — weekly startup pitch event in Boulder, Colorado", label: "PITCHBOULDER — BOULDER, CO", url: "https://pitchboulder.co/" },
                { src: `${CDN}/outside-festival_96557afb.jpg`, alt: "Outside Days — Outside Magazine outdoor adventure and lifestyle festival", label: "OUTSIDE DAYS", url: "https://outsidedays.outsideonline.com/" },
                { src: `${CDN}/seriesfest_abf49c68.jpg`, alt: "SeriesFest Denver — independent television festival", label: "SERIESFEST DENVER", url: "https://seriesfest.com/" },
                { src: `${CDN}/fashion-in-focus_ac10b663.jpg`, alt: "Fashion in Focus — costume design and television craft celebration", label: "FASHION IN FOCUS", url: "https://seriesfest.com/" },
              ].map((img) => (
                <div className="photo-grid-item" key={img.label}>
                  <a href={img.url} target="_blank" rel="noopener noreferrer">
                    <img src={img.src} alt={img.alt} />
                    <div className="photo-grid-label">{img.label}</div>
                  </a>
                </div>
              ))}
            </div>
            <div className="follow-cta">
              <p>More coverage documented on LinkedIn. Follow along.</p>
              <a href="https://www.linkedin.com/in/sindbad-horizon-b19b4a264" target="_blank" rel="noopener noreferrer" className="btn btn-solid-turquoise" style={{ width: "fit-content" }} aria-label="View more coverage on LinkedIn (opens in new tab)">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                Follow on LinkedIn
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 10L10 2M10 2H4M10 2v6" /></svg>
              </a>
            </div>
            <p className="story-test-cta">Want to know if your story lands? <Link href="/story-test" className="btn-link">See The Story Test →</Link></p>
          </div>
        </div>
      </section>

      <ScrollIndicator />
      <DecoLine />

      {/* Section 03: What I Do */}
      <section className="asm-section" id="services">
        <div className="asm-container">
          <span className="section-number">03</span>
          <div className="services-header fade-in">
            <h2>What I Do</h2>
            <p>Whether you need the story captured, tested, or both — here's how I work.</p>
            <div className="services-process-label">THE STORYSMITH PROCESS</div>
          </div>
          <div className="services-grid">
            <div className="service-card fade-in">
              <div className="service-card-glow"></div>
              <div className="service-card-illustration">
                <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663488690227/895rg4FQazWBsi7DRhtfWX/story-scout-new-VBQUTT7amSbYMGt9ACdRog.webp" alt="Faceless illustrated character extending a microphone toward another person" />
              </div>
              <div className="subsection-num">01</div>
              <h3>Story Scout</h3>
              <p>I embed in high-caliber events and capture the story from the inside. Video, audio, drone, and photography — from startup pitch nights to luxury showcases to film festivals.</p>
              <Link href="/connect" className="btn-link" aria-label="Get In Touch — Story Scout">Get In Touch</Link>
            </div>
            <div className="service-card fade-in">
              <div className="service-card-glow"></div>
              <div className="service-card-illustration">
                <img src={`${CDN}/story-test-icon_73e1b604.png`} alt="Faceless illustrated character facilitating a group discussion" />
              </div>
              <div className="subsection-num">02</div>
              <h3>Story Test</h3>
              <p>Most founders believe their story is clear. Most audiences disagree. The Story Test uses AI-powered audience research to show you exactly who's receptive to your pitch, who isn't, and what specific objections are standing between you and a yes — before you spend another dollar finding out the hard way.</p>
              <Link href="/story-test" className="btn-link" aria-label="Learn More — Story Test">Learn More</Link>
            </div>
            <div className="service-card fade-in">
              <div className="service-card-glow"></div>
              <div className="service-card-illustration">
                <img src={`${CDN}/story-forge_347ed23f.png`} alt="Faceless illustrated figure at a workbench surrounded by floating tools" />
              </div>
              <div className="subsection-num">03</div>
              <h3>Story Forge</h3>
              <p>Have something in mind that doesn't fit a box? Good. Let's talk.</p>
              <Link href="/connect" className="btn-link" aria-label="Get In Touch — Story Forge">Get In Touch</Link>
            </div>
          </div>
        </div>
      </section>

      <ScrollIndicator />
      <DecoLine />

      {/* Section 04: Contact */}
      <section className="asm-section section-bg-lighter" id="contact">
        <div className="asm-container" style={{ position: "relative", zIndex: 1 }}>
          <span className="section-number">04</span>
          <div className="section-label">CONTACT</div>
          <div className="contact-content fade-in">
            <h2>Let's Talk</h2>
            <p>Whether you're a founder, event organizer, or just curious — reach out.</p>
            <div className="contact-links">
              <a href="mailto:sindbad@advstmedia.com" className="contact-link" aria-label="Email Sindbad at sindbad@advstmedia.com">
                <div className="contact-link-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="M22 4L12 13 2 4" /></svg>
                </div>
                <div className="contact-link-text">
                  <span className="label">Email</span>
                  <span className="value">sindbad@advstmedia.com</span>
                </div>
              </a>
              <a href="https://www.linkedin.com/in/sindbad-horizon-b19b4a264" target="_blank" rel="noopener noreferrer" className="contact-link" aria-label="Connect with Sindbad Horizon on LinkedIn (opens in new tab)">
                <div className="contact-link-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                </div>
                <div className="contact-link-text">
                  <span className="label">LinkedIn</span>
                  <span className="value">Connect on LinkedIn</span>
                </div>
              </a>
            </div>
            <p className="contact-note">Prefer to reach out directly? All conversations start with a message.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
