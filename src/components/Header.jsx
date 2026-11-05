import React from 'react';
import { useState } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [blogOpen, setBlogOpen] = useState(false);

  const studentTools = [
    ["TEE Exam Form", ""],
    ["Assignment Submission", ""],
    ["Re-registration Portal", ""],
    ["Grade Card Status", ""],
    ["Hall Ticket Download", ""],
    ["Study Material Status", ""],
  ];

  const closeMenu = () => {
    setMenuOpen(false);
    setServicesOpen(false);
    setBlogOpen(false);
  };

  return (
    <header className="vq-site-header">
      <style>{`
        .vq-site-header {
          --vq-blue:#1769e8; --vq-cyan:#22c6d8; --vq-ink:#101a32;
          position:relative; z-index:50; width:100%; background:#fff;
          color:var(--vq-ink); font-family:Inter,ui-sans-serif,system-ui,-apple-system,"Segoe UI",sans-serif;
          box-shadow:0 4px 22px rgba(22,53,93,.06);
        }
        .vq-site-header * { box-sizing:border-box; }
        .vq-header-wrap { width:min(1180px,calc(100% - 48px)); margin:0 auto; }
        .vq-topbar { min-height:39px; display:flex; align-items:center; justify-content:flex-end; gap:25px; border-bottom:1px solid #edf1f7; color:#647087; font-size:12px; }
        .vq-topbar a { color:inherit; text-decoration:none; transition:color .2s; }
        .vq-topbar a:hover { color:var(--vq-blue); }
        .vq-top-item { display:inline-flex; align-items:center; gap:8px; }
        .vq-top-icon { color:var(--vq-blue); font-size:14px; }
        .vq-navrow { min-height:86px; display:flex; align-items:center; justify-content:space-between; gap:28px; }
        .vq-brand { display:inline-flex; align-items:center; gap:9px; flex-shrink:0; color:var(--vq-ink); text-decoration:none; }
        .vq-brand-symbol { display:grid; place-items:center; width:45px;height:45px; border-radius:12px 12px 12px 3px; color:white; background:linear-gradient(140deg,var(--vq-blue),var(--vq-cyan)); font-size:19px; font-weight:900; letter-spacing:-2px; box-shadow:0 7px 17px rgba(23,105,232,.2); }
        .vq-brand-name { font-size:23px; font-weight:850; letter-spacing:-1.1px; line-height:1; }
        .vq-brand-name span { color:var(--vq-blue); }
        .vq-brand small { display:block; margin-top:4px; color:#7a879b; font-size:8px; font-weight:750; letter-spacing:2.1px; }
        .vq-nav { display:flex; align-items:center; gap:clamp(16px,2.1vw,29px); }
        .vq-nav a,.vq-nav-trigger { display:inline-flex; align-items:center; gap:6px; padding:12px 0; border:0; background:none; color:#26344c; font:650 13px inherit; font-size:13px; font-weight:650; text-decoration:none; cursor:pointer; transition:color .2s; white-space:nowrap; }
        .vq-nav a:hover,.vq-nav-trigger:hover,.vq-nav a[aria-current="page"] { color:var(--vq-blue); }
        .vq-chevron { display:inline-block; font-size:11px; transition:transform .2s; }
        .vq-nav-trigger[aria-expanded="true"] .vq-chevron { transform:rotate(180deg); }
        .vq-nav-group { position:relative; }
        .vq-dropdown { position:absolute; top:calc(100% + 5px); left:-18px; width:235px; padding:10px; border:1px solid #e8eef7; border-radius:9px; background:#fff; box-shadow:0 18px 42px rgba(19,48,89,.14); }
        .vq-dropdown a { display:block; padding:11px 12px; border-radius:6px; color:#4d5b71; font-size:12px; white-space:normal; }
        .vq-dropdown a:hover { background:#f0f6ff; color:var(--vq-blue); }
        .vq-menu-toggle { display:none; width:43px;height:43px; border:1px solid #e5edf8; border-radius:6px; background:#fff; color:var(--vq-ink); font-size:23px; cursor:pointer; }
        @media(max-width:1000px) {
          .vq-nav { gap:14px; }
          .vq-nav a,.vq-nav-trigger { font-size:12px; }
        }
        @media(max-width:820px) {
          .vq-header-wrap { width:calc(100% - 34px); }
          .vq-topbar { justify-content:center; gap:15px; min-height:36px; font-size:11px; }
          .vq-navrow { min-height:75px; }
          .vq-menu-toggle { display:grid; place-items:center; margin-left:auto; }
          .vq-nav { display:none; position:absolute; top:100%; left:0; right:0; padding:12px 17px 20px; background:#fff; border-top:1px solid #edf1f7; box-shadow:0 18px 25px rgba(19,48,89,.1); align-items:stretch; gap:2px; }
          .vq-nav.is-open { display:flex; flex-direction:column; }
          .vq-nav a,.vq-nav-trigger { width:100%; justify-content:space-between; padding:12px 8px; font-size:14px; }
          .vq-nav-group { width:100%; }
          .vq-dropdown { position:static; width:100%; margin:0 0 7px; padding:5px 9px; border:0; border-radius:6px; background:#f5f8fd; box-shadow:none; }
          .vq-dropdown a { padding:10px; }
          .vq-header-cta { align-self:flex-start; margin:10px 8px 0; }
        }
        @media(max-width:480px) {
          .vq-topbar { flex-wrap:wrap; gap:5px 15px; padding:7px 0; }
          .vq-brand-symbol { width:40px;height:40px; }
          .vq-brand-name { font-size:21px; }
        }
      `}</style>

      <div className="vq-header-wrap">
       <div className="vq-navrow">
          <a className="vq-brand" href="/" aria-label="DeadlineDesk home">
            <span className="vq-brand-symbol">DD</span>
            <span><span className="vq-brand-name">Deadline<span>Desk</span></span><small>ALWAYS STAY ALERT</small></span>
          </a>

          <button
            type="button"
            className="vq-menu-toggle"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? "×" : "☰"}
          </button>

          <nav className={`vq-nav ${menuOpen ? "is-open" : ""}`} aria-label="Main navigation">
            <a href="/" onClick={closeMenu}>Home</a>
            <a href="#deadlines" onClick={closeMenu}>Deadlines</a>
            <a href="#notices" onClick={closeMenu}>Notices</a>

            <div className="vq-nav-group">
              <button className="vq-nav-trigger" type="button" aria-expanded={servicesOpen} onClick={() => { setServicesOpen((v) => !v); setBlogOpen(false); }}>
                Student Tools <span className="vq-chevron">⌄</span>
              </button>
              {servicesOpen && <div className="vq-dropdown">
                {studentTools.map(([label, url]) => <a key={label} href={url} onClick={closeMenu}>{label}</a>)}
              </div>}
            </div>

            <a href="#faqs" onClick={closeMenu}>FAQs</a>

            <div className="vq-nav-group">
              <button className="vq-nav-trigger" type="button" aria-expanded={blogOpen} onClick={() => { setBlogOpen((v) => !v); setServicesOpen(false); }}>
                Regional Centres <span className="vq-chevron">⌄</span>
              </button>
              {blogOpen && <div className="vq-dropdown">
                <a href="" onClick={closeMenu}>RC Delhi 1 / 2 / 3</a>
                <a href="" onClick={closeMenu}>RC Patna &amp; Bihar</a>
                <a href="" onClick={closeMenu}>RC Mumbai &amp; Pune</a>
              </div>}
            </div>

            <a href="#deadlines" onClick={closeMenu}>Active Alerts</a>
          </nav>
        </div>
      </div>
    </header>
  );
}


