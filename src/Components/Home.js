import React from "react";
import BannerBackground from "../Assets/homeBanner.png";
import BannerImage from "../Assets/home.png";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            O achocolatado com sabor de infância!
          </h1>
          <p className="primary-text">
          Novo achocolatado em pó com 30% de cacau na fórmula e sabor intenso de chocolate meio amargo.
          </p>
          <button className="secondary-button">
            Acesse nosso portfólio <FiArrowRight />{""}
          </button>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
