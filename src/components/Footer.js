import React, { Component } from "react";

export class Footer extends Component {
  render() {
    return (
      
      <div
        className="footer text-center"
        style={{ color: "black", backgroundColor: "#6666ff" }}
      >
        <footer>
          <h1 style={{ backgroundColor: " #ffb380" }}>ABOUT</h1>
          <div className="row  d-flex justify-content-between m-4">
            <div
              className="col md-6 my-5 mx-1"
              style={{ borderRight: "1px solid black", textAlign: "start" }}
            >
              <p>
                <strong>Contect</strong>: +923151107591
              </p>
              <p>
                <strong>Address</strong>: R-2 SECTOR 9 NORTH KARACHI{" "}
              </p>
              <p>
                <strong>Creating-Date</strong>: 6/5/2022{" "}
              </p>
            </div>
            <div
              className="col md-6 my-5 mx-1"
              style={{ borderLeft: "1px solid black", textAlign: "start" }}
            >
              <a
                href="https://web.facebook.com/?_rdc=111&_rdr"
                className="fab fa-facebook mx-3"
                style={{
                  fontSize: "20px",
                  color: "black",
                  textDecoration: "none",
                }}
              >
                : https://web.facebook.com
              </a>
              <br />
              <a
                href="https://www.instagram.com/"
                className="fab fa-instagram  mx-3"
                style={{
                  fontSize: "20px",
                  color: "black",
                  textDecoration: "none",
                }}
              >
                : https://www.instagram.com
              </a>
              <br />
              <a
                href="https://www.google.com/"
                className="fab fa-google  mx-3"
                style={{
                  fontSize: "20px",
                  color: "black",
                  textDecoration: "none",
                }}
              >
                : https://www.google.com
              </a>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
