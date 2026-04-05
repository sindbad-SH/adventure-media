import { useEffect } from "react";
import { Link } from "wouter";

const CDN = "https://d2xsxph8kpxj0f.cloudfront.net/310519663488690227/895rg4FQazWBsi7DRhtfWX";

const CALENDLY = "https://calendly.com/sindbad-adventurestorytellingmedia/new-meeting";

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

const stages = [
  {
    num: "01",
    name: "Story Scouting",
    price: "$1,500–$2,500",
    desc: "Raw market intelligence. Who your audience actually is, what language they use, what competitors are missing. You receive Field Notes — a plain-language synthesis of everything discovered before a single word of strategy is written.",
    bestFor: "You have a product or offer but don't yet know who your real buyer is or how to talk to them.",
    icon: `${CDN}/stage-01-scouting_035302a0.png`,
    iconAlt: "Faceless illustrated figure with binoculars scouting the landscape",
  },
  {
    num: "02",
    name: "Story Mapping",
    price: "$1,500–$2,500",
    desc: "The intelligence gets shaped into narrative strategy. A story structure — who the audience is, what arc moves them, and what that looks like as a piece of content. The blueprint that drives everything built next.",
    bestFor: "You have research but need someone to shape it into a clear strategic direction.",
    icon: `${CDN}/stage-02-mapping_29c433f7.png`,
    iconAlt: "Faceless illustrated figure with a compass and map plotting a course",
  },
  {
    num: "03",
    name: "Story Forging",
    price: "$2,500–$5,000",
    desc: "The strategy becomes something real. A prototype — usually a short video — built to be tested, not published. Real enough to get honest reactions from a real audience. Scales with format complexity.",
    bestFor: "You have a strategy and need a prototype built before committing to full production costs.",
    icon: `${CDN}/stage-03-forging_bf083c65.png`,
    iconAlt: "Faceless illustrated figure forging at an anvil with hammer and sparks",
  },
  {
    num: "04",
    name: "Story Testing",
    price: "$1,500–$2,500 + panel cost",
    desc: "The prototype meets an audience — real people, AI audience panels, or both. General or specialized: industry-specific, demographically targeted, whatever your market requires. Panel cost is passed through at cost.",
    bestFor: "You have an asset ready and want real data before committing to full distribution spend.",
    icon: `${CDN}/stage-04-testing_9383f11e.png`,
    iconAlt: "Faceless illustrated figure presenting to a group of seated audience members",
  },
  {
    num: "05",
    name: "Story Assessing",
    price: "$750–$1,500",
    desc: "We sit with what came back. What held, what didn't, what it means, and what to do next. Clear findings and a concrete recommendation — refine and retest, or proceed to full production.",
    bestFor: "You have data or audience feedback and need someone to decode it and point the way forward.",
    icon: `${CDN}/stage-05-assessing_99e7a8f9.png`,
    iconAlt: "Faceless illustrated figure reviewing documents and data charts",
  },
];

const whoCards = [
  {
    title: "The Pitcher",
    desc: "Founders preparing for investor pitches, demo days, or accelerator applications who need to know their story connects before they walk into the room.",
  },
  {
    title: "The Strategist",
    desc: "Marketing leads and brand teams launching campaigns, repositioning products, or entering new markets who need audience validation before committing budget.",
  },
  {
    title: "The Skeptic",
    desc: "Leaders who suspect their messaging isn't landing but can't pinpoint why. The process gives them the evidence to act on instinct.",
  },
];

