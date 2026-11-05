import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import SignIn from "./pages/SignIn";
import Register from "./pages/Register";
import Assignments from "./pages/Assignments";

function AppRoutes() {
  const { pathname } = useLocation();
  const isAuth = pathname === "/signin" || pathname === "/register";

  return (
    // One layout for every page: header on top (not on auth pages),
    // the page content fills the space in the middle, footer sits at the bottom.
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      {!isAuth && <Header />}

      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/assignments" element={<Assignments />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>

      <Footer compact={isAuth} />
    </div>
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
