const deadlines = [
  {
    title: "TEE Exam Form (Dec 2026)",
    description:
      "Term End Examination form submission window. Don't miss this like before! Submit with or without late fees depending on the official schedule.",
    icon: "⏰",
    status: "Urgent",
  },
  {
    title: "Assignment Submission",
    description:
      "Tutor Marked Assignments (TMA) submission guidelines, Google forms, and study center drop-off instructions per Regional Centre.",
    icon: "📄",
    status: "Active",
  },
  {
    title: "Re-registration",
    description:
      "Next year or semester re-registration portal for undergraduate, postgraduate, and diploma programmes.",
    icon: "🔄",
    status: "Open",
  },
  {
    title: "Practical Examination",
    description:
      "Lab schedules, BCA/MCA practical viva dates, and list of eligible students published by Regional Centres.",
    icon: "💻",
    status: "Check RC",
  },
  {
    title: "Project / Synopsis",
    description:
      "Guidelines for IGNOU project proposal approval (BCSP-064, MCA, etc.) and dissertation submission deadlines.",
    icon: "📋",
    status: "Ongoing",
  },
  {
    title: "Grade Card & Results",
    description:
      "Latest updates on TEE theory marks, assignment grades, and practical marks status updates.",
    icon: "📊",
    status: "Updated",
  },
];

const notices = [
  {
    title: "Official IGNOU Main Circulars",
    description:
      "Real-time scraped notifications directly from ignou.ac.in regarding academic calendar updates and exam guidelines.",
    icon: "🔔",
  },
  {
    title: "Regional Centre Specific Alerts",
    description:
      "RC Delhi 1/2/3, Patna, Mumbai, Kolkata notices for local assignment submission links and viva schedules.",
    icon: "📍",
  },
  {
    title: "Exam Centre & Hall Ticket",
    description:
      "Announcements regarding hall ticket release, exam centre change requests, and seating plans.",
    icon: "🎫",
  },
  {
    title: "Admission & Enrollment",
    description:
      "Fresh admission cycles, re-admission rules, and credit transfer notifications for active students.",
    icon: "📚",
  },
  {
    title: "Student Support Services",
    description:
      "IGNOU Gyandeep, eGyankosh study material updates, IGNOU FM broadcasts, and Gyan Darshan schedules.",
    icon: "🎧",
  },
];

const faqs = [
  {
    q: "What happens if I miss the IGNOU TEE exam form deadline?",
    a: "Missing the exam form means you cannot appear for the upcoming Term End Examinations, delaying your degree completion by 6 months (which is why DeadlineDesk was created so you never miss it again!).",
  },
  {
    q: "How do I check my IGNOU Regional Centre specific notices?",
    a: "Every Regional Centre (RC) has its own website. DeadlineDesk aggregates notices across popular RCs so you don't have to check 10 different tabs.",
  },
  {
    q: "Are assignment submission deadlines the same for all study centres?",
    a: "No! While IGNOU issues general dates, individual Study Centres and Regional Centres often set their own guidelines for online vs offline submission.",
  },
  {
    q: "Where can I download my IGNOU ID Card and Grade Card?",
    a: "You can access them directly via the official IGNOU student zone portal linked in our Quick Tools section.",
  },
];

const testimonials = [
  {
    quote:
      "I missed my TEE exam form last semester and panicked. DeadlineDesk puts all notices in one clear place without the messy official website UI. Absolute lifesaver for IGNOU students.",
    name: "Aakash Sharma",
    role: "MCA Student",
  },
  {
    quote:
      "Checking my Regional Centre notice board used to take forever. Now I just open DeadlineDesk and see assignment submission links instantly.",
    name: "Priya Verma",
    role: "BCA Student",
  },
  {
    quote:
      "No fluff, straight data. Exactly what IGNOU students need when deadlines are approaching fast.",
    name: "Rahul Kumar",
    role: "BAG Student",
  },
];

function Arrow() {
  return <span aria-hidden="true" className="vq-arrow">↗</span>;
}

