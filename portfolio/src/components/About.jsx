import React from 'react'
import {Container} from 'react-bootstrap'
import profileImg from '../assets/images/profileImg.jpeg';
import { Card, CardContent, Grid, Typography } from '@mui/material';


const About = () => {
  return (
    <Container className='sectionBox'>
      <Container className='text-start'>
        <h3 >
          About
        </h3>
        <hr />
      </Container>
      <Grid container spacing={3} justifyContent="space-evenly">
        <Grid item className='d-flex align-items-center justify-content-center'>
          <Card>
            <CardContent>
              <Typography fontSize={30}>
                It's me, Andrea!
              </Typography>
            </CardContent>
          </Card>
            
        </Grid>
        <Grid item>
          <img src={profileImg} alt="profile-img" className='img-fluid profileImage'/>
        </Grid>
      </Grid>
    </Container>
  )
}

export default About