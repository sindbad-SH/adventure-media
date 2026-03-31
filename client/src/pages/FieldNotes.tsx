import { Link } from "wouter";

export default function FieldNotes() {
  return (
    <main id="main">
      <section className="subpage-hero">
        <div className="asm-container subpage-centered">
          <Link href="/" className="back-link">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5" /><path d="M12 19l-7-7 7-7" /></svg>
            Back to Home
          </Link>
          <div className="section-label">STORIES &amp; DISPATCHES</div>
          <h1>Field <span className="turquoise">Notes</span></h1>
          <p className="subtitle">Dispatches from the field — observations, lessons, and stories from the events and worlds I've covered.</p>
        </div>
      </section>

      <div className="deco-line">
        <div className="deco-line-left"></div>
        <div className="deco-diamond"></div>
        <div className="deco-line-right"></div>
      </div>

      <section className="asm-section">
        <div className="asm-container subpage-centered">
          <div className="subpage-body">
            <p>Field Notes is where the longer stories live — the ones that don't fit into a highlight reel or a 60-second short. Event breakdowns, behind-the-scenes observations, lessons from three years embedded in the Boulder startup ecosystem, and the occasional dispatch from wherever the work takes me next.</p>
            <p>Think of it as the written companion to The Field. If the portfolio shows what I captured, Field Notes explains what I noticed while I was there.</p>
          </div>
          <div className="coming-soon-box">
            <div className="coming-soon-badge">COMING SOON</div>
            <p>The first Field Notes entries are in progress. Follow along on LinkedIn for early previews and behind-the-scenes updates.</p>
            <a href="https://www.linkedin.com/in/sindbad-horizon-b19b4a264" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ width: "fit-content", marginTop: "0.75rem" }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
              Follow on LinkedIn
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
