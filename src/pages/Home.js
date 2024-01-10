import React from "react";
import Header from "../components/Header";
import Seperator from "../components/Seperator";
import "../styles/App.css";
import PostAndMember from "../components/PostAndMember";
import Footer from "../components/Footer";
import Content from "../components/Content";

const Home = () => {
  return (
    <div className="container">
      <Header />
      <Seperator />
      <PostAndMember />
      <Content />
      <Seperator />
      <Footer />
    </div>
  );
};

export default Home;
