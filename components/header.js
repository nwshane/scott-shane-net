import React, { useState } from "react";
import {
  Nav,
  Navbar,
  NavLink,
  NavItem,
  Collapse,
  NavbarBrand,
  NavbarToggler
} from "reactstrap";
import { withRouter } from "next/router";

const isObjectiveTroyPage = router =>
  router.pathname.includes("/objectivetroy");

const Header = ({ showBuyBookModal, router }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="navbar-container">
      <Navbar className="container" expand="xl">
        <h2 className="heading is-hidden">Site Navigation</h2>
        <NavbarBrand href="/bio">
          <span>Scott Shane</span>
          <br />
          <small>
            New York Times
            <br />
            Journalist and Author
          </small>
        </NavbarBrand>
        <NavbarToggler onClick={() => setExpanded(!expanded)} />
        <Collapse isOpen={expanded} navbar>
          <div className="navbar-links">
            {!isObjectiveTroyPage(router) && (
              <NavLink className="nav-link-featured" href="/objectivetroy">
                Objective Troy
              </NavLink>
            )}
            <div className="non-featured-link-nav">
              <NavLink href="/bio">About Scott</NavLink>
              <NavLink href="/reviews">Reviews</NavLink>
              <NavLink href="/media">Media</NavLink>
              <NavLink href="/events">Events</NavLink>
              <NavLink href="#" onClick={showBuyBookModal}>
                Buy the Book
              </NavLink>
              <NavLink href="/contact">Contact</NavLink>
              <NavLink href="https://twitter.com/ScottShaneNYT" target="_blank">
                <img
                  src="static/Social-Icons/Twitter.png"
                  alt="Twitter Social Media Icon"
                />
              </NavLink>
            </div>
          </div>
        </Collapse>
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

            padding: 15px 0 35px;
          }
          a.navbar-brand span {
            font-size: 2.2em;
          }
          a.navbar-brand small {
            vertical-align: top;
            font-size: 1em;
          }

          .navbar-collapse {
            display: flex;
            justify-content: flex-end;
          }

          .navbar-links {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            height: 100%;
            align-items: flex-end;
          }

          .nav-link-featured {
            display: block;
            font-size: 3em;
            height: 100%;
            padding-top: 30px;
          }

          .non-featured-link-nav {
            display: flex;
            align-items: center;
            padding-bottom: 15px;
          }

          .non-featured-link-nav .nav-link {
            padding: 0 15px;
          }
        `}</style>
      </Navbar>
    </div>
  );
};

export default withRouter(Header);
