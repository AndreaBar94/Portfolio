import { Container, Grid, Typography } from '@mui/material';
import React from 'react'
import github from '../assets/icons/github.svg';
import linkedin from '../assets/icons/linkedin.svg';
import instagram from '../assets/icons/instagram.svg';
import email from '../assets/icons/email.svg';

const Contacts = () => {
  const contactData = [
    { name: 'GitHub', icon: <img src={github} alt="github" width={48} height={48} />, url: "https://github.com/AndreaBar94"},
    { name: 'LinkedIn', icon: <img src={linkedin} alt="linkedin" width={48} height={48} />, url: "https://www.linkedin.com/in/andrea-barocchi/"},
    { name: 'Instagram', icon: <img src={instagram} alt="instagram" width={48} height={48} />, url:"https://www.instagram.com/andrea.barocchi/" },
    { name: 'email', icon: <img src={email} alt="email" width={48} height={48} />, url: "mailto:andreabarocchi@gmail.com"},
  ];
  return (
    <div 
    className='sectionBox' 
    id="contacts-section"
    data-aos="slide-right"
    data-aos-offset="100"
    data-aos-delay="20"
    data-aos-duration="800"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-bottom">
      <Container className='text-start'>
        <h3>
          Contacts
        </h3>
        <hr />
      </Container>
      <Grid container justifyContent="space-evenly" className='my-5'>
        {contactData.map((contact, index) => (
          <Grid item key={index} className='text-center'>
            <a href={contact.url} target="_blank" rel="noopener noreferrer">
              {contact.icon}
            </a>
            <Typography variant="subtitle1">
              {contact.name}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Contacts