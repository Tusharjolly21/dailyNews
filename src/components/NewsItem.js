import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, netUrl, author, date,source } = this.props;
    return (
      <div className="my-3">
        <div className="card">
          <img
            src={
              !imageUrl
                ? "https://www.tbdhu.com/themes/de_theme/img/default-news-image.jpg"
                : imageUrl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">
              {title}{" "}
              <span class="position-absolute top-0 translate-middle badge rounded-pill bg-dark" style={{zIndex:'1',left:'95%'}}>
                {source}
              </span>
            </h5>
            <p className="card-text">{description}</p>
            <p class="card-text">
              <small class="text-muted">
                By {author ? author : "unknown"} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a
              href={netUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-sm btn-dark"
            >
              Read more
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
