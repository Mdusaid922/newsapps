import React, { Component } from "react";
import { Link } from "react-router-dom";
export class NavBar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg" style={{ background: "#ffb3b3" , opacity:'0.8'}} >
          <div className="container-fluid">
            <Link className="navbar-brand" style={{ color: "#000080" }} to="/">
              <strong><b>NewsMonkey</b></strong>
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
                <li className="nav-item"><Link className="nav-link" style={{ color: "#000080" }} to="/">
                  <b> Home</b>
                </Link>
                </li>

                <li className="nav-item"><Link className="nav-link" style={{ color: "#000080" }} to="/Business">
                  <b>Business</b>
                </Link>
                </li>
                <li className="nav-item"><Link className="nav-link" style={{ color: "#000080" }} to="/Entertainment">
                  <b>Entertainment
                  </b>               </Link>
                </li>
                <li className="nav-item"><Link className="nav-link" style={{ color: "#000080" }} to="/General">
                  <b> General
                  </b>          </Link>
                </li>
                <li className="nav-item"><Link className="nav-link" style={{ color: "#000080" }} to="/Health">
                  <b>Health
                  </b>        </Link>
                </li>
                <li className="nav-item"><Link className="nav-link" style={{ color: "#000080" }} to="/Science">
                  <b>Science
                  </b>         </Link>
                </li>
                <li className="nav-item"><Link className="nav-link" style={{ color: "#000080" }} to="/Sports">
                  <b>Sports
                  </b>        </Link>
                </li>
                <li className="nav-item"><Link className="nav-link" style={{ color: "#000080" }} to="/Technology">
                  <b>Technology
                  </b>            </Link>
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
