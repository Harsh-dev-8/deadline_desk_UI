const CYAN = "#06b6d4";
const FG = "#18181b";
const MUTED = "#6b7280";
const BG = "#ffffff";
const BORDER = "#e5e5e5";

const links = {
  Services: [
    "Agentic AI Solutions",
    "AI Powered Enterprise",
    "Enterprise Software",
    "Cloud & DevOps",
    "Web & Mobile",
  ],
  Company: ["About Us", "Careers", "Contact"],
  Legal: ["Privacy Policy", "Terms of Service"],
};

function Footer({ compact = false }) {
  if (compact) {
    return (
      <footer
        style={{
          background: "#f3f4f6",
          borderTop: `2px solid ${BORDER}`,
          padding: "1rem 2rem",
          color: FG,
          fontFamily: '"JetBrains Mono Nerd", monospace',
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "0.5rem",
        }}
      >
        <p style={{ color: MUTED, fontSize: "0.85rem", margin: 0 }}>
          © 2026 DeadlineDesk. All rights reserved.
        </p>
        <div style={{ display: "flex", gap: "1.5rem" }}>
          <a href="#" style={{ color: MUTED, textDecoration: "none", fontSize: "0.85rem" }}>Privacy</a>
          <a href="#" style={{ color: MUTED, textDecoration: "none", fontSize: "0.85rem" }}>Terms</a>
        </div>
      </footer>
    );
  }
  return (
    <footer
      style={{
        background: BG,
        borderTop: `1px solid ${BORDER}`,
        padding: "4rem 2rem 2rem",
        color: FG,
        fontFamily: '"JetBrains Mono Nerd", monospace',
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
          gap: "3rem",
          marginBottom: "3rem",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
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
          <p style={{ color: MUTED, fontSize: "0.95rem", lineHeight: 1.5, maxWidth: 300 }}>
            Where innovation meets expertise. Your digital partner.
          </p>
        </div>

        {Object.entries(links).map(([title, items]) => (
          <div key={title} style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            <h3
              style={{
                margin: 0,
                fontSize: "0.9rem",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                color: FG,
              }}
            >
              {title}
            </h3>
            {items.map((item) => (
              <a
                key={item}
                href="#"
                style={{
                  color: MUTED,
                  textDecoration: "none",
                  fontSize: "0.95rem",
                  transition: "color 0.2s",
                }}
              >
                {item}
              </a>
            ))}
          </div>
        ))}
      </div>

      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          borderTop: `1px solid ${BORDER}`,
          paddingTop: "2rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "1rem",
        }}
      >
        <p style={{ color: MUTED, fontSize: "0.9rem", margin: 0 }}>
          © 2026 DeadlineDesk. All rights reserved.
        </p>
        <div style={{ display: "flex", gap: "1.5rem" }}>
          <a href="#" style={{ color: MUTED, textDecoration: "none", fontSize: "0.9rem" }}>
            Privacy
          </a>
          <a href="#" style={{ color: MUTED, textDecoration: "none", fontSize: "0.9rem" }}>
            Terms
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
