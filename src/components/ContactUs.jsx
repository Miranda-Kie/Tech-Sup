import React, { useEffect } from 'react';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';
import Aos from 'aos';
import "aos/dist/aos.css";


const ContactUs = () => {

  useEffect(()=>{
    Aos.init({duration: 3000});
  },[])

  return (
    <div id="contact" data-aos="fade-up">
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