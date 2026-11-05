import { useState } from "react";
import { Link } from "react-router-dom";
import "../css/register.css";

/* Password input with its own Show/Hide toggle */
function PasswordField({
  id,
  name,
  label,
  placeholder,
  invalid = false,
  describedBy,
}) {
  const [visible, setVisible] = useState(false);

  return (
    <div className="dd-register__field">
      <label htmlFor={id} className="dd-register__label">
        {label}
      </label>
      <div className="dd-register__password">
        <input
          id={id}
          className="dd-register__input dd-register__input--password"
          type={visible ? "text" : "password"}
          name={name}
          autoComplete="new-password"
          placeholder={placeholder}
          aria-invalid={invalid || undefined}
          aria-describedby={describedBy}
          required
        />
        <button
          type="button"
          className="dd-register__toggle"
          aria-controls={id}
          aria-label={`${visible ? "Hide" : "Show"} ${label.toLowerCase()}`}
          onClick={() => setVisible((current) => !current)}
        >
          {visible ? "Hide" : "Show"}
        </button>
      </div>
    </div>
  );
}

function Register() {
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);

    // Client-side check only: both password fields must match.
    if (data.get("password") !== data.get("confirmPassword")) {
      setError("Passwords don't match. Please re-enter them.");
      return;
    }

    setError("");

    // Registration is not connected yet, so nothing is sent anywhere.
    // When the backend is ready, send these values to the API:
    //   data.get("fullName"), data.get("email"), data.get("password")
    // then redirect on success and show an error on failure.
  };

  return (
    <main className="dd-register">
      <div className="dd-register__card">
        {/* Branding panel */}
        <aside className="dd-register__brand-panel">
          <div className="dd-register__brand">
            <span className="dd-register__logo" aria-hidden="true">
              DD
            </span>
            <span>
              <span className="dd-register__brand-name">DeadlineDesk</span>
              <small className="dd-register__tagline">ALWAYS STAY ALERT</small>
            </span>
          </div>

          <div className="dd-register__pitch">
            <p className="dd-register__headline">
              Your deadlines, all in one place.
            </p>
            <p className="dd-register__description">
              Create an account to keep track of exam forms, assignment dates,
              re-registration windows, and other academic updates.
            </p>
          </div>
        </aside>

        {/* Registration form panel */}
        <section
          className="dd-register__form-panel"
          aria-labelledby="register-title"
        >
          <div className="dd-register__form-inner">
            <h1 id="register-title" className="dd-register__title">
              Create your account
            </h1>
            <p className="dd-register__subtitle">
              Enter your details to get started with DeadlineDesk.
            </p>

            <form
              className="dd-register__form"
              onSubmit={handleSubmit}
              onChange={() => error && setError("")}
            >
              <div className="dd-register__field">
                <label htmlFor="register-name" className="dd-register__label">
                  Full name
                </label>
                <input
                  id="register-name"
                  className="dd-register__input"
                  type="text"
                  name="fullName"
                  autoComplete="name"
                  placeholder="Your full name"
                  required
                />
              </div>

              <div className="dd-register__field">
                <label htmlFor="register-email" className="dd-register__label">
                  Email
                </label>
                <input
                  id="register-email"
                  className="dd-register__input"
                  type="email"
                  name="email"
                  autoComplete="email"
                  autoCapitalize="none"
                  spellCheck={false}
                  placeholder="name@example.com"
                  required
                />
              </div>

              <PasswordField
                id="register-password"
                name="password"
                label="Password"
                placeholder="Create a password"
              />

              <PasswordField
                id="register-confirm-password"
                name="confirmPassword"
                label="Confirm password"
                placeholder="Re-enter your password"
                invalid={Boolean(error)}
                describedBy={error ? "register-error" : undefined}
              />

              {error && (
                <p
                  id="register-error"
                  className="dd-register__error"
                  role="alert"
                >
                  {error}
                </p>
              )}

              <button type="submit" className="dd-register__submit">
                Create account
              </button>
            </form>

            <div className="dd-register__links">
              <p className="dd-register__signin">
                Already have an account?{" "}
                <Link to="/signin" className="dd-register__link">
                  Sign in
                </Link>
              </p>
              <Link
                to="/"
                className="dd-register__link dd-register__link--muted"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Register;
