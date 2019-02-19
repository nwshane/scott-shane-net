import React, { useState } from "react";

import Header from "./header";
import Footer from "./footer";
import BuyBookModal from "./BuyBookModal";

import "bootstrap/dist/css/bootstrap.css";
import "normalize.css";
import "../stylesheets/application.scss";

export default ({ children }) => {
  const [buyBookModalIsVisible, setBuyBookModal] = useState(false);
  return (
    <>
      <Header showBuyBookModal={() => setBuyBookModal(true)} />
      <BuyBookModal
        show={buyBookModalIsVisible}
        closeModal={() => setBuyBookModal(false)}
      />
      <main className="container">{children}</main>
      <Footer />
    </>
  );
};
