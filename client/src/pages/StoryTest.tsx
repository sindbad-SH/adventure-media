import { useEffect } from "react";
import { Link } from "wouter";

const CDN = "https://d2xsxph8kpxj0f.cloudfront.net/310519663488690227/895rg4FQazWBsi7DRhtfWX";

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

export default function StoryTest() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.1 }
    );
    document.querySelectorAll(".fade-in").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <main id="main">
      {/* Hero */}
      <section className="subpage-hero">
        <div className="asm-container">
          <Link href="/" className="back-link">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5" /><path d="M12 19l-7-7 7-7" /></svg>
            Back to Home
          </Link>
          <div className="section-label">AUDIENCE INTELLIGENCE</div>
          <div className="subpage-hero-grid">
            <div>
              <h1>The Story <span className="turquoise">Test</span></h1>
              <p className="subtitle">AI-powered audience research that shows you exactly who's listening, who's not, and what to do about it.</p>
            </div>
            <div>
              <img src={`${CDN}/story-test-hero-fork_cac43992.webp`} alt="Illustrated fork in the road — two paths diverging in teal and charcoal" />
            </div>
          </div>
        </div>
      </section>

      <ScrollIndicator />
      <DecoLine />

      {/* The Problem */}
      <section className="st-section">
        <div className="asm-container">
          <div className="st-section-grid fade-in st-stagger-1">
            <div>
              <h2>The Problem</h2>
              <p>Most founders think their story is clear. Most audiences disagree. You've spent months refining your pitch, your brand, your message — and you believe it's landing. But belief isn't data.</p>
              <p>The gap between what you think you're saying and what people actually hear is where deals die, campaigns stall, and launches underperform. The Story Test closes that gap — before you spend another dollar finding out the hard way.</p>
            </div>
            <div>
              <img src={`${CDN}/story-test-problem-bubbles_aaa74e5c.webp`} alt="Illustrated speech bubbles showing miscommunication between founder and audience" />
            </div>
          </div>
        </div>
      </section>

      <ScrollIndicator />
      <DecoLine />

      {/* The Clarity Report */}
      <section className="st-section section-bg-lighter">
        <div className="asm-container" style={{ position: "relative", zIndex: 1 }}>
          <div className="st-section-grid reverse fade-in st-stagger-2">
            <div>
              <h2>The Clarity Report</h2>
              <p>The Story Test produces a Clarity Report — a detailed breakdown of how your story performs across different audience segments. Using AI-powered audience simulation, we test your pitch, your brand narrative, or your campaign message against realistic audience archetypes.</p>
              <p>You get a clear picture of who's receptive, who's skeptical, and exactly what objections are standing between you and a yes. No guesswork. No focus groups. Just signal.</p>
            </div>
            <div>
              <img src={`${CDN}/story-test-analysis_fc95f9a4.webp`} alt="Illustrated analysis dashboard showing audience response data" />
            </div>
          </div>
        </div>
      </section>

      <ScrollIndicator />
      <DecoLine />

      {/* Who This Is For */}
      <section className="st-section">
        <div className="asm-container">
          <div className="fade-in st-stagger-3">
            <h2 style={{ marginBottom: "0.5rem" }}>Who This Is For</h2>
            <p style={{ color: "var(--text-muted)", fontStyle: "italic", marginBottom: "1rem" }}>The Story Test is built for anyone who needs to know — before they launch — whether their message actually lands.</p>
            <img src={`${CDN}/story-test-who-for_ac9e317d.webp`} alt="Illustrated figures representing different audience types" style={{ maxWidth: "100%", marginBottom: "1.5rem", borderRadius: "4px" }} />
          </div>
          <div className="who-cards fade-in st-stagger-4">
            <div className="who-card">
              <div className="who-num">01</div>
              <h4>THE PITCHER</h4>
              <p>Founders preparing for investor pitches, demo days, or accelerator applications who need to know their story connects before they walk into the room.</p>
            </div>
            <div className="who-card">
              <div className="who-num">02</div>
              <h4>THE STRATEGIST</h4>
              <p>Marketing leads and brand strategists launching campaigns, repositioning products, or entering new markets who need audience validation before committing budget.</p>
            </div>
            <div className="who-card">
              <div className="who-num">03</div>
              <h4>THE SKEPTIC</h4>
              <p>Leaders who suspect their messaging isn't landing but can't pinpoint why. The Clarity Report gives them the evidence to act on instinct.</p>
            </div>
          </div>
        </div>
      </section>

      <ScrollIndicator />
      <DecoLine />

      {/* What Happens Next */}
      <section className="st-section section-bg-lighter">
        <div className="asm-container" style={{ position: "relative", zIndex: 1 }}>
          <div className="st-section-grid fade-in st-stagger-3">
            <div>
              <h2>What Happens Next</h2>
              <p>After the Clarity Report is delivered, you'll have a clear map of your story's strengths and blind spots. From there, you can refine your pitch, adjust your messaging, or commission a full Story Forge engagement to rebuild the narrative from the ground up.</p>
              <p>Every engagement starts with a conversation. No pitch. No pressure. Just a direct discussion about what you're building and whether The Story Test is the right tool.</p>
            </div>
            <div>
              <img src={`${CDN}/story-test-handoff_d8247e04.webp`} alt="Illustrated handoff scene — figure presenting a completed report" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="st-section">
        <div className="asm-container">
          <div className="cta-box fade-in st-stagger-5">
            <h2>Ready to Test Your Story?</h2>
            <p>Book a free discovery call. No pitch, no pressure — just a conversation about whether The Story Test is right for what you're building.</p>
            <a href="https://calendly.com/sindbad-adventurestorytellingmedia/new-meeting" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              Book a Discovery Call
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" /><path d="M15 3h6v6" /><path d="M10 14L21 3" /></svg>
            </a>
            <p className="email-note">Or email directly: <a href="mailto:sindbad@advstmedia.com">sindbad@advstmedia.com</a></p>
          </div>
        </div>
      </section>
    </main>
  );
}
