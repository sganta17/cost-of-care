import React from 'react';
import Navbar from 'react-bootstrap/Navbar'

const  Nav = () => {
  return (
    <div className='Nav'>
      <Navbar expand='lg' variant="dark" bg="dark" fixed="top" >
      <Navbar.Brand >Cost of Care POC</Navbar.Brand>
      <Navbar.Collapse className="justify-content-end" >
        <img src="https://mediaassets.massmutual.com/Client_Landing_Page/images/mm-logos/MassMutual-logo-landing.svg" 
            alt="MassMutual" width="140" height="17" />
       </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Nav;
