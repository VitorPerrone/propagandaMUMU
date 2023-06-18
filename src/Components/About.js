import React from "react";
import AboutBackground from "../Assets/aboutBg.png";
import AboutBackgroundImage from "../Assets/about.png";
import PDF from "../Assets/pdfEmb.pdf";
const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <h1 className="primary-heading">
          Embalagem 100% ecológica
        </h1>
        <p className="primary-text">
          Desenvolvido para o uso prático! Design eficiente e minimalista
        </p>
        <div className="about-buttons-container">
          <a className="secondary-button" href={PDF}>Protótipo</a>
  
        </div>
      </div>
    </div>
  );
};

export default About;
