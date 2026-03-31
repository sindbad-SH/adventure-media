import { Link } from "wouter";

export default function Connect() {
  return (
    <main id="main">
      <section className="subpage-hero">
        <div className="asm-container subpage-centered">
          <Link href="/" className="back-link">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5" /><path d="M12 19l-7-7 7-7" /></svg>
            Back to Home
          </Link>
          <div className="section-label">GET IN TOUCH</div>
          <h1>Let's <span className="turquoise">Connect</span></h1>
          <p className="subtitle">Whether you're a founder, event organizer, or just curious — here's how to reach me.</p>
          <a href="https://calendly.com/sindbad-adventurestorytellingmedia/new-meeting" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ marginTop: "1.5rem" }}>
            Book a Discovery Call
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" /><path d="M15 3h6v6" /><path d="M10 14L21 3" /></svg>
          </a>
        </div>
      </section>

      <div className="deco-line">
        <div className="deco-line-left"></div>
        <div className="deco-diamond"></div>
        <div className="deco-line-right"></div>
      </div>

      <section className="asm-section">
        <div className="asm-container subpage-centered">
          <div className="connect-grid">
            <a href="mailto:sindbad@advstmedia.com" className="connect-card">
              <div className="connect-card-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="M22 4L12 13 2 4" /></svg>
              </div>
              <h3>Email</h3>
              <p>sindbad@advstmedia.com</p>
            </a>
            <a href="https://www.linkedin.com/in/sindbad-horizon-b19b4a264" target="_blank" rel="noopener noreferrer" className="connect-card">
              <div className="connect-card-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
              </div>
              <h3>LinkedIn</h3>
              <p>Connect on LinkedIn</p>
            </a>
            <a href="https://calendly.com/sindbad-adventurestorytellingmedia/new-meeting" target="_blank" rel="noopener noreferrer" className="connect-card">
              <div className="connect-card-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" /><path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01" /></svg>
              </div>
              <h3>Schedule</h3>
              <p>Book a Discovery Call</p>
            </a>
          </div>
          <p className="connect-note">All conversations start with a message. No pitch, no pressure.</p>
        </div>
      </section>
    </main>
  );
}
