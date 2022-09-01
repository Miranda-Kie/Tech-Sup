import React, { Fragment, Suspense } from 'react';
import Loader from './Loader';

const Header = React.lazy(()=> import('./Header'));
const Banner = React.lazy(()=> import('./Banner'));
const TechSup = React.lazy(()=> import('./TechSup'));
const Profile = React.lazy(()=> import('./Profile'));
const Services = React.lazy(()=> import('./Services'));
const ContactUs = React.lazy(()=> import('./ContactUs'));
const Footer = React.lazy(()=> import('./Footer'));

const App = () => {

  return (
    <Fragment>
    <Suspense fallback={<Loader/>}>
      <Header />
      <Banner />
      <TechSup />
      <Profile />
      <Services />
      <ContactUs />
      <Footer year={new Date().getFullYear()}/>
    </Suspense>
    </Fragment>
  );
}

export default App;
