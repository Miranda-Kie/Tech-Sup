import React from 'react';


function ContactInfo() {
  return (
    <>
      <h1>Get in touch!</h1>
      
      <h5 class="contact-spacing">
        <i class="fas fa-map-marker-alt"></i> 
        <span style={{ marginLeft: 5}}>24 W Lawn Crescent,</span> 
        <br /> 
        <span style={{ marginLeft: 5}}>Whitchurch-Stouffville, ON</span> 
        <br /> 
        <span style={{ marginLeft: 5}}>L4A 2S9 </span>
      </h5>
      
      <h5 class="contact-spacing" style={{ marginLeft: 5}}><i class="fas fa-envelope"></i> info@techsup.ca</h5>
      <h5 class="contact-spacing" style={{ marginLeft: 5}}><i class="fas fa-phone"></i> (647)999-1234</h5>
      <h3 class="contact-spacing">
        <a class="social_btn" href="https://www.facebook.com/">
          <i class="fab fa-facebook-square"></i>
        </a>
        <a style={{ marginLeft: 18}} class="social_btn" href="https://www.instagram.com/">
          <i class="fab fa-instagram"></i>
        </a>
      </h3>
    </>
  );
 }

export default ContactInfo;