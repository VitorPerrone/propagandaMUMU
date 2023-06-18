import React from "react";
import Mumu from "../Assets/mumu.svg";

import { BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-section-one">
        <div className="footer-logo-container">
          <img src={Mumu} alt="" />
        </div>
        <div className="footer-icons">
          <a href={"https://instagram.com/terceirao415_c?igshid=MzRlODBiNWFlZA=="} target="_blank"><BsInstagram /></a>
          
        </div>
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
          <span>Gabriel Victor</span>
          <span>Giovanna Honorato</span>
          <span>Marian Oliveira</span>
          <span>Vitor Perrone</span>
        </div>
        <div className="footer-section-columns">
          <span>SESI C.A.E. 415</span>
          <span>3º ano C</span>
          <span>Matemática e Artes</span>
          <span>Keyt e Vanessa</span>
        </div>   
      </div>
    </div>
  );
};

export default Footer;
