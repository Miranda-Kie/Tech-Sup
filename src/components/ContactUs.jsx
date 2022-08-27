import React from 'react';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';


const ContactUs = () => {
  return (
    <div id="contact">
      <div id="contact-bg">
        <div className="container-fluid" >
          <div className="row row-content">
            <div className="col-md-6" >
              <ContactInfo />
            </div>
            <div className="col-md-6" >
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
 }

export default ContactUs;