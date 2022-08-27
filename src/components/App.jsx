import React, { Fragment } from 'react';
import Header from './Header';
import Banner from './Banner';
import TechSup from './TechSup';
import Profile from './Profile';
import Services from './Services';
import ContactUs from './ContactUs';
import Footer from './Footer';


const App = () => {

  return (
    <Fragment>
      <Header />
      <Banner />
      <TechSup />
      <Profile />
      <Services />
      <ContactUs />
      <Footer year={new Date().getFullYear()}/>
    </Fragment>


  );
}


export default App;
