import React, { Component } from "react";

export class NewsItems extends Component {
  myStyle = {
    maxHeight: "24rem",
    overflowY: "scroll",
  };
  render() {
    let { title, description, imgUrl, newsUrl, author, date, name } =
      this.props;

    return (
      <>
        <div className="card my-3 " style={this.myStyle}>
          <img
            src={
              imgUrl
                ? imgUrl
                : "https://thumbs.dreamstime.com/b/house-not-available-white-background-sign-label-flat-style-201430826.jpg"
            }
            className="card-img-top"
            alt="..."
          />

          <div className="card-body">
            <h5 className="card-title">
              {!title ? "This news has been removed for safety purpose" : title}
              ...
            </h5>
            <span className="badge text-bg-primary">{name}</span>
            <p className="card-text">
              {!description ? "Not Available" : description}...
            </p>
            <p>
              <small className="text-muted">
                By {author ? author : "unknown"} on {date}
              </small>
            </p>
            <a
              href={newsUrl}
              target="main"
              className={
                title === "[Removed]" ? `btn btn-danger` : `btn btn-dark`
              }
            >
              Read More
            </a>
          </div>
        </div>
      </>
    );
  }
}

export default NewsItems;
