import React from "react";
import "./hero.css";

const Hero = () => {
  const imager = {
    width: "100%",
    height: "auto",
  };
  return (
    <>
      <div className="parent">
        <div className="child">
          <img src="./worker4.jpeg" alt="box images" style={imager} />
        </div>
        <div className="child">
          <h1 style={{ padding: "40px 30px" }}>
            Unlocking Talent, Empowering Lives: Your Trusted Source for Skilled
            Labor – Cooks, Drivers, Maids, and More
          </h1>
        </div>
      </div>
      <div className="service-card">
        <div className="card-box">
          <div>
            <img src="./worker3.jpeg" alt="alt_tag" style={imager} />
          </div>
          <h1>service</h1>
          <p>
            Elit sunt occaecat ullamco nulla sunt exercitation laborum et esse
            mollit fugiat.
          </p>
        </div>
        <div className="card-box">
          <div>
            <img src="./worker2.jpeg" alt="alt_tag" style={imager} />
          </div>
          <h1>service</h1>
          <p>
            Elit sunt occaecat ullamco nulla sunt exercitation laborum et esse
            mollit fugiat.
          </p>
        </div>
        <div className="card-box">
          <div>
            <img src="./worker1.jpeg" alt="alt_tag" style={imager} />
          </div>
          <h1>service</h1>
          <p>
            Elit sunt occaecat ullamco nulla sunt exercitation laborum et esse
            mollit fugiat.
          </p>
        </div>
        <div className="de">
          <h1>This is a Heading h1 Tag</h1>
          <p>
            Eiusmod velit ullamco dolore quis officia aute. Ullamco ullamco
            incididunt occaecat eiusmod eu fugiat magna cupidatat amet consequat
            ullamco culpa consectetur. Consectetur consectetur exercitation
            laboris labore id qui laborum magna nulla sit commodo excepteur qui.
            Et ea nostrud nulla magna elit ea tempor sit mollit ea. Eu esse
            nulla in do aliquip ullamco tempor sint voluptate adipisicing
            excepteur culpa quis. Culpa ea mollit id excepteur velit ipsum
            excepteur nisi mollit elit. Aliquip consequat culpa cupidatat magna
            quis aliqua excepteur reprehenderit exercitation ipsum nulla
            adipisicing duis. Minim quis qui ex ex elit labore Lorem. Velit
            proident sunt non minim magna aute aute et minim. Qui quis velit
            magna nostrud est duis magna aute eiusmod cillum nisi minim eu.
            Minim ipsum duis exercitation eiusmod. Officia sint cillum aute
            irure.
          </p>
        </div>
      </div>
    </>
  );
};

export default Hero;
