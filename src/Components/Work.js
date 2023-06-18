import React from "react";
import Iframe from 'react-iframe'

const Work = () => {

  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <h1 className="primary-heading">Vídeo comercial</h1>
      </div>
      <center> 
      <Iframe url="https://www.youtube.com/embed/pAtDziwXeKI"
        width="940px"
        height="620px"
        id=""
        className=""
        display="block"
        position="relative"/>
        </center>
    </div>
  );
};

export default Work;
