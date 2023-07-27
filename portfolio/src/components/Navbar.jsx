import { Container, Link } from '@mui/material';
import React from 'react'
import MaterialUISwitch from './MaterialUISwitch';

const MyNavbar = ({checked, onChange}) => {
  return (
    <>
      <Container fluid className="d-flex flex-column sticky-top sidebar p-5 justify-content-evenly">
        <MaterialUISwitch checked={checked} onChange={onChange}/>
                <h3>Welcome!</h3>
                <Link className='navbar-link' underline="none" color="black" href="#about-section">About</Link>
                <Link className='navbar-link' underline="none" color="black" href="#projects-section">Projects</Link>
                <Link className='navbar-link' underline="none" color="black" href="#skills-section">Skills</Link>
                <Link className='navbar-link' underline="none" color="black" href="#contacts-section">Contacts</Link>
        </Container>
    </>
  )
}

export default MyNavbar