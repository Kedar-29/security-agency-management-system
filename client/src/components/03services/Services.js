import React from "react";
import "./OurServices.css"; // Import CSS file

const OurServices = () => {
  return (
    <div className="services-container">
  <br/>  <br/>
      <h1>Services at Tactical Panthers</h1>
      <div className="image-container">
        <div className="image-box">
          <img src="/CareerImages/1.png" alt="Bouncer Service" />
          <div className="overlay">Bouncer</div>
        </div>
        <div className="image-box">
          <img src="/CareerImages/2.png" alt="Guard Service" />
          <div className="overlay">Guard</div>
        </div>
        <div className="image-box">
          <img src="/CareerImages/3.png" alt="Housekeeping" />
          <div className="overlay">Housekeeping</div>
        </div>
        <div className="image-box">
          <img src="/CareerImages/4.png" alt="Supervisor Service" />
          <div className="overlay">Supervisor</div>
        </div>
      </div>
      <br/>  <br/> 
    </div>
  );
};

export default OurServices;
