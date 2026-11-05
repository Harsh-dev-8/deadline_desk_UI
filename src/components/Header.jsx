
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [blogOpen, setBlogOpen] = useState(false);

  // Navigation data
  const studentTools = [
    ["TEE Exam Form", ""],
    ["Assignment Submission", ""],
    ["Re-registration Portal", ""],
    ["Grade Card Status", ""],
    ["Hall Ticket Download", ""],
    ["Study Material Status", ""],
  ];

  const regionalCentres = [
    ["RC Delhi 1 / 2 / 3", ""],
    ["RC Patna & Bihar", ""],
    ["RC Mumbai & Pune", ""],
  ];

  // Close all menus
  const closeMenu = () => {
    setMenuOpen(false);
    setServicesOpen(false);
    setBlogOpen(false);
  };

  // Styles
  const styles = `
    .vq-site-header {
      --vq-blue: #1769e8;
      --vq-cyan: #22c6d8;
      --vq-ink: #101a32;

      position: relative;
      z-index: 50;
      width: 100%;
      background: #fff;
      color: var(--vq-ink);
      font-family: Inter, ui-sans-serif, system-ui, -apple-system,
        "Segoe UI", sans-serif;
      box-shadow: 0 4px 22px rgba(22, 53, 93, 0.06);
    }

    .vq-site-header *,
    .vq-site-header *::before,
    .vq-site-header *::after {
      box-sizing: border-box;
    }

    .vq-header-wrap {
      width: min(1180px, calc(100% - 48px));
      margin: 0 auto;
    }

    /* Main navigation layout */

    .vq-navrow {
      min-height: 86px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 32px;
    }

    /* Brand */

    .vq-brand {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      flex-shrink: 0;
      color: var(--vq-ink);
      text-decoration: none;
    }

    .vq-brand-symbol {
      width: 45px;
      height: 45px;
      display: grid;
      place-items: center;
      flex-shrink: 0;
      border-radius: 12px 12px 12px 3px;
      background: linear-gradient(
        140deg,
        var(--vq-blue),
        var(--vq-cyan)
      );
      color: #fff;
      font-size: 19px;
      font-weight: 900;
      letter-spacing: -2px;
      box-shadow: 0 7px 17px rgba(23, 105, 232, 0.2);
    }

    .vq-brand-name {
      font-size: 23px;
      font-weight: 850;
      letter-spacing: -1.1px;
      line-height: 1;
      white-space: nowrap;
    }

    .vq-brand-name span {
      color: var(--vq-blue);
    }

    .vq-brand small {
      display: block;
      margin-top: 5px;
      color: #7a879b;
      font-size: 8px;
      font-weight: 750;
      letter-spacing: 2.1px;
    }

    /* Navigation links */

    .vq-nav {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      gap: clamp(15px, 1.8vw, 25px);
    }

    .vq-nav a,
    .vq-nav-trigger {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 6px;
      padding: 10px 0;
      border: none;
      background: transparent;
      color: #26344c;
      font-family: inherit;
      font-size: 13px;
      font-weight: 650;
      text-decoration: none;
      white-space: nowrap;
      cursor: pointer;
      transition: color 0.2s ease;
    }

    .vq-nav a:hover,
    .vq-nav-trigger:hover,
    .vq-nav a[aria-current="page"] {
      color: var(--vq-blue);
    }

    /* Dropdown menus */

    .vq-nav-group {
      position: relative;
    }

    .vq-chevron {
      display: inline-block;
      font-size: 11px;
      transition: transform 0.2s ease;
    }

    .vq-nav-trigger[aria-expanded="true"] .vq-chevron {
      transform: rotate(180deg);
    }

    .vq-dropdown {
      position: absolute;
      top: calc(100% + 5px);
      left: -18px;
      z-index: 60;
      width: 235px;
      padding: 8px;
      border: 1px solid #e8eef7;
      border-radius: 9px;
      background: #fff;
      box-shadow: 0 18px 42px rgba(19, 48, 89, 0.14);
    }

    .vq-dropdown a {
      display: flex;
      width: 100%;
      justify-content: flex-start;
      padding: 11px 12px;
      border-radius: 6px;
      color: #4d5b71;
      font-size: 12px;
      font-weight: 550;
      white-space: normal;
    }

    .vq-dropdown a:hover {
      background: #f0f6ff;
      color: var(--vq-blue);
    }

    /* Sign in button */

    .vq-signin-btn {
      display: inline-flex !important;
      align-items: center;
      justify-content: center;
      padding: 8px 20px !important;
      border: 4px dotted var(--vq-blue) !important;
      border-radius: 7px;
      background: #fff !important;
      color: var(--vq-ink) !important;
      font-size: 13px !important;
      font-weight: 700 !important;
      text-decoration: none;
      transition: all 0.2s ease;
      cursor: pointer;
    }

    .vq-signin-btn:hover {
      background: var(--vq-blue) !important;
      border-color: var(--vq-blue) !important;
      color: #fff !important;
      transform: translateY(-1px);
    }

    /* Mobile menu toggle */

    .vq-menu-toggle {
      display: none;
      width: 43px;
      height: 43px;
      place-items: center;
      margin-left: auto;
      border: 1px solid #e5edf8;
      border-radius: 7px;
      background: #fff;
      color: var(--vq-ink);
      font-size: 23px;
      cursor: pointer;
      transition: background 0.2s ease;
    }

    .vq-menu-toggle:hover {
      background: #f5f8fd;
    }

    /* Tablet */

    @media (max-width: 1050px) {
      .vq-nav {
        gap: 14px;
      }

      .vq-nav a,
      .vq-nav-trigger {
        font-size: 12px;
      }

      .vq-signin-btn {
        padding: 8px 14px !important;
      }
    }

    /* Mobile */

    @media (max-width: 820px) {
      .vq-header-wrap {
        width: calc(100% - 34px);
      }

      .vq-navrow {
        position: relative;
        min-height: 75px;
      }

      .vq-menu-toggle {
        display: grid;
      }

      .vq-nav {
        display: none;
        position: absolute;
        top: 100%;
        left: 50%;
        z-index: 60;
        width: 100vw;
        padding: 12px 22px 20px;
        transform: translateX(-50%);
        border-top: 1px solid #edf1f7;
        background: #fff;
        box-shadow: 0 18px 25px rgba(19, 48, 89, 0.1);
        align-items: stretch;
        gap: 2px;
      }

      .vq-nav.is-open {
        display: flex;
        flex-direction: column;
      }

      .vq-nav a,
      .vq-nav-trigger {
        width: 100%;
        justify-content: space-between;
        padding: 12px 8px;
        font-size: 14px;
      }

      .vq-nav-group {
        width: 100%;
      }

      .vq-dropdown {
        position: static;
        width: 100%;
        margin: 0 0 7px;
        padding: 5px 9px;
        border: none;
        border-radius: 6px;
        background: #f5f8fd;
        box-shadow: none;
      }

      .vq-dropdown a {
        padding: 10px;
      }

      .vq-signin-btn {
        align-self: flex-start;
        width: auto !important;
        margin: 10px 8px 0;
        padding: 9px 22px !important;
      }
    }

    /* Small phones */

    @media (max-width: 480px) {
      .vq-brand-symbol {
        width: 40px;
        height: 40px;
      }

      .vq-brand-name {
        font-size: 21px;
      }
    }
  `;

  return (
    <header className="vq-site-header">
      <style>{styles}</style>

      <div className="vq-header-wrap">
        <div className="vq-navrow">

          {/* Brand */}

          <Link
            className="vq-brand"
            to="/"
            aria-label="DeadlineDesk home"
            onClick={closeMenu}
          >
            <span className="vq-brand-symbol">DD</span>

            <span>
              <span className="vq-brand-name">
                Deadline<span>Desk</span>
              </span>
              <small>ALWAYS STAY ALERT</small>
            </span>
          </Link>

          {/* Mobile menu button */}

          <button
            type="button"
            className="vq-menu-toggle"
            aria-label={
              menuOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? "×" : "☰"}
          </button>

          {/* Main navigation */}

          <nav
            className={`vq-nav ${menuOpen ? "is-open" : ""}`}
            aria-label="Main navigation"
          >
            <Link to="/" onClick={closeMenu}>
              Home
            </Link>

            <a href="#deadlines" onClick={closeMenu}>
              Deadlines
            </a>

            <a href="#notices" onClick={closeMenu}>
              Notices
            </a>

            {/* Student Tools dropdown */}

            <div className="vq-nav-group">
              <button
                className="vq-nav-trigger"
                type="button"
                aria-expanded={servicesOpen}
                onClick={() => {
                  setServicesOpen((open) => !open);
                  setBlogOpen(false);
                }}
              >
                Student Tools
                <span className="vq-chevron">⌄</span>
              </button>

              {servicesOpen && (
                <div className="vq-dropdown">
                  {studentTools.map(([label, url]) => (
                    <a
                      key={label}
                      href={url || "#"}
                      onClick={closeMenu}
                    >
                      {label}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a href="#faqs" onClick={closeMenu}>
              FAQs
            </a>

            {/* Regional Centres dropdown */}

            <div className="vq-nav-group">
              <button
                className="vq-nav-trigger"
                type="button"
                aria-expanded={blogOpen}
                onClick={() => {
                  setBlogOpen((open) => !open);
                  setServicesOpen(false);
                }}
              >
                Regional Centres
                <span className="vq-chevron">⌄</span>
              </button>

              {blogOpen && (
                <div className="vq-dropdown">
                  {regionalCentres.map(([label, url]) => (
                    <a
                      key={label}
                      href={url || "#"}
                      onClick={closeMenu}
                    >
                      {label}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a href="#deadlines" onClick={closeMenu}>
              Active Alerts
            </a>

            {/* Sign In */}

            <Link
              to="/signin"
              className="vq-signin-btn"
              onClick={closeMenu}
            >
              Sign In
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

