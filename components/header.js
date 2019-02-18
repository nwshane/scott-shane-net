import React from "react";

export default ({ showObjectiveTroyLink }) => (
  <nav className="navbar navbar-default navbar-static-top">
    <h2 className="heading is-hidden">Site Navigation</h2>
    <div className="container">
      <button
        type="button"
        className="navbar-toggle"
        data-toggle="collapse"
        data-target=".navbar-responsive-collapse"
      >
        <span className="icon-bar" />
        <span className="icon-bar" />
        <span className="icon-bar" />
      </button>
      <a className="navbar-brand" href="/bio">
        <span>Scott Shane</span>
        <br />
        <small>
          New York Times
          <br />
          Journalist and Author
        </small>
      </a>
      <div className="navbar-collapse collapse navbar-responsive-collapse">
        <ul className="nav navbar-nav navbar-right">
          {showObjectiveTroyLink && (
            <li className="featured">
              <a href="/objectivetroy">Objective Troy</a>
            </li>
          )}
          <li>
            <a href="/bio">About Scott</a>
          </li>
          <li>
            <a href="/objectivetroy/reviews">Reviews</a>
          </li>
          <li>
            <a href="/media">Media</a>
          </li>
          <li>
            <a href="/events">Events</a>
          </li>
          <li>
            <a
              href="#"
              data-toggle="modal"
              data-target=".js-open-buy-book-modal"
            >
              Buy the Book
            </a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
          <li className="social-icons">
            <a href="https://twitter.com/ScottShaneNYT" target="_blank">
              <img
                src="static/Social-Icons/Twitter.png"
                alt="Twitter Social Media Icon"
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);
