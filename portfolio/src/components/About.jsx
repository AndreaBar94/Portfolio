import React from 'react'
import profileImg from '../assets/images/profileImg.jpeg';
import { Card, CardContent, Container, Grid, Typography } from '@mui/material';


const About = () => {
  return (
    <Container 
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
        <Grid item lg={7} className='d-flex align-items-center justify-content-center'>
          <Card>
            <CardContent>
              <Typography fontSize={25}>
                It's me, Andrea!
                <ul className='text-start my-3'>
                  <li>Web Developer</li>
                  <li>Epicoder</li>
                  <li>Passionated in games</li>
                  <li>Never Stop Learner</li>
                </ul>
              </Typography>
            </CardContent>
          </Card>
            
        </Grid>
        <Grid item lg={4}>
          <img src={profileImg} alt="profile-img" className='img-fluid profileImage'/>
        </Grid>
      </Grid>
    </Container>
  )
}

export default About