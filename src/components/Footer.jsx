import React from 'react';

function Footer(props) {
  return (
    <>
      <footer class="mastfoot mt-auto py-3">
        <div class="container">
          <p>Copyright © {props.year} TechSup.ca, Inc.</p>
        </div>
      </footer>
    </>
  );
 }

export default Footer;
