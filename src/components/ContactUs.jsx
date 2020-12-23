import React from 'react';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';


function ContactUs() {
  return (
    <div id="contact">
      <div id="contact-bg">
        <div class="container-fluid" >
          <div class="row row-content">
            <div class="col-md-6" >
              <ContactInfo />
            </div>
            <div class="col-md-6" >
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
 }

export default ContactUs;