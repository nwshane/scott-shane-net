import React from "react";

import Head from "../components/head";
import Layout from "../components/layout";

export default () => {
  return (
    <Layout>
      <article>
        <Head
          title="Contact"
          description="Contact Scott Shane, author of Objective Troy and national security reporter for The New York Times."
        />
        <h1 className="heading is-hidden">Contact Scott Shane</h1>

        <p>
          To contact Scott Shane, send an email to scott.shane AT nytimes.com.
        </p>

        <p>
          To send an encrypted message,{" "}
          <a
            href="http://pgp.mit.edu/pks/lookup?op=get&search=0xBC220785DDDE5F70"
            target="blank"
          >
            use this public key
          </a>
          .
        </p>
      </article>
    </Layout>
  );
};
