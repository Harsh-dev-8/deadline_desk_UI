import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assests/sketchbook.png";

const CYAN = "#06b6d4";
const FG = "#111827";
const MUTED = "#4b5563";
const BG = "#ffffff";
const BORDER = "#e5e7eb";
const BOX_COLOR = "#ffffff"
const navLinks = ["Assignments ⮟", "Registration ⮟", "Term End Exams ⮟", "Online Counciling ⮟", "Results/Grade Card ⮟"];

function Header() {
  const [open, setOpen] = useState(null);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <header
      style={{
        fontFamily: '"JetBrains Mono Nerd", monospace',
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 50,
        background: BG,
        height: "80px",
        opacity: 0.9,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 2rem",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.75rem",
          marginRight: "2rem",
        }}
      >
        <img
          src={logo}
          alt="logo"
          style={{
            width: 40,
            height: 40,
            borderRadius: "0.5rem",
            objectFit: "cover",
            display: "block",
          }}
        />
        <span
          style={{
            fontSize: "1.25rem",
            fontWeight: 700,
            color: FG,
            letterSpacing: "-0.025em",
          }}
        >
          Deadline<span style={{ color: CYAN }}>Desk</span>
        </span>
      </div>

      <nav
        style={{
          display: "flex",
          alignItems: "center",
          gap: "2rem",
          position: "relative",
        }}
      >
        {navLinks.map((link) => {
          const isOpen = open === link;
          return (
            <div
              key={link}
              onMouseEnter={() => setOpen(link)}
              onMouseLeave={() => setOpen(null)}
              style={{ position: "relative", display: "inline-block" }}
            >
              <Link
                to="#"
                style={{
                  color: MUTED,
                  textDecoration: "none",
                  fontSize: "0.85rem",
                  fontWeight: 500,
                  transition: "color 0.2s",
                  whiteSpace: "nowrap",
                }}
              >
                {link}
              </Link>
              {isOpen && (
                <div
                  style={{
                    position: "absolute",
                    top: "100%",
                    left: 0,
                    marginTop: "6px",
                    background: BG,
                    border: `1px solid ${BORDER}`,
                    borderRadius: "0.5rem",
                    padding: "0.5rem 0",
                    minWidth: "220px",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
         }}
                >
                  {["a", "b", "c"].map((item) => (
                    <Link
                      key={item}
                      to="#"
                      style={{
                        background: BOX_COLOR,
                        display: "block",
                        padding: "0.4rem 1rem",
                        color: MUTED,
                        textDecoration: "none",
                        fontSize: "1.0rem",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {item}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </nav>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.75rem",
        }}
      >
        <Link
          to="/signin"
          style={{
            background: isHovered ? CYAN: BG,
            color: FG,
            textDecoration: "none",
            fontSize: "0.95rem",
            fontWeight: 600,
            padding: "0.4rem 1.75rem",
            border: `2px dotted ${CYAN}`,
            borderRadius: "999px",
            transition: "all 0.2s",
          }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
          Sign in
        </Link>
        <Link
          to="/contact"
          style={{
            background: CYAN,
            color: "#ffffff",
            padding: "0.6rem 1.25rem",
            borderRadius: "999px",
            fontSize: "0.95rem",
            fontWeight: 600,
            textDecoration: "none",
            transition: "opacity 0.2s",
          }}
        >
          Get In Touch
        </Link>
      </div>
    </header>
  );
}

export default Header;
