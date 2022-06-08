import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date, source } = this.props;
    return (
      <div>
        <div
          className="card"
          style={{ backgroundColor: "#F0DB8E", color: "black" }}
        >
          <img
            src={!imageUrl ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKy9w_Y_EZGXUbQSxvuUmXnenYo7K2miY3Wg&usqp=CAU" : imageUrl}
            style={{ height: "180px" }}
            className="card-img-top "
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title"> {title}...<br /><span class="badge bg-success my-2">{source}</span></h5>
            <p className="card-text"> {description}...</p>
            <p className="card-text" >
              <small style={{ color: "green" }}>By:{!author ? "unknown" : author}  <br /> On:{new Date(date).toGMTString()}</small>
            </p>
            <a
              rel="noreferrer"
              href={newsUrl}
              target="_blank"
              className="btn"
              style={{ backgroundColor: "#E5BF33", color: "black" }}

            >
              <b>Read News</b>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
