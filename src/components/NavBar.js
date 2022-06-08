import React, { Component } from "react";
import { Link } from "react-router-dom";
export class NavBar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg" style={{ background: "#30280D" }} >
          <div className="container-fluid">
            <Link className="navbar-brand" style={{ color: "#E5BF33" }} to="/">
              <strong>NewsMonkey</strong>
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
                <li className="nav-item"><Link className="nav-link" style={{ color: "#F0DB8E" }} to="/">
                  Home
                </Link>
                </li>

                <li className="nav-item"><Link className="nav-link" style={{ color: "#F0DB8E" }} to="/Business">
                  Business
                </Link>
                </li>
                <li className="nav-item"><Link className="nav-link" style={{ color: "#F0DB8E" }} to="/Entertainment">
                  Entertainment
                </Link>
                </li>
                <li className="nav-item"><Link className="nav-link" style={{ color: "#F0DB8E" }} to="/General">
                  General
                </Link>
                </li>
                <li className="nav-item"><Link className="nav-link" style={{ color: "#F0DB8E" }} to="/Health">
                  Health
                </Link>
                </li>
                <li className="nav-item"><Link className="nav-link" style={{ color: "#F0DB8E" }} to="/Science">
                  Science
                </Link>
                </li>
                <li className="nav-item"><Link className="nav-link" style={{ color: "#F0DB8E" }} to="/Sports">
                  Sports
                </Link>
                </li>
                <li className="nav-item"><Link className="nav-link" style={{ color: "#F0DB8E" }} to="/Technology">
                  Technology
                </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
