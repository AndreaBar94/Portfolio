import { Card, CardContent, Container, Grid, Link, Typography } from '@mui/material'
import React from 'react'
import boardGameBlog from '../assets/images/boardGameBlogScreen.png';
import mediumScreen from '../assets/images/mediumScreen.png';
import netflixScreen from '../assets/images/netflixScreen.png';
import spotifyScreen from '../assets/images/spotifyScreen.png';
import gestioneIncendiScreen from '../assets/images/gestioneIncendiScreen.png';
import calculatorScreen from '../assets/images/calculatorScreen.png';

const Projects = () => {
  return (
    <div 
    className='sectionBox' 
    id="projects-section"
    data-aos="slide-right"
    data-aos-offset="100"
    data-aos-delay="20"
    data-aos-duration="500"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-center">
      <Container className='text-start'>
        <h3>
          Projects
        </h3>
        <hr />
      </Container>
{/* ---------------------------------------------------------------------------------------------------- */}
      <Grid container justifyContent="space-evenly" className='mt-5 projectBox'>
        <Grid item lg={4}>
          <img src={boardGameBlog} alt="project-img" className='img-fluid'/>
          <Link href="https://github.com/AndreaBar94/CapstoneProject" underline="none">
            BoardGameBlog
          </Link>
        </Grid>
        <Grid item lg={4}>
          <Card>
            <CardContent>
              <Typography>
                This is my capstone project for Epicode's master course. It's a full-stack project, packed with React, Spring Boot, PostgreSQL, Google APIs for login and much more. Find more info in the readme file on this github repository!
              </Typography>
            </CardContent>
          </Card>

        </Grid>
      </Grid>
{/* ---------------------------------------------------------------------------------------------------- */}

      <Grid container justifyContent="space-evenly" className='my-5 projectBox'>
        <Grid item lg={4}>
          <Card>
            <CardContent>
              <Typography>
            A Spotify clone made just with vanilla JS and SASS.
                        </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item lg={4}>
        <img src={spotifyScreen} alt="project-img" className='img-fluid'/>
        <Link href="https://github.com/AndreaBar94/Build-Week-2-Spotify-Clone" underline="none">
            Spotify Clone
          </Link>
        </Grid>
      </Grid>
{/* ---------------------------------------------------------------------------------------------------- */}

      <Grid container justifyContent="space-evenly" className='my-5 projectBox'>
        <Grid item lg={4}>
          <img src={netflixScreen} alt="project-img" className='img-fluid'/>
          <Link href="https://github.com/AndreaBar94/NetflixReact" underline="none">
            Netflix Clone
          </Link>
        </Grid>
        <Grid item lg={4}>
          <Card>
            <CardContent>
              <Typography>
          My first project in React, this particular one was a refactor from a JS project.
                        </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
{/* ---------------------------------------------------------------------------------------------------- */}

      <Grid container justifyContent="space-evenly" className='my-5 projectBox'>
        <Grid item lg={4}>
          <Card>
            <CardContent>
              <Typography>
            A clone made just with HTML and CSS, it was a fun project to enhance my CSS skills. Some basics JS touches for the hero section.
                        </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item lg={4}>
        <img src={mediumScreen} alt="project-img" className='img-fluid'/>
        <Link href="https://github.com/AndreaBar94/UNIT2-S1-D5-Progetto" underline="none">
            Medium Clone
          </Link>
        </Grid>
      </Grid>
{/* ---------------------------------------------------------------------------------------------------- */}

<Grid container justifyContent="space-evenly" className='my-5 projectBox'>
        <Grid item lg={4}>
          <img src={gestioneIncendiScreen} alt="project-img" className='img-fluid'/>
          <Link href="https://github.com/AndreaBar94/U4-W6-D5" underline="none">
            Fire Detection System
          </Link>
        </Grid>
        <Grid item lg={4}>
          <Card>
            <CardContent>
              <Typography>
            Some practice in Spring Boot for Java Design Patterns.
                        </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
{/* ---------------------------------------------------------------------------------------------------- */}

<Grid container justifyContent="space-evenly" className='my-5 projectBox'>
        <Grid item lg={4}>
          <Card>
            <CardContent>
              <Typography>
            My first project in JavaScript! Yes, i know, it has 'eval' method inside, but i was a newbie and so proud of my first project, so... enjoy!
                        </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item lg={4}>
        <img src={calculatorScreen} alt="project-img" className='img-fluid'/>
        <Link href="https://github.com/AndreaBar94/UNIT2-S1-D5-Progetto" underline="none">
            Calculator
          </Link>
        </Grid>
      </Grid>
    </div>
  );
}

export default Projects