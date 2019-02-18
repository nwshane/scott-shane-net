import React from "react";

import Header from "./header";
import Footer from "./footer";

import "../stylesheets/application.scss";

export default ({ children }) => (
  <>
    <Header />
    <main className="container">{children}</main>
    <Footer />
  </>
);
