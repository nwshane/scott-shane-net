import React from "react";

import Head from "../components/head";
import Layout from "../components/layout";

export default () => (
  <Layout>
    <Head
      title="About the Author"
      description="Scott Shane is a national security reporter for The New York Times, where he has written on terrorism and other subjects for more than a decade."
    />

    <article>
      <h1 class="primary-header mod-bio">About Scott Shane</h1>

      <figure class="scott-shane-portrait">
        <img
          src="static/Scott-Shane-Author-and-Journalist-Smiling-Portrait.jpg"
          alt="Scott Shane Author and Journalist Smiling Portrait"
        />

        <figcaption>Credit: Drew Angerer</figcaption>
      </figure>

      <div>
        <p>
          Scott Shane is a reporter in the Washington bureau of The New York
          Times, where he has covered national security since 2004. He has
          written on recruiting by the Islamic State; the debate over drones and
          targeted killing; the National Security Agency and Edward Snowden's
          leaked documents; WikiLeaks and confidential State Department cables;
          and the Obama administration’s prosecution of leaks of classified
          information, including a lengthy profile of John Kiriakou, the first
          C.I.A. officer to be imprisoned for leaking. During the Bush
          administration, he wrote widely on the debate over torture, and his
          2007 articles on interrogation, written with colleagues, were a
          finalist for the Pulitzer Prize. He has also written on the anthrax
          investigation, the evolving terrorist threat, the government’s secret
          effort to reclassify historical documents and the explosion in federal
          contracting.
        </p>

        <p>
          From 1983 to 2004, he was a reporter for The Baltimore Sun, covering a
          range of beats from courts to medicine and writing series of articles
          on brain surgery, schizophrenia, a drug corner, guns and crime and
          other topics. He was The Sun's Moscow correspondent from 1988 to 1991
          and wrote a book on the Soviet collapse,{" "}
          <span class="book-title">
            Dismantling Utopia: How Information Ended the Soviet Union
          </span>
          , which the Los Angeles Times described as "one of the essential works
          on the fall of the Soviet Union." In 1995, he co-wrote a six-part
          explanatory series of articles on the National Security Agency, the
          first major investigation of NSA since James Bamford's 1982 book{" "}
          <span class="book-title">The Puzzle Palace</span>. His series on a
          public health project in Nepal won the nation's top science-writing
          award from the American Association for the Advancement of Science in
          2001.
        </p>

        <p>
          He lives in Baltimore with his wife, Francie Weeks, who teaches
          English to foreign students. They have three children.
        </p>
      </div>
    </article>
  </Layout>
);
