import React from "react";

const NewsItem =(props)=> {
  
    let { title, description, imageUrl, newsUrl, author, date, source } = props;
    return (
      <div>
        <div
          className="card"
          style={{ backgroundColor: "transparent", color: "black",borderColor:"#ff8080" }}
        >
          
          <img
            src={!imageUrl ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKy9w_Y_EZGXUbQSxvuUmXnenYo7K2miY3Wg&usqp=CAU" : imageUrl}
            style={{ height: "180px" }}
            className="card-img-top "
            alt="..."
          />
          <div className="card-body" style={{}}>
            <h5 className="card-title"><b> {title}...</b><br /><span className="badge bg-success my-2">{source}</span></h5>
            <p className="card-text"> <b>{description}...</b></p>
            <p className="card-text" >
             <b> <small style={{ color: "blue" }}>By:{!author ? "unknown" : author}  <br /> On:{new Date(date).toGMTString()}</small></b>
            </p>
            <a
              rel="noreferrer"
              href={newsUrl}
              target="_blank"
              className="btn"
              style={{ backgroundColor: "#ff3333", color: "white" }}

            >
              <b>Read News</b>
            </a>
          </div>
        </div>
      </div>
    );
 
}

export default NewsItem;
