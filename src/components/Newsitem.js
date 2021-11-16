import React, { Component } from "react";

export class Newsitem extends Component {
  render(props) {
    let { title, description, imageUrl, newsUrl, author, date, source } = this.props;
    return (
      <div>
        <div className="card">
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              position: "absolute",
              right: "0",
            }}
          >
            <span className=" badge rounded-pill bg-danger">{source} </span>
          </div>
          <img
            src={
              !imageUrl
                ? "https://techcrunch.com/wp-content/uploads/2021/07/handwriting-checks-spending-spac-money.jpg?w=711%22%20class=%22card-img-top%22%20alt="
                : imageUrl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h4 className="card-title">{title}</h4>
            <p className="card-text">{description}...</p>
            <p className="card-text">
              <small className="text-muted">
                By {!author ? "unknown" : author} on {new Date(date).toGMTString()}{" "}
              </small>
            </p>
            <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark    ">
              Read more
            </a>
          </div>{" "}
        </div>
      </div>
    );
  }
}

export default Newsitem;
