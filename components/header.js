import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

export default ({ isObjectiveTroyPage }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="navbar-container">
      <Navbar
        className="container"
        expand="sm"
        expanded={expanded}
        onToggle={setExpanded}
      >
        <h2 className="heading is-hidden">Site Navigation</h2>
        <Navbar.Brand href="/bio">
          <span>Scott Shane</span>
          <br />
          <small>
            New York Times
            <br />
            Journalist and Author
          </small>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            {!isObjectiveTroyPage && (
              <Nav.Link href="/objectivetroy">Objective Troy</Nav.Link>
            )}
            <Nav.Link href="/bio">About Scott</Nav.Link>
            <Nav.Link href="/reviews">Reviews</Nav.Link>
            <Nav.Link href="/media">Media</Nav.Link>
            <Nav.Link href="/events">Events</Nav.Link>
            <Nav.Link href="#">Buy the Book</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
            <Nav.Link href="https://twitter.com/ScottShaneNYT" target="_blank">
              <img
                src="static/Social-Icons/Twitter.png"
                alt="Twitter Social Media Icon"
              />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <style jsx global>{`
          .navbar-container {
            /* Photographer: Parker Knight
        Flickr Username: rocketboom
        Title: Imperial Dunes California
        Copyright: Some rights reserved
        License: Attribution 2.0 Generic (CC BY 2.0)
        License URL: https://creativecommons.org/licenses/by/2.0/
        Flickr URL: https://www.flickr.com/photos/rocketboom/2816811574/in/photolist-5hUTWN-5HJ2V5-53EbFZ-8QWudc-86EPJy-ePDzyY-86BCTF-5FcxhC-4JZfZV-d5K46S-55wHhT-s3nq97-8HxkqY-bxU5QJ-5FDH2i-d8KrFb-5hQruV-e6LpUo-gcuAeT-5hQsSK-5hQwD6-8Dk9jd-5hUMyQ-5hQv4R-5hQr8t-7nNYtz-PzrQA-dWh5Xn-dNb5PH-btwu4L-6r6gAX-atTJT2-5Fcw1N-5hQrRB-bw4byT-aEJ8Rk-7EezQd-dSA683-5FHYK3-82btr8-6qDfwp-dNbzmv-rYzdjs-7LE4up-bv9Tw6-8Hucqv-prqAx9-4m7SNM-dNfTxb-dNbHH4
        Modifications: Rotated slightly to right and cropped */
            background-image: url("../static/Desert-Background.jpg");
            background-color: rgb(199, 169, 148);
            background-repeat: no-repeat;
            background-size: cover;

            padding: 15px 0;
          }

          .navbar {
            display: flex;
            justify-content: space-between;
          }

          .navbar a {
            color: #dddddd;
          }

          .navbar a:hover {
            text-decoration: none;
            color: #333;
          }

          .navbar-toggler {
            display: none;
          }

          a.navbar-brand {
            height: inherit;
            line-height: 1em;
            line-height: initial;
            font-size: 1em;
          }
          a.navbar-brand span {
            font-size: 2.2em;
          }
          a.navbar-brand small {
            vertical-align: top;
            font-size: 1em;
          }

          .navbar-nav {
            display: flex;
            align-items: center;
          }
        `}</style>
      </Navbar>
    </div>
  );
};
