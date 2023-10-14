import React from "react";
import "./demo.css";

const Demo = () => {
  const h2 = {
    fontSize: "58px",
  };
  const h1 = {
    fontSize: "74px",
  };
  return (
    <>
      <div className="demo">
        <div>
          <img src="./home.png" alt="home" />
        </div>
        <h6>Home</h6>
        <div>
          <img src="./home2.png" alt="home" />
        </div>
        <h1 style={h2}>Home2</h1>
        <br />
        <div>
          <img src="./home3.png" alt="home" />
        </div>
        <h1 style={h1}>Home3</h1>
      </div>
    </>
  );
};

export default Demo;
