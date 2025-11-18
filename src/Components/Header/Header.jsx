import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./header.css";

const Header = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState(localStorage.getItem("role"));
  const isLoggedIn = !!role;

  useEffect(() => {
    const handleStorageChange = () => {
      setRole(localStorage.getItem("role"));
    };

    // Listen for login/logout from other components
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("role");
    setRole(null);
    navigate("/login");
  };

  return (
    <header className="app-header">
      <div className="container-headr">
        <div className="logo">
          <Link to="/">
            <img
              src="/imgs Brand/logo/logoReadyUP.png"
              alt="loading-logo"
              className="logoimg"
            />
          </Link>
        </div>

        <nav className="nav-links">
          <ul className="nav-links-ul">
            <li><Link to="/">Home</Link></li>
            <li><a href="/#restaurants">Restaurants</a></li>
            <li><a href="/#how-to-use">How it Works</a></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>

        <div className="header-buttons">
          {isLoggedIn ? (
            <>
              {role === "user" && (
                <div className="user-menu">
                  <img
                    src="/imgs Brand/profile-icon.png"
                    alt="Profile"
                    className="profile-icon"
                  />
                  <button
                    className="order-btn"
                    onClick={() => navigate("/orders")}
                  >
                    My Orders
                  </button>
                  <button className="logout-btn" onClick={handleLogout}>
                    Logout
                  </button>
                </div>
              )}

              {role === "admin" && (
                <div className="user-menu">
                  <button
                    onClick={() => navigate("/admin-dashboard")}
                    className="order-btn"
                  >
                    Dashboard
                  </button>
                  <button className="logout-btn" onClick={handleLogout}>
                    Logout
                  </button>
                </div>
              )}

              {role === "restaurant" && (
                <div className="user-menu">
                  <button
                    onClick={() => navigate("/restaurant-dashboard")}
                    className="order-btn"
                  >
                    Dashboard
                  </button>
                  <button className="logout-btn" onClick={handleLogout}>
                    Logout
                  </button>
                </div>
              )}
            </>
          ) : (
            <>
              <Link to="/login" className="login-btn">
                Login
              </Link>
              <Link to="/signup" className="signup-btn">
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
