import React from "react";
import { useNavigate } from "react-router-dom";
import { Carousel } from "antd";
import Header from "./Header";


import "antd/dist/antd.css";

// import "./Styles/Dashboard.css";
import bg1 from "./assets/bg1.jpg";
import bg2 from "./assets/bg2.jpg";
import bg3 from "./assets/bg3.jpg";
import bg4 from "./assets/bg4.jpg";
import bg5 from "./assets/bg5.jpg";

const Dashbord = () => {
  const history = useNavigate();

  return (
    <>
      <div className=" container mx-auto mt-2 ">
        <Header/>
        <Carousel autoplay>
          <div>
            <img src={bg1} />
          </div>
          <div>
            <img src={bg2} />
          </div>
          <div>
            <img src={bg3} />
          </div>
          <div>
            <img src={bg4} />
          </div>
          <div>
            <img src={bg5} />
          </div>
        </Carousel>
        <br />
      </div>
    </>
  );
};

export default Dashbord;