export default function ForgeTheSaga() {
  useEffect(() => {
    document.title = "Forge the Saga | Adventure Storytelling Media";
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.1 }
    );
    document.querySelectorAll(".fade-in").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <main>
      {/* Section 1 — Hero */}
      <section className="subpage-hero">
        <div className="asm-container subpage-centered">
          <Link href="/" className="back-link">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5" /><path d="M12 19l-7-7 7-7" /></svg>
            Back to Home
          </Link>
          <div className="section-label">THE STORYSMITH PROCESS</div>
          <h1 style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", marginBottom: "0.75rem" }}>
            Forge the <span className="turquoise">Saga</span>
          </h1>
          <p className="subtitle" style={{ maxWidth: "600px", margin: "0 auto 1.5rem" }}>
            A market clarity engagement by Adventure Storytelling Media
          </p>
          <div className="fade-in" style={{ maxWidth: "680px", margin: "0 auto", textAlign: "left" }}>
            <p style={{ color: "var(--text-muted)", lineHeight: 1.8, marginBottom: "1rem" }}>
              Most businesses don't have a marketing problem. They have a story problem. You've spent months refining your pitch, your brand, your message — and you believe it's landing. But belief isn't data.
            </p>
            <p style={{ color: "var(--text-muted)", lineHeight: 1.8 }}>
              The gap between what you think you're saying and what people actually hear is where deals die, campaigns stall, and launches underperform. Forge the Saga closes that gap before it costs you.
            </p>
          </div>
          <div style={{ marginTop: "2rem" }}>
            <img
              src={`${CDN}/stage-03-forging_bf083c65.png`}
              alt="Faceless illustrated figure forging at an anvil — teal and charcoal palette"
              style={{ maxHeight: "200px", width: "auto", filter: "drop-shadow(0 0 30px rgba(56,248,236,0.3))" }}
            />
          </div>
        </div>
      </section>

      <ScrollIndicator />
      <DecoLine />

      {/* Section 2 — The Full Engagement */}
      <section className="asm-section section-bg-lighter">
        <div className="asm-container">
          <div className="fade-in" style={{ textAlign: "center", maxWidth: "720px", margin: "0 auto" }}>
            <div className="section-label" style={{ marginBottom: "1rem" }}>FULL ENGAGEMENT — BEST VALUE</div>
            <h2 style={{ marginBottom: "0.5rem" }}>The Full Saga</h2>
            <div style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 700,
              fontSize: "1.5rem",
              color: "#38F8EC",
              letterSpacing: "0.05em",
              marginBottom: "1.5rem",
            }}>
              $6,500–$9,500
            </div>
            <p style={{ color: "var(--text-muted)", lineHeight: 1.8, marginBottom: "2rem" }}>
              All five stages run as a complete loop. The research shapes the strategy. The strategy shapes what gets built. What gets built gets tested. What gets tested feeds the next round. Run the full loop and you get a story pressure-tested before it costs you real money to tell it at scale.
            </p>
            <a href={CALENDLY} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
              Book a Discovery Call
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" /><path d="M15 3h6v6" /><path d="M10 14L21 3" /></svg>
            </a>
          </div>
        </div>
      </section>

      <ScrollIndicator />
      <DecoLine />

      {/* Section 3 — The Five Stages */}
      <section className="asm-section">
        <div className="asm-container">
          <div className="fade-in" style={{ textAlign: "center", marginBottom: "3rem" }}>
            <div className="section-label" style={{ marginBottom: "1rem" }}>THE FIVE STAGES</div>
            <h2>Choose Your Entry Point</h2>
            <p style={{ color: "var(--text-muted)", fontStyle: "italic", maxWidth: "560px", margin: "0.75rem auto 0" }}>
              Not every story starts at the beginning. Each stage stands alone — choose your entry point.
            </p>
          </div>

          <div className="fts-stages">
            {stages.map((stage) => (
              <div className="fts-stage-card fade-in" key={stage.num}>
                <div className="fts-stage-icon">
                  <img src={stage.icon} alt={stage.iconAlt} />
                </div>
                <div className="fts-stage-content">
                  <div style={{ display: "flex", alignItems: "baseline", gap: "0.75rem", marginBottom: "0.5rem" }}>
                    <span className="subsection-num">{stage.num}</span>
                    <div style={{ width: "32px", height: "1px", background: "rgba(56,248,236,0.3)" }}></div>
                  </div>
                  <h3 style={{ fontSize: "1.4rem", marginBottom: "0.25rem" }}>{stage.name}</h3>
                  <div style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 700,
                    fontSize: "1.1rem",
                    color: "#38F8EC",
                    letterSpacing: "0.03em",
                    marginBottom: "1rem",
                  }}>
                    {stage.price}
                  </div>
                  <p style={{ color: "var(--text-muted)", lineHeight: 1.7, marginBottom: "1rem" }}>{stage.desc}</p>
                  <p style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 600,
                    fontSize: "0.75rem",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase" as const,
                    color: "#7FFCF4",
                    padding: "0.5rem 0.75rem",
                    background: "rgba(56,248,236,0.06)",
                    borderLeft: "2px solid rgba(56,248,236,0.3)",
                    borderRadius: "0 4px 4px 0",
                  }}>
                    Best for: {stage.bestFor}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ScrollIndicator />
      <DecoLine />

      {/* Section 4 — Who This Is For */}
      <section className="asm-section section-bg-lighter">
        <div className="asm-container">
          <div className="fade-in" style={{ textAlign: "center", marginBottom: "2.5rem" }}>
            <h2>Who Forges a Saga</h2>
          </div>
          <div className="who-cards">
            {whoCards.map((card, i) => (
              <div className={`who-card fade-in st-stagger-${i + 1}`} key={card.title}>
                <div className="subsection-num" style={{ marginBottom: "0.75rem" }}>{String(i + 1).padStart(2, "0")}</div>
                <h3 style={{ fontSize: "1.25rem", marginBottom: "0.75rem" }}>{card.title}</h3>
                <p style={{ color: "var(--text-muted)", lineHeight: 1.7 }}>{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ScrollIndicator />
      <DecoLine />

      {/* Section 5 — CTA */}
      <section className="asm-section">
        <div className="asm-container">
          <div className="cta-box fade-in" style={{ textAlign: "center", maxWidth: "640px", margin: "0 auto" }}>
            <h2 style={{ marginBottom: "1rem" }}>Ready to Forge Yours?</h2>
            <p style={{ color: "var(--text-muted)", lineHeight: 1.7, marginBottom: "2rem" }}>
              Every saga starts with a conversation. Tell me where you are in the process and we'll find your entry point.
            </p>
            <a href={CALENDLY} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", marginBottom: "1.25rem" }}>
              Book a Discovery Call
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" /><path d="M15 3h6v6" /><path d="M10 14L21 3" /></svg>
            </a>
            <div>
              <a href="mailto:sindbad@advstmedia.com" className="btn-link" style={{ fontSize: "0.9rem" }}>
                Or email sindbad@advstmedia.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
