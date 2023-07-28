import { Drawer, Link, useMediaQuery } from '@mui/material';
import React from 'react';
import MaterialUISwitch from './MaterialUISwitch';

const MyNavbar = ({ checked, onChange }) => {
  const isLargeScreen = useMediaQuery((theme) => theme.breakpoints.up('md'));

  return (
    <>
      <Drawer variant='permanent' anchor={isLargeScreen ? 'left' : 'top'}>
        <div className={isLargeScreen ? 'd-flex flex-column' : 'd-flex justify-content-evenly align-items-center my-3'}>
        <MaterialUISwitch checked={checked} onChange={onChange} />
          {/* <h3 className={isLargeScreen ? 'mt-4' : ''}>Welcome!</h3> */}
        <Link
          className={`navbar-link ${checked ? 'dark-mode-link' : 'light-mode-link'}`}
          underline="none"
          color="currentColor"
          href="#about-section"
        >
          About
        </Link>
        <Link
          className={`navbar-link ${checked ? 'dark-mode-link' : 'light-mode-link'}`}
          underline="none"
          color="currentColor"
          href="#projects-section"
        >
          Projects
        </Link>
        <Link
          className={`navbar-link ${checked ? 'dark-mode-link' : 'light-mode-link'}`}
          underline="none"
          color="currentColor"
          href="#skills-section"
        >
          Skills
        </Link>
        <Link
          className={`navbar-link ${checked ? 'dark-mode-link' : 'light-mode-link'} me-5`}
          underline="none"
          color="currentColor"
          href="#contacts-section"
        >
          Contacts
        </Link>
        </div>
        
      </Drawer>
    </>
  );
};

export default MyNavbar;
