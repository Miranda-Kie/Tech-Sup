import React from 'react';
import { Link } from 'react-router-dom';


const ContactInfo = () => {
  return (
    <>
      <h1>Get in touch!</h1>
      
      <h5 className="mt-4">
        <i className="fas fa-map-marker-alt"></i> 
        <span className="ml-2">24 W Lawn Crescent,</span> 
        <br /> 
        <span className="ml-4">Whitchurch-Stouffville, ON</span> 
        <br /> 
        <span className="ml-4">L4A 2S9 </span>
      </h5>
      <h5 className="mt-2 ml-0"><i className="fas fa-phone"></i> (647) 999-1234</h5>
      <a className="mt-2 ml-0 email" 
          style={{ fontSize: "1.25rem", fontWeight: "bold" }} 
          href="mailto:tech.sup102@gmail.com">
          <i className="fas fa-envelope"></i> tech.sup102@gmail.com 
      </a>
      <h3 className="mt-2 ml-0">
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