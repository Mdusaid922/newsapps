import React from "react";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg" style={{ background: "#ffb3b3", opacity: '0.8' }} >
        <div className="container-fluid">
          <Link className="navbar-brand" style={{ color: "#ff3333" }} to="/">
            <h4><strong><b>NewsMonkey</b></strong></h4>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" style={{ color: "#000080" }} to="/"><strong><b> Home</b></strong></Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" style={{ color: "#000080" }} to="/Business"><strong> <b>Business</b></strong></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" style={{ color: "#000080" }} to="/Entertainment"><strong><b>Entertainment</b></strong></Link>
              </li><strong></strong>
              <li className="nav-item">
                <Link className="nav-link" style={{ color: "#000080" }} to="/General"><strong><b> General</b></strong></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" style={{ color: "#000080" }} to="/Health"><strong><b>Health</b></strong></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" style={{ color: "#000080" }} to="/Science"><strong><b>Science</b></strong></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" style={{ color: "#000080" }} to="/Sports"><strong><b>Sports</b></strong></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" style={{ color: "#000080" }} to="/Technology"><strong><b>Technology</b></strong></Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );

}

export default NavBar;
