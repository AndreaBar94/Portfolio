import { Drawer, Link, useMediaQuery } from '@mui/material';
import React, { useEffect, useState } from 'react';
import MaterialUISwitch from './MaterialUISwitch';

const MyNavbar = ({ checked, onChange }) => {
  const isLargeScreen = useMediaQuery((theme) => theme.breakpoints.up('md'));
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      if (!isLargeScreen) {
        setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 100);
      } else {
        setVisible(true); // Mostra sempre la navbar su schermi più grandi
      }
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos, isLargeScreen]);

  return (
    <>
      {visible && (
        <Drawer variant='permanent' anchor={isLargeScreen ? 'left' : 'top'} className='justify-content-between navbarStyle'>
          <div className={isLargeScreen ? 'd-flex flex-column p-3 justify-content-evenly' : 'd-flex justify-content-evenly align-items-center navMobile'}>
            <MaterialUISwitch checked={checked} onChange={onChange} />
            <Link
              className={`navbar-link my-5 ${checked ? 'dark-mode-link' : 'light-mode-link'} `}
              underline="none"
              color="currentColor"
              href="#about-section"
            >
              About
            </Link>
            <Link
              className={`navbar-link my-5 ${checked ? 'dark-mode-link' : 'light-mode-link'} d-none d-md-block`}
              underline="none"
              color="currentColor"
              href="#projects-section"
            >
              Projects
            </Link>
            <Link
              className={`navbar-link my-5 ${checked ? 'dark-mode-link' : 'light-mode-link'} d-none d-md-block`}
              underline="none"
              color="currentColor"
              href="#skills-section"
            >
              Skills
            </Link>
            <Link
              className={`navbar-link my-5 ${checked ? 'dark-mode-link' : 'light-mode-link'} me-5`}
              underline="none"
              color="currentColor"
              href="#contacts-section"
            >
              Contacts
            </Link>
          </div>
        </Drawer>
      )}
    </>
  );
};

export default MyNavbar;
