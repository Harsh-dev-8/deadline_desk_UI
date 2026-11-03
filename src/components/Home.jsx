function Home() {
  return (
    <main
      style={{
        fontFamily: '"JetBrains Mono Nerd", monospace',
        color: "#18181b",
        background: "#e0f2f8",
        margin: 0,
        padding: 0,
        paddingTop: "80px",
        minHeight: "100vh",
      }}
    >
      <section
        style={{
          padding: "6rem 2rem 4rem",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: "3rem",
            fontWeight: 700,
            letterSpacing: "-0.02em",
            margin: "0 0 1rem",
            color: "#18181b",
          }}
        >
          Welcome to DeadlineDesk
        </h1>
        <p
          style={{
            fontSize: "1.25rem",
            color: "#6b7280",
            maxWidth: 600,
            margin: "0 auto 3rem",
            lineHeight: 1.6,
          }}
        >
          This is your home page scaffold. Edit src/components/Home.jsx to build it how you want.
        </p>
      </section>

      <section
        style={{
          padding: "0 2rem 6rem",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "2rem",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {[
          { title: "Section one", body: "Placeholder content." },
          { title: "Section two", body: "Placeholder content." },
          { title: "Section three", body: "Placeholder content." },
        ].map((item) => (
          <div
            key={item.title}
            style={{
              padding: "1.5rem",
              border: `1px solid #e5e5e5`,
              borderRadius: "0.75rem",
              background: "#ffffff",
            }}
          >
            <h3
              style={{
                margin: "0 0 0.5rem",
                fontSize: "1.1rem",
                fontWeight: 600,
                color: "#18181b",
              }}
            >
              {item.title}
            </h3>
            <p style={{ margin: 0, color: "#6b7280", fontSize: "0.95rem" }}>
              {item.body}
            </p>
          </div>
        ))}
      </section>
    </main>
  );
}

export default Home;
