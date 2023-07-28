import React from 'react'
import profileImg from '../assets/images/profileImg.jpeg';
import { Container, Grid, Typography } from '@mui/material';

const About = () => {
  return (
    <div
    className='sectionBox' 
    id="about-section" 
    data-aos="slide-right"
    data-aos-offset="100"
    data-aos-delay="10"
    data-aos-duration="500"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-center">
      <Container className='text-start'>
        <h3>
          About
        </h3>
        <hr />
      </Container>
      <Grid container spacing={3} marginTop={3} justifyContent="space-evenly">
        <Grid item xs={12} lg={7} className='d-md-flex align-items-center justify-content-center'>
              <Typography>
                  <p className='typing-animation aboutMe2'>It's me, Andrea!</p>
                  <p className='typing-animation aboutMe1'>Web Developer</p>
                  <p className='typing-animation aboutMe2'>Passionated in games, music and sports;</p>
                  <p className='typing-animation aboutMe2'>Never Stop Learner!</p>
                  <p className='typing-animation aboutMe3'>Based in Rome, Italy.</p>
              </Typography>
        </Grid>
        <Grid item xs={12} lg={4} >
          <img src={profileImg} alt="profile-img" className='img-fluid profileImage'/>
          <svg
            className='element'
            width='300' // Larghezza dell'SVG in pixel
            height='auto'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 100 100'
          >
            <circle cx='50' cy='50' r='50' fill='blueviolet' />
          </svg>
        </Grid>
      </Grid>
    </div>
  )
}

export default About