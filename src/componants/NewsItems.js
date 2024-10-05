import React, { Component } from "react";

export class NewsItems extends Component {

  render() {
    let { title, description, imgUrl ,newsUrl} = this.props;

    return (
      <>
        <div
          className="card my-3"
          style={{ width: "18rem" }}
        >
          <img src={imgUrl?imgUrl:"https://thumbs.dreamstime.com/b/house-not-available-white-background-sign-label-flat-style-201430826.jpg"} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{!title?"This news has been removed for safety purpose":title.slice(0,43)}...</h5>
            <p className="card-text">{!description?"Not Available":description.slice(0,86)}...</p>
            <a href={newsUrl} target="main" className={title==="[Removed]"?`btn btn-danger`:`btn btn-dark`}>Read More
              </a>
          </div>
        </div>
      </>
    );
  }
}

export default NewsItems;
