import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import SignIn from "./pages/SignIn";
import Register from "./pages/Register";

function AppRoutes() {
  const location = useLocation();
  const isSignIn = location.pathname === "/signin";
  const isRegister = location.pathname === "/register";
  const isAuth = isSignIn || isRegister;

  return (
    <>
      {!isAuth && <Header />}
      {isAuth ? (
        <div style={{ display: "flex", flexDirection: "column", height: "100vh", overflow: "hidden" }}>
          <div style={{ flex: 1, overflow: "hidden" }}>
            <Routes>
              <Route path="/signin" element={<SignIn />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          </div>
          <Footer compact />
        </div>
      ) : (
        <>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          <Footer />
        </>
      )}
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
