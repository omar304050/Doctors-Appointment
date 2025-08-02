import React from "react";
import Header from "../components/Header";
import SpecialtyMenu from "../components/SpecialtyMenu";
import TopDoctors from "../components/TopDoctors";
import Banner from "../components/Banner";
import { Helmet } from "react-helmet";
const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home</title>
        <meta
          name="description"
          content="Welcome to the home page of My Website."
        />
      </Helmet>
      <Header />
      <SpecialtyMenu />
      <TopDoctors />
      <Banner />
    </div>
  );
};

export default Home;
