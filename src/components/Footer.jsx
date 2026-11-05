export default function Footer() {
  const year = new Date().getFullYear();

  const studentLinks = [
    ["TEE Exam Form", ""],
    ["Assignment Submission", ""],
    ["Re-registration Portal", ""],
    ["Grade Card Status", ""],
    ["Hall Ticket Download", ""],
    ["Study Material Status", ""],
  ];

  return (
    <footer className="vq-site-footer">
      <style>{`
        .vq-site-footer {
          --vq-blue:#1769e8; --vq-cyan:#22c6d8; --vq-ink:#101a32;
          color:#d5deed; background:#101b34;
          font-family:Inter,ui-sans-serif,system-ui,-apple-system,"Segoe UI",sans-serif;
        }
        .vq-site-footer * { box-sizing:border-box; }
        .vq-footer-container { width:min(1180px,calc(100% - 48px)); margin:0 auto; }
        .vq-footer-main { display:grid; grid-template-columns:1.45fr 1fr 1fr 1.15fr; gap:48px; padding:75px 0 58px; }
        .vq-footer-brand { display:inline-flex; align-items:center; gap:10px; color:white; text-decoration:none; }
        .vq-footer-symbol { display:grid; place-items:center; width:45px;height:45px; border-radius:12px 12px 12px 3px; color:white; background:linear-gradient(140deg,var(--vq-blue),var(--vq-cyan)); font-size:19px; font-weight:900; letter-spacing:-2px; }
        .vq-footer-brand-name { display:block; color:white; font-size:24px; font-weight:850; letter-spacing:-1px; line-height:1; }
        .vq-footer-brand-name span { color:#48cddd; }
        .vq-footer-brand small { display:block; margin-top:5px; color:#91a2bd; font-size:8px; font-weight:750; letter-spacing:2px; }
        .vq-footer-about p { max-width:310px; margin:22px 0 20px; color:#aab7cc; font-size:13px; line-height:1.9; }
        .vq-footer-socials { display:flex; gap:9px; }
        .vq-footer-socials a { display:grid; place-items:center; width:34px;height:34px; border:1px solid rgba(255,255,255,.16); border-radius:6px; color:#d5deed; font-size:12px; font-weight:800; text-decoration:none; transition:.2s; }
        .vq-footer-socials a:hover { color:white; border-color:var(--vq-cyan); background:rgba(34,198,216,.12); }
        .vq-footer-col h3 { margin:5px 0 23px; color:white; font-size:15px; font-weight:800; }
        .vq-footer-col h3:after { content:""; display:block; width:31px;height:2px; margin-top:12px; background:linear-gradient(90deg,var(--vq-blue),var(--vq-cyan)); }
        .vq-footer-links { display:grid; gap:13px; }
        .vq-footer-links a,.vq-footer-contact a { color:#aab7cc; font-size:13px; text-decoration:none; transition:color .2s; }
        .vq-footer-links a:before { content:"›"; margin-right:9px; color:#39c4d7; font-size:17px; vertical-align:-1px; }
        .vq-footer-links a:hover,.vq-footer-contact a:hover { color:#fff; }
        .vq-footer-contact { display:grid; gap:16px; }
        .vq-footer-contact-item { display:flex; align-items:flex-start; gap:11px; color:#aab7cc; font-size:13px; line-height:1.7; }
        .vq-footer-contact-item b { color:#3dc9d9; font-size:16px; font-weight:600; }
        .vq-footer-contact a { line-height:1.7; }
        .vq-footer-bottom { border-top:1px solid rgba(255,255,255,.1); }
        .vq-footer-bottom-inner { min-height:66px; display:flex; align-items:center; justify-content:space-between; gap:18px; }
        .vq-footer-bottom p { margin:0; color:#8f9eb5; font-size:11px; }
        .vq-footer-legal { display:flex; gap:20px; }
        .vq-footer-legal a { color:#8f9eb5; font-size:11px; text-decoration:none; }
        .vq-footer-legal a:hover { color:white; }
        @media(max-width:900px) {
          .vq-footer-main { grid-template-columns:1fr 1fr; gap:42px 35px; }
        }
        @media(max-width:560px) {
          .vq-footer-container { width:calc(100% - 34px); }
          .vq-footer-main { grid-template-columns:1fr 1fr; gap:35px 20px; padding:55px 0 40px; }
          .vq-footer-about { grid-column:1/-1; }
          .vq-footer-about p { max-width:100%; }
          .vq-footer-bottom-inner { align-items:flex-start; flex-direction:column; justify-content:center; padding:17px 0; }
        }
        @media(max-width:360px) { .vq-footer-main { grid-template-columns:1fr; } .vq-footer-about { grid-column:auto; } }
      `}</style>

      <div className="vq-footer-container vq-footer-main">
        <div className="vq-footer-about">
          <a className="vq-footer-brand" href="/" aria-label="DeadlineDesk home">
            <span className="vq-footer-symbol">DD</span>
            <span><span className="vq-footer-brand-name">Deadline<span>Desk</span></span><small>ALWAYS STAY ALERT</small></span>
          </a>
          <p>
            DeadlineDesk scrapes official IGNOU circulars and regional centre notices
            to ensure students never miss another exam form, assignment date, or re-registration window.
          </p>
          <div className="vq-footer-socials" aria-label="Social links">
            <a href="https://t.me/" aria-label="Telegram">tg</a>
            <a href="https://whatsapp.com/" aria-label="WhatsApp">wa</a>
            <a href="https://github.com/" aria-label="GitHub">gh</a>
          </div>
        </div>

        <div className="vq-footer-col">
          <h3>Quick Links</h3>
          <div className="vq-footer-links">
            <a href="/">Home</a>
            <a href="#deadlines">Active Deadlines</a>
            <a href="#notices">Notice Feed</a>
            <a href="#faqs">Student FAQs</a>
            <a href="https://ignou.ac.in" target="_blank" rel="noreferrer">Official IGNOU</a>
          </div>
        </div>

        <div className="vq-footer-col">
          <h3>Student Portals</h3>
          <div className="vq-footer-links">
            {studentLinks.map(([label, url]) => <a key={label} href={url}>{label}</a>)}
          </div>
        </div>

        <div className="vq-footer-col">
          <h3>Student Support</h3>
          <div className="vq-footer-contact">
            <div className="vq-footer-contact-item"><b>⌖</b><span>New Delhi, India (IGNOU Hub)</span></div>
            <div className="vq-footer-contact-item"><b>✉</b><a href="mailto:support@deadlinedesk.live">support@deadlinedesk.live</a></div>
            <div className="vq-footer-contact-item"><b>💡</b><span>Built by IGNOU students who missed their TEE exam form so you don't have to.</span></div>
          </div>
        </div>
      </div>

      <div className="vq-footer-bottom">
        <div className="vq-footer-container vq-footer-bottom-inner">
          <p>© {year} DeadlineDesk. Built independently for IGNOU students.</p>
          <div className="vq-footer-legal">
            <a href="">Privacy Policy</a>
            <a href="">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}


