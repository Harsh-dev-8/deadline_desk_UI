import { useState } from "react";
import { Link } from "react-router-dom";
import "../css/signIn.css";

function SignIn() {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Authentication is not connected yet, so nothing is sent anywhere.
    // When the backend is ready, read the values here:
    //   const data = new FormData(event.currentTarget);
    //   data.get("email"), data.get("password"), data.get("remember") === "on"
    // then call the auth API, redirect on success, and show an error on failure.
  };

  return (
    <main className="dd-signin">
      <div className="dd-signin__card">
        {/* Branding panel */}
        <aside className="dd-signin__brand-panel">
          <div className="dd-signin__brand">
            <span className="dd-signin__logo" aria-hidden="true">
              DD
            </span>
            <span>
              <span className="dd-signin__brand-name">DeadlineDesk</span>
              <small className="dd-signin__tagline">ALWAYS STAY ALERT</small>
            </span>
          </div>

          <div className="dd-signin__pitch">
            <p className="dd-signin__headline">Stay ahead of every deadline.</p>
            <p className="dd-signin__description">
              Track academic deadlines, student services, and important
              updates in one place, so you never miss a form, a submission, or
              an exam date.
            </p>
          </div>
        </aside>

        {/* Sign-in form panel */}
        <section
          className="dd-signin__form-panel"
          aria-labelledby="signin-title"
        >
          <div className="dd-signin__form-inner">
            <h1 id="signin-title" className="dd-signin__title">
              Sign in
            </h1>
            <p className="dd-signin__subtitle">
              Enter your account details to continue to DeadlineDesk.
            </p>

            <form className="dd-signin__form" onSubmit={handleSubmit}>
              <div className="dd-signin__field">
                <label htmlFor="signin-email" className="dd-signin__label">
                  Email
                </label>
                <input
                  id="signin-email"
                  className="dd-signin__input"
                  type="email"
                  name="email"
                  autoComplete="email"
                  autoCapitalize="none"
                  spellCheck={false}
                  placeholder="name@example.com"
                  required
                />
              </div>

              <div className="dd-signin__field">
                <label htmlFor="signin-password" className="dd-signin__label">
                  Password
                </label>
                <div className="dd-signin__password">
                  <input
                    id="signin-password"
                    className="dd-signin__input dd-signin__input--password"
                    type={showPassword ? "text" : "password"}
                    name="password"
                    autoComplete="current-password"
                    placeholder="Enter your password"
                    required
                  />
                  <button
                    type="button"
                    className="dd-signin__toggle"
                    aria-controls="signin-password"
                    aria-label={
                      showPassword ? "Hide password" : "Show password"
                    }
                    onClick={() => setShowPassword((visible) => !visible)}
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </div>
              </div>

              <label className="dd-signin__remember">
                <input
                  className="dd-signin__checkbox"
                  type="checkbox"
                  name="remember"
                />
                <span>Remember me</span>
              </label>

              <button type="submit" className="dd-signin__submit">
                Sign In
              </button>
            </form>

            <div className="dd-signin__links">
              <p className="dd-signin__register">
                New to DeadlineDesk?{" "}
                <Link to="/register" className="dd-signin__link">
                  Create an account
                </Link>
              </p>
              <Link to="/" className="dd-signin__link dd-signin__link--muted">
                Back to Home
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default SignIn;
