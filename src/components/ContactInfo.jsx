import React from 'react';


const ContactInfo = () => {
  return (
    <>
      <h1>Get in touch!</h1>
      
      <h5 className="contact-spacing">
        <i className="fas fa-map-marker-alt"></i> 
        <span style={{ marginLeft: 5}}>24 W Lawn Crescent,</span> 
        <br /> 
        <span style={{ marginLeft: 5}}>Whitchurch-Stouffville, ON</span> 
        <br /> 
        <span style={{ marginLeft: 5}}>L4A 2S9 </span>
      </h5>
      
      <h5 className="contact-spacing" style={{ marginLeft: 5}}><i className="fas fa-envelope"></i> info@techsup.ca</h5>
      <h5 className="contact-spacing" style={{ marginLeft: 5}}><i className="fas fa-phone"></i> (647)999-1234</h5>
      <h3 className="contact-spacing">
        <a className="social_btn" href="https://www.facebook.com/">
          <i className="fab fa-facebook-square"></i>
        </a>
        <a style={{ marginLeft: 18}} className="social_btn" href="https://www.instagram.com/">
          <i className="fab fa-instagram"></i>
        </a>
      </h3>
    </>
  );
 }

export default ContactInfo;