import React from 'react';
import Header from './Header';
import Banner from './Banner';
import TechSup from './TechSup';
import Profile from './Profile';
import Services from './Services';
import ContactUs from './ContactUs';
import Footer from './Footer';


function App() {
  

  return (
    <>
      <Header />
      <Banner />
      <TechSup />
      <Profile />
      <Services />
      <ContactUs />
      <Footer year={new Date().getFullYear()}/>
    </>


  );
}


export default App;
