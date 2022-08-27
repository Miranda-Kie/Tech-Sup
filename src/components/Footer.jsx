import React from 'react';

const Footer = (props) => {
  return (
      <footer className="mastfoot mt-auto py-3">
        <div className="container">
          <p>Copyright © {props.year} TechSup.ca, Inc.</p>
        </div>
      </footer>
  );
 }

export default Footer;
