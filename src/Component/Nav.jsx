import React, { useEffect } from "react";
import feather from "feather-icons";
import Logo from "./assets/img/download.png";
import UserProfile from "./assets/img/images.png";
import { Link, useLocation } from "react-router-dom";

function Nav() {
  useEffect(() => {
    // Initialize Feather Icons after the component is mounted
    feather.replace();
  }, []);

  const location = useLocation();

  return (
    <>
      <div id="app">
        <div className="main-wrapper main-wrapper-1">
          <div className="navbar-bg"></div>
          <nav className="navbar navbar-expand-lg main-navbar sticky">
            <div className="form-inline mr-auto">
              <ul className="navbar-nav mr-3">
                <li>
                  <a
                    href="#"
                    data-toggle="sidebar"
                    class="nav-link nav-link-lg
									collapse-btn"
                  >
                    {" "}
                   
                  </a>
                </li>
              </ul>
            </div>
            <ul className="navbar-nav navbar-right">
              <li className="dropdown">
                <a
                  href="#"
                  data-toggle="dropdown"
                  className="nav-link dropdown-toggle nav-link-lg nav-link-user"
                >
                  {" "}
                  <img
                    alt=""
                    src={UserProfile}
                    style={{ borderRadius: "20px" }}
                    className="user-img-radious-style"
                  />{" "}
                  <span className="d-sm-none d-lg-inline-block"></span>
                </a>
                <div className="dropdown-menu dropdown-menu-right pullDown">
                  <div className="dropdown-title">SMIT</div>
                  
                  <div className="dropdown-divider"></div>
                  <a href="/" className="dropdown-item has-icon text-danger">
                    {" "}
                    <i className="fas fa-sign-out-alt"></i>
                    Logout
                  </a>
                </div>
              </li>
            </ul>
          </nav>
          <div className="main-sidebar sidebar-style-2">
            <aside id="sidebar-wrapper">
              <div className="sidebar-brand">
                <a href="#">
                  <img alt="" src={Logo} width="70" />
                  <span className="logo-name">Admin Portal</span>
                </a>
              </div>
              <ul className="sidebar-menu">
                <li className="menu-header">Main</li>
                <li className={location.pathname === "/Home" ? "active" : ""}>
                  <Link to="/Home" className="nav-link">
                    <i data-feather="monitor"></i>
                    <span>Dashboard</span>
                  </Link>
                </li>
                <li className={location.pathname === "/Post" ? "active" : ""}>
                  <Link to="/Post" className="nav-link">
                    <i data-feather="image"></i>
                    <span>Image Post</span>
                  </Link>
                </li>
                <li className={location.pathname === "/VideoPost" ? "active" : ""}>
                  <Link to="/VideoPost" className="nav-link">
                    <i data-feather="film"></i>
                    <span>Video Post</span>
                  </Link>
                </li>
                <li className={location.pathname === "/Request" ? "active" : ""}>
                  <Link to="/Request" className="nav-link">
                    <i data-feather="clipboard"></i>
                    <span>Request</span>
                  </Link>
                </li>
             
                <li className={location.pathname === "/Donation" ? "active" : ""}>
                  <Link to="/Donation" className="nav-link">
                    <i data-feather="book"></i>
                    <span>Donation</span>
                  </Link>
                </li>
              </ul>
            </aside>
          </div>
        </div>
      </div>
    </>
  );
}

export default Nav;