function SectionHeading({ eyebrow, title, description, light = false }) {
  return (
    <div className={`vq-section-heading ${light ? "is-light" : ""}`}>
      {eyebrow && <span className="vq-eyebrow">{eyebrow}</span>}
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}

export default function Home() {
  return (
    <main className="vq-home">
      <style>{`
        .vq-home {
          --vq-ink: #101a32;
          --vq-muted: #647087;
          --vq-blue: #1769e8;
          --vq-cyan: #22c6d8;
          --vq-soft: #f4f8ff;
          color: var(--vq-ink);
          background: #fff;
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          overflow: hidden;
        }
        .vq-home * { box-sizing: border-box; }
        .vq-home a { color: inherit; text-decoration: none; }
        .vq-container { width: min(1180px, calc(100% - 48px)); margin: 0 auto; }
        .vq-hero {
          position: relative; isolation: isolate; min-height: 610px; display: grid;
          align-items: center; padding: 82px 0 76px;
          background: radial-gradient(ellipse at 78% 42%, rgba(31,122,239,.18), transparent 36%),
            linear-gradient(115deg, #f7fbff 0%, #eef5ff 52%, #f8fcff 100%);
        }
        .vq-hero:before, .vq-hero:after { content:""; position:absolute; z-index:-1; border:1px solid rgba(23,105,232,.12); border-radius:50%; }
        .vq-hero:before { width:520px;height:520px;right:-120px;top:45px; }
        .vq-hero:after { width:390px;height:390px;right:-55px;top:110px; }
        .vq-hero-grid { display:grid; grid-template-columns: 1.02fr .98fr; gap:50px; align-items:center; }
        .vq-eyebrow { display:inline-flex; align-items:center; gap:10px; color:var(--vq-blue); font-size:12px; font-weight:800; letter-spacing:.15em; text-transform:uppercase; }
        .vq-eyebrow:before { content:""; width:28px; height:2px; background:var(--vq-cyan); }
        .vq-hero h1 { margin:22px 0 20px; max-width:620px; font-size:clamp(42px,5vw,66px); line-height:1.08; letter-spacing:-.045em; font-weight:800; }
        .vq-hero h1 span { color:var(--vq-blue); }
        .vq-hero-copy { max-width:570px; color:#5d6b82; font-size:16px; line-height:1.85; }
        .vq-actions { display:flex; flex-wrap:wrap; gap:14px; margin-top:30px; }
        .vq-btn { display:inline-flex; align-items:center; justify-content:center; gap:18px; min-height:52px; padding:0 23px; border-radius:5px; background:var(--vq-blue); color:white !important; font-size:14px; font-weight:750; box-shadow:0 12px 26px rgba(23,105,232,.2); transition:.2s ease; }
        .vq-btn:hover { transform:translateY(-3px); box-shadow:0 16px 30px rgba(23,105,232,.27); }
        .vq-btn-outline { background:white; color:var(--vq-ink) !important; border:1px solid #dce6f4; box-shadow:none; }
        .vq-hero-art { position:relative; min-height:420px; display:grid; place-items:center; }
        .vq-art-orbit { position:absolute; width:390px; height:390px; border:1px dashed rgba(23,105,232,.3); border-radius:50%; }
        .vq-art-core { position:relative; width:min(360px,90%); aspect-ratio:1; border-radius:34% 66% 58% 42% / 43% 38% 62% 57%; background:linear-gradient(145deg,#1465e7,#24c5d5); box-shadow:0 35px 80px rgba(25,105,220,.28); display:grid; place-items:center; transform:rotate(-7deg); }
        .vq-art-core:before { content:""; position:absolute; inset:18px; border:1px solid rgba(255,255,255,.35); border-radius:inherit; }
        .vq-art-mark { transform:rotate(7deg); color:white; text-align:center; font-weight:850; letter-spacing:-.06em; font-size:52px; line-height:1.1; }
        .vq-art-mark small { display:block; margin-top:12px; font-size:11px; letter-spacing:.15em; font-weight:700; }
        .vq-float { position:absolute; z-index:2; display:flex; align-items:center; gap:10px; padding:14px 17px; border:1px solid #e7eef9; border-radius:10px; background:white; box-shadow:0 16px 40px rgba(30,65,110,.12); font-size:13px; font-weight:750; }
        .vq-float b { display:grid; place-items:center; width:34px;height:34px;border-radius:9px;background:#eaf3ff;color:var(--vq-blue);font-size:18px; }
        .vq-float-one { top:42px; left:0; } .vq-float-two { bottom:48px; right:-5px; }
        .vq-stats { position:relative; margin-top:-1px; background:#fff; }
        .vq-stats-grid { display:grid; grid-template-columns:repeat(4,1fr); padding:30px 0; border-bottom:1px solid #e9eef6; }
        .vq-stat { text-align:center; padding:10px 18px; border-right:1px solid #e9eef6; }
        .vq-stat:last-child { border:0; }
        .vq-stat strong { display:block; color:var(--vq-blue); font-size:31px; letter-spacing:-.04em; }
        .vq-stat span { color:var(--vq-muted); font-size:13px; }
        .vq-section { padding:100px 0; }
        .vq-section-heading { max-width:720px; margin:0 auto 52px; text-align:center; }
        .vq-section-heading h2 { margin:16px 0 14px; font-size:clamp(30px,3.7vw,45px); line-height:1.15; letter-spacing:-.04em; }
        .vq-section-heading p { margin:0; color:var(--vq-muted); font-size:15px; line-height:1.8; }
        .vq-about-grid { display:grid; grid-template-columns:.9fr 1.1fr; gap:75px; align-items:center; }
        .vq-about-visual { position:relative; min-height:450px; border-radius:14px; background:linear-gradient(145deg,#eaf3ff,#dff9fb); overflow:hidden; display:grid; place-items:center; }
        .vq-about-visual:before { content:""; position:absolute; width:330px;height:330px;border-radius:50%;background:linear-gradient(140deg,#1769e8,#28c6d5); opacity:.95; }
        .vq-about-visual:after { content:"IGNOU"; position:absolute; color:rgba(255,255,255,.96); font-size:75px; font-weight:900; letter-spacing:-.05em; }
        .vq-experience { position:absolute; z-index:1; right:22px; bottom:22px; padding:20px 23px; border-radius:10px; background:#fff; box-shadow:0 15px 35px rgba(25,60,100,.12); }
        .vq-experience strong { display:block; color:var(--vq-blue); font-size:30px; }
        .vq-experience span { color:var(--vq-muted); font-size:12px; }
        .vq-about-copy h2 { margin:17px 0; font-size:clamp(30px,3.5vw,43px); line-height:1.16; letter-spacing:-.04em; }
        .vq-about-copy p { color:var(--vq-muted); font-size:15px; line-height:1.9; }
        .vq-checks { display:grid; grid-template-columns:1fr 1fr; gap:13px; margin:26px 0 30px; }
        .vq-checks span { font-size:13px; font-weight:700; }
        .vq-checks span:before { content:"✓"; display:inline-grid; place-items:center; width:21px;height:21px;margin-right:9px;border-radius:50%;background:#e8f6ff;color:var(--vq-blue); }
        .vq-services { background:var(--vq-soft); }
        .vq-service-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:22px; }
        .vq-service-card { min-height:230px; padding:30px 27px; background:white; border:1px solid #e9eff8; border-radius:9px; transition:.22s ease; }
        .vq-service-card:hover { transform:translateY(-7px); box-shadow:0 20px 45px rgba(25,70,130,.1); border-color:#c9ddfb; }
        .vq-icon { display:grid; place-items:center; width:52px;height:52px; border-radius:12px; background:#eaf3ff; color:var(--vq-blue); font-size:25px; font-weight:800; }
        .vq-service-card h3 { margin:22px 0 10px; font-size:18px; }
        .vq-service-card p { margin:0 0 18px; color:var(--vq-muted); font-size:13px; line-height:1.75; }
        .vq-read { display:inline-flex; align-items:center; gap:10px; color:var(--vq-blue) !important; font-size:12px; font-weight:800; }
        .vq-automation { background:#101b34; color:white; }
        .vq-automation .vq-section-heading p { color:#aab7cc; }
        .vq-automation-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:18px; }
        .vq-auto-card { padding:27px; border:1px solid rgba(255,255,255,.12); border-radius:9px; background:rgba(255,255,255,.045); }
        .vq-auto-card .vq-icon { background:rgba(36,198,216,.13); color:#4ed9e6; }
        .vq-auto-card h3 { margin:20px 0 10px; font-size:17px; }
        .vq-auto-card p { margin:0; color:#aab7cc; font-size:13px; line-height:1.8; }
        .vq-startup { background:#f5f9ff; }
        .vq-startup-grid { display:grid; grid-template-columns:1fr 1fr; gap:65px; align-items:center; }
        .vq-startup h2 { margin:15px 0 18px; font-size:clamp(30px,3.4vw,42px); line-height:1.17; letter-spacing:-.04em; }
        .vq-startup p { color:var(--vq-muted); font-size:14px; line-height:1.9; }
        .vq-startup-panel { padding:34px; border-radius:12px; background:white; box-shadow:0 18px 55px rgba(30,70,120,.08); }
        .vq-startup-panel div { display:flex; gap:16px; padding:17px 0; border-bottom:1px solid #edf1f7; }
        .vq-startup-panel div:last-child { border:0; }
        .vq-startup-panel b { color:var(--vq-blue); font-size:20px; }
        .vq-startup-panel span { color:var(--vq-muted); font-size:13px; line-height:1.6; }
        .vq-cta { padding:70px 0; background:linear-gradient(110deg,#1769e8,#1a8ee7 55%,#21bdcf); color:white; }
        .vq-cta-inner { display:flex; justify-content:space-between; align-items:center; gap:30px; }
        .vq-cta h2 { margin:0 0 10px; font-size:clamp(28px,3.4vw,40px); letter-spacing:-.04em; }
        .vq-cta p { max-width:700px; margin:0; color:rgba(255,255,255,.82); font-size:14px; line-height:1.8; }
        .vq-cta .vq-btn { flex-shrink:0; background:white; color:var(--vq-blue) !important; box-shadow:none; }
        .vq-case { background:white; }
        .vq-case-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:20px; }
        .vq-case-card { padding:28px; border:1px solid #e8eef7; border-radius:9px; }
        .vq-case-card span { color:var(--vq-blue); font-size:12px; font-weight:800; letter-spacing:.1em; text-transform:uppercase; }
        .vq-case-card h3 { margin:15px 0 10px; font-size:18px; }
        .vq-case-card p { margin:0; color:var(--vq-muted); font-size:13px; line-height:1.8; }
        .vq-faq { background:var(--vq-soft); }
        .vq-faq-list { max-width:850px; margin:0 auto; }
        .vq-faq details { margin-bottom:12px; padding:20px 23px; border:1px solid #e4ebf5; border-radius:8px; background:white; }
        .vq-faq summary { cursor:pointer; list-style:none; display:flex; justify-content:space-between; gap:18px; font-size:15px; font-weight:750; }
        .vq-faq summary::-webkit-details-marker { display:none; }
        .vq-faq summary:after { content:"+"; color:var(--vq-blue); font-size:22px; line-height:1; }
        .vq-faq details[open] summary:after { content:"−"; }
        .vq-faq details p { margin:15px 0 0; color:var(--vq-muted); font-size:14px; line-height:1.8; }
        .vq-testimonials { background:white; }
        .vq-testimonial-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:20px; }
        .vq-testimonial { padding:29px; border:1px solid #e7edf6; border-radius:9px; }
        .vq-stars { color:#f4ae36; letter-spacing:3px; }
        .vq-testimonial blockquote { margin:18px 0 25px; color:#5f6c82; font-size:13px; line-height:1.85; }
        .vq-person { display:flex; align-items:center; gap:12px; }
        .vq-avatar { display:grid; place-items:center; width:42px;height:42px;border-radius:50%;background:#eaf3ff;color:var(--vq-blue);font-weight:850; }
        .vq-person strong { display:block; font-size:13px; }
        .vq-person small { color:var(--vq-muted); font-size:11px; }
        @media (max-width: 900px) {
          .vq-hero-grid,.vq-about-grid,.vq-startup-grid { grid-template-columns:1fr; }
          .vq-hero-art { min-height:360px; }
          .vq-service-grid,.vq-testimonial-grid { grid-template-columns:repeat(2,1fr); }
          .vq-automation-grid,.vq-case-grid { grid-template-columns:repeat(2,1fr); }
          .vq-about-visual { min-height:350px; }
        }
        @media (max-width: 600px) {
          .vq-container { width:min(100% - 34px, 1180px); }
          .vq-hero { min-height:auto; padding:70px 0 45px; }
          .vq-hero h1 { font-size:42px; }
          .vq-hero-art { min-height:310px; }
          .vq-art-orbit { width:280px;height:280px; }
          .vq-art-core { width:250px; }
          .vq-art-mark { font-size:44px; }
          .vq-float { padding:10px 12px; font-size:11px; }
          .vq-float-one { left:-4px; top:20px; } .vq-float-two { right:-4px; bottom:20px; }
          .vq-stats-grid { grid-template-columns:repeat(2,1fr); }
          .vq-stat:nth-child(2) { border-right:0; }
          .vq-stat:nth-child(-n+2) { border-bottom:1px solid #e9eef6; }
          .vq-section { padding:72px 0; }
          .vq-service-grid,.vq-automation-grid,.vq-case-grid,.vq-testimonial-grid { grid-template-columns:1fr; }
          .vq-checks { grid-template-columns:1fr; }
          .vq-cta-inner { align-items:flex-start; flex-direction:column; }
          .vq-startup-panel { padding:23px; }
        }
      `}</style>

      {/* Hero section */}
      <section className="vq-hero">
        <div className="vq-container vq-hero-grid">
          <div>
            <span className="vq-eyebrow">IGNOU STUDENT DEADLINE & NOTICE DESK</span>
            <h1>Never miss another <span>IGNOU deadline</span> or any notice</h1>
            <p className="vq-hero-copy">
              Missed your TEE exam form or assignment submission date? DeadlineDesk scrapes
              official IGNOU circulars, regional centre updates, and examination schedules into
              one single live feed so you never miss a deadline again.
            </p>
            <div className="vq-actions">
              <a className="vq-btn" href="">Active Deadlines <Arrow /></a>
              <a className="vq-btn vq-btn-outline" href="">Latest Notices <Arrow /></a>
            </div>
          </div>
          <div className="vq-hero-art" aria-label="DeadlineDesk student alert system">
            <div className="vq-art-orbit" />
            <div className="vq-art-core"><div className="vq-art-mark">IGNOU<small>DEADLINE DESK</small></div></div>
            <div className="vq-float vq-float-one"><b>⏰</b> TEE Exam Form</div>
            <div className="vq-float vq-float-two"><b>📌</b> Live RC Notices</div>
          </div>
        </div>
      </section>

      <section className="vq-stats">
        <div className="vq-container vq-stats-grid">
          <div className="vq-stat"><strong>Live</strong><span>Scraper status</span></div>
          <div className="vq-stat"><strong>6+</strong><span>Active deadlines</span></div>
          <div className="vq-stat"><strong>50+</strong><span>RCs monitored</span></div>
          <div className="vq-stat"><strong>24/7</strong><span>Notice updates</span></div>
        </div>
      </section>

      {/* About Section */}
      <section className="vq-section">
        <div className="vq-container vq-about-grid">
          <div className="vq-about-visual">
            <div className="vq-experience"><strong>2026</strong><span>TEE Dec Edition</span></div>
          </div>
          <div className="vq-about-copy">
            <span className="vq-eyebrow">Why DeadlineDesk</span>
            <h2>Built by an IGNOU Student Who Missed the TEE Exam Form</h2>
            <p>
              Navigating IGNOU's fragmented web portals across main websites and dozens of
              Regional Centres is exhausting. Important circulars get buried in old PDFs,
              leading to missed exam forms and assignment deadlines.
            </p>
            <p>
              DeadlineDesk aggregates every critical IGNOU milestone—from exam registrations
              and assignment guidelines to practical schedules and grade card updates—into one
              clean, reliable dashboard.
            </p>
            <div className="vq-checks">
              <span>Exam form alerts</span><span>Regional centre feeds</span>
              <span>Assignment guides</span><span>Zero clutter</span>
            </div>
            <a className="vq-btn" href="">View All Deadlines <Arrow /></a>
          </div>
        </div>
      </section>

      {/* Active Deadlines */}
      <section className="vq-section vq-services">
        <div className="vq-container">
          <SectionHeading
            eyebrow="Academic milestones"
            title="Active Deadlines & Portals"
            description="Track exam form windows, assignment due dates, and re-registration timelines in real time."
          />
          <div className="vq-service-grid">
            {deadlines.map((item) => (
              <article className="vq-service-card" key={item.title}>
                <div className="vq-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <a className="vq-read" href="">Check Status <Arrow /></a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Notice Feed */}
      <section className="vq-section vq-automation">
        <div className="vq-container">
          <SectionHeading
            light
            eyebrow="Official Circulars"
            title="Live Notice Feed & Regional Centre Alerts"
            description="Automated scrapers pull circulars instantly so you see new notifications the moment IGNOU publishes them."
          />
          <div className="vq-automation-grid">
            {notices.map((item) => (
              <article className="vq-auto-card" key={item.title}>
                <div className="vq-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Quick student tools */}
      <section className="vq-section vq-startup">
        <div className="vq-container vq-startup-grid">
          <div>
            <span className="vq-eyebrow">Student Utilities</span>
            <h2>Essential IGNOU Links & Portals</h2>
            <p>
              Stop searching through bookmarks. Access the most frequently used IGNOU portals
              instantly from one central desk.
            </p>
            <p>
              Whether you need to check your grade card, download your hall ticket, or submit
              an online grievance, we keep the direct links right here.
            </p>
            <a className="vq-btn" href="">Explore Portals <Arrow /></a>
          </div>
          <div className="vq-startup-panel">
            <div><b>01</b><span><strong>Grade Card Status</strong><br />Check theory & assignment marks.</span></div>
            <div><b>02</b><span><strong>Hall Ticket Download</strong><br />Get exam centre info and admit card.</span></div>
            <div><b>03</b><span><strong>Assignment Question Papers</strong><br />Download session-wise question sets.</span></div>
            <div><b>04</b><span><strong>Study Material Status</strong><br />Track barcoded printed book dispatches.</span></div>
          </div>
        </div>
      </section>

      <section className="vq-cta">
        <div className="vq-container vq-cta-inner">
          <div>
            <h2>Never Miss A Deadline Again!</h2>
            <p>
              Stay informed on TEE exam forms, assignments, and regional centre notices without
              the hassle of checking multiple government portals.
            </p>
          </div>
          <a className="vq-btn" href="">Get Started Now <Arrow /></a>
        </div>
      </section>

      {/* Case studies replaced with timeline */}
      <section className="vq-section vq-case">
        <div className="vq-container">
          <SectionHeading
            eyebrow="Student workflow"
            title="How DeadlineDesk Keeps You Ahead"
            description="A streamlined process designed to eliminate missing exam forms and assignment panic."
          />
          <div className="vq-case-grid">
            <article className="vq-case-card"><span>Step 1</span><h3>Automated Scraping</h3><p>Scrapers monitor IGNOU official domains and regional centre sites 24/7 for updates.</p></article>
            <article className="vq-case-card"><span>Step 2</span><h3>Curated Data</h3><p>Important dates and notices are filtered to remove administrative noise and highlight deadlines.</p></article>
            <article className="vq-case-card"><span>Step 3</span><h3>Timely Alerts</h3><p>Students receive clear, color-coded urgency statuses before submission windows close.</p></article>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="vq-section vq-faq">
        <div className="vq-container">
          <SectionHeading eyebrow="Got questions?" title="IGNOU Student FAQs" />
          <div className="vq-faq-list">
            {faqs.map((faq, index) => (
              <details key={faq.q} open={index === 0}>
                <summary>{faq.q}</summary>
                <p>{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="vq-section vq-testimonials">
        <div className="vq-container">
          <SectionHeading
            eyebrow="Student feedback"
            title="What IGNOU Students Say"
            description="Hear from students who stay ahead with DeadlineDesk."
          />
          <div className="vq-testimonial-grid">
            {testimonials.map((item) => (
              <article className="vq-testimonial" key={item.name}>
                <div className="vq-stars" aria-label="5 out of 5 stars">★★★★★</div>
                <blockquote>“{item.quote}”</blockquote>
                <div className="vq-person">
                  <div className="vq-avatar">{item.name.charAt(0)}</div>
                  <div><strong>{item.name}</strong><small>{item.role}</small></div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}


