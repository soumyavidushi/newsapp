import React, { Component } from "react";
import { Link } from "react-router-dom";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date, source } = this.props;
    return (
      <div className="card" style={{ width: "18rem" }}>
          <span class="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left: '83%',zIndex:'1'}}>
              {source}
            </span>
        <img
          src={
            imageUrl
              ? imageUrl
              : "https://cdn.dnaindia.com/sites/default/files/styles/half/public/2022/01/17/1015079-earth-g8b0c930bd1280.jpg"
          }
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">
            {title}
          </h5>
          <p className="card-text">{description}</p>
          <p className="card-text">
            <small className="text-muted">
              By {author ? author : "Unknown"} on {new Date(date).toGMTString()}
            </small>
          </p>
          <Link to={newsUrl} className="btn btn-sm btn-dark" rel="noreferrer">
            Read More
          </Link>
        </div>
      </div>
    );
  }
}

export default NewsItem;
