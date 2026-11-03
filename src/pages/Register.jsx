function Register() {
  return (
    <main
      style={{
        fontFamily: '"JetBrains Mono Nerd", monospace',
        background: "#e0f2f8",
        color: "#18181b",
        margin: 0,
        padding: 0,
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            flex: 1,
            maxWidth: "50%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "2rem",
            boxSizing: "border-box",
          }}
        >
          <h1
            style={{
              fontSize: "2rem",
              fontWeight: 700,
              marginBottom: "2rem",
              color: "#18181b",
              textAlign: "center",
            }}
          >
            Register
          </h1>
          <form
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              width: "100%",
              maxWidth: 320,
            }}
          >
            <label
              style={{
                display: "block",
                textAlign: "left",
                fontSize: "0.95rem",
                fontWeight: 600,
                color: "#18181b",
              }}
            >
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter your full name"
              style={{
                width: "100%",
                padding: "0.75rem 1rem",
                fontSize: "0.95rem",
                fontFamily: '"JetBrains Mono Nerd", monospace',
                border: `1px solid #e5e5e5`,
                borderRadius: "0.75rem",
                background: "#ffffff",
                color: "#18181b",
                boxSizing: "border-box",
              }}
            />
            <label
              style={{
                display: "block",
                textAlign: "left",
                fontSize: "0.95rem",
                fontWeight: 600,
                color: "#18181b",
              }}
            >
              Email
            </label>
            <input
              type="email"
              placeholder="name@example.com"
              style={{
                width: "100%",
                padding: "0.75rem 1rem",
                fontSize: "0.95rem",
                fontFamily: '"JetBrains Mono Nerd", monospace',
                border: `1px solid #e5e5e5`,
                borderRadius: "0.75rem",
                background: "#ffffff",
                color: "#18181b",
                boxSizing: "border-box",
              }}
            />
            <label
              style={{
                display: "block",
                textAlign: "left",
                fontSize: "0.95rem",
                fontWeight: 600,
                color: "#18181b",
              }}
            >
              Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              style={{
                width: "100%",
                padding: "0.75rem 1rem",
                fontSize: "0.95rem",
                fontFamily: '"JetBrains Mono Nerd", monospace',
                border: `1px solid #e5e5e5`,
                borderRadius: "0.75rem",
                background: "#ffffff",
                color: "#18181b",
                boxSizing: "border-box",
              }}
            />
            <label
              style={{
                display: "block",
                textAlign: "left",
                fontSize: "0.95rem",
                fontWeight: 600,
                color: "#18181b",
              }}
            >
              Confirm Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              style={{
                width: "100%",
                padding: "0.75rem 1rem",
                fontSize: "0.95rem",
                fontFamily: '"JetBrains Mono Nerd", monospace',
                border: `1px solid #e5e5e5`,
                borderRadius: "0.75rem",
                background: "#ffffff",
                color: "#18181b",
                boxSizing: "border-box",
              }}
            />
            <button
              type="submit"
              style={{
                background: "#06b6d4",
                color: "#ffffff",
                padding: "0.75rem 1.5rem",
                borderRadius: "999px",
                fontSize: "0.95rem",
                fontWeight: 600,
                fontFamily: '"JetBrains Mono Nerd", monospace',
                border: "none",
                cursor: "pointer",
                marginTop: "0.5rem",
                width: "100%",
              }}
            >
              Register
            </button>
          </form>
        </div>
        <div style={{ flex: 1 }} />
      </div>
    </main>
  );
}

export default Register;
