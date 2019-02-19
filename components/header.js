import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

export default ({ isObjectiveTroyPage }) => (
  <Navbar>
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

    <Navbar.Toggle />
    <Navbar.Collapse>
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
  </Navbar>
);
