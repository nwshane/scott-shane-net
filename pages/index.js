import React, { useEffect } from "react";
import Router from "next/router";

import Head from "../components/head";
import Layout from "../components/layout";

const Home = () => {
  useEffect(() => {
    Router.push("/objectivetroy");
  });

  return (
    <Layout>
      <Head
        title="Objective Troy"
        description="Objective Troy tells the story of Anwar al-Awlaki, an American imam who eventually joined Al Qaeda in Yemen, where President Obama ordered him killed with a drone."
      />
    </Layout>
  );
};

export default Home;
