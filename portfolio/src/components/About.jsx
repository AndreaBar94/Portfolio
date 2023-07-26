import React from 'react'
import {Container} from 'react-bootstrap'
import profileImg from '../assets/images/profileImg.jpeg';
import { Card, CardContent, Grid, Typography } from '@mui/material';


const About = () => {
  return (
    <Container className='sectionBox' id="about-section">
      <Container className='text-start'>
        <h3 >
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