import React from "react";
import Header from "./header";

export default ({ children }) => (
  <>
    <Header />
    <main className="container">{children}</main>
  </>
);
