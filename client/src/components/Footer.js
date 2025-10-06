import React from 'react';
import './Footercss.css'; // Import the new CSS file

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="flex">
          <div className="logo">
            <img
              src="/images/logo1.png"
              alt="Tactical Panthers Logo"
            />
          </div>
          <div className="footer-info">
            <section>
              <div>
                <h3>Contact Details</h3>
                <p>Email: tacticalpanthers.bgm@gmail.com</p>
                <p>Phone: +91 8123950735</p>
                <p>Location: Belagavi</p>
                <p>&copy; 2023 Tactical Panthers. All rights reserved.</p>
              </div>
            </section>
          </div>
          <div className="about-us">
            <h3>About Us:</h3>
            <p>
              Tactical Panthers is a leading security service company committed
              to providing top-notch protection and peace of mind to our valued
              clients. With a team of highly trained and experienced security
              professionals, we specialize in offering a comprehensive range of
              security solutions tailored to meet the unique needs of businesses
              and individuals alike.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
