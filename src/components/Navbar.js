import React from 'react';
import Navbar from 'react-bootstrap/Navbar'

function Nav() {
  return (
    <div className="Nav">
      <Navbar expand="bg" variant="dark" bg="dark">
        <img src="https://mediaassets.massmutual.com/Client_Landing_Page/images/mm-logos/MassMutual-logo-landing.svg" alt="MassMutual" width="140" height="17" />
        <Navbar.Brand >Cost of Care POC</Navbar.Brand>
      </Navbar>
    </div>
  );
}

export default Nav;
