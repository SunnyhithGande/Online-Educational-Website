import React, { useState, useEffect } from "react";
import { Container } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import "./header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    try {
      if (storedUser && storedUser !== "undefined") {
        setUser(JSON.parse(storedUser));
      }
    } catch (error) {
      console.error("Failed to parse user from localStorage:", error);
      localStorage.removeItem("user"); // Remove corrupted data
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUser(null);
    navigate("/login");
  };

  const navLinks = [
    { display: "Home", url: "/" },
    { display: "About", url: "/#about" },
    { display: "Courses", url: "/#coursesstart" },
    { display: "Free Courses", url: "/#freee" },
    { display: "Testimonials", url: "/#testimonials" },
    { display: "Blog", url: "/blogs" },
  ];

  return (
    <header className="header">
      <Container>
        <div className="navigation d-flex align-items-center justify-content-between">
          <div className="logo">
            <h2 className="d-flex align-items-center gap-1">
              <i className="ri-pantone-line"></i> Learners.
            </h2>
          </div>

          <div className={`nav d-flex align-items-center gap-5 ${menuOpen ? "active__menu" : ""}`}>
            <div className="nav__menu">
              <ul className="nav__list">
                {navLinks.map((item, index) => (
                  <li key={index} className="nav__item">
                    <a href={item.url} onClick={() => setMenuOpen(false)}>
                      {item.display}
                    </a>
                  </li>
                ))}
                {user && (
                  <li className="nav__item">
                    <Link to="/brain-break" onClick={() => setMenuOpen(false)}>
                      Brain Break
                    </Link>
                  </li>
                )}
              </ul>
            </div>

            <div className="nav__right d-flex align-items-center gap-3">
              <p className="mb-0 d-flex align-items-center gap-2">
                <i className="ri-phone-line"></i> +91 9876543210
              </p>

              {user ? (
                <div className="user-menu">
                  <span className="username">👤 {user.name}</span>
                  <Link to="/dashboard" className="btn btn-outline-primary me-2">
                    Dashboard
                  </Link>
                  <button
                    className="btn btn-outline-danger"
                    style={{
                      padding: "4px 8px",
                      fontSize: "12px",
                      lineHeight: "1.2",
                      width: "80px",
                      textAlign: "center"
                    }}
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <>
                  <Link to="/login" className="btn btn-outline-primary">Login</Link>
                  <Link to="/signup" className="btn btn-primary">Sign Up</Link>
                </>
              )}
            </div>
          </div>

          <div className="mobile__menu">
            <span onClick={() => setMenuOpen(!menuOpen)}>
              <i className="ri-menu-line"></i>
            </span>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
