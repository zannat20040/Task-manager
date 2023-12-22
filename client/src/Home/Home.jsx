import React from "react";
import Banner from "./Banner";
import ResponsiveNavbar from "../Common/ResponsiveNavbar";
import Stat from "../Statistics.jsx/Stat";
import Benifit from "../Benefit/Benifit";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <>
      <Banner></Banner>
      <Stat></Stat>
      <Benifit></Benifit>
      <Footer></Footer>
    </>
  );
};

export default Home;
