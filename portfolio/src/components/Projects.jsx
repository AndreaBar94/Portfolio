import { Grid, Link, TextField } from '@mui/material'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import boardGameBlog from '../assets/images/boardGameBlogScreen.png';
import mediumScreen from '../assets/images/mediumScreen.png';
import netflixScreen from '../assets/images/netflixScreen.png';
import spotifyScreen from '../assets/images/spotifyScreen.png';

const Projects = () => {
  return (
    <Container className='sectionBox'>
      <Container className='text-start'>
        <h3>
          Projects
        </h3>
        <hr />
      </Container>
{/* ---------------------------------------------------------------------------------------------------- */}
      <Grid container spacing={3} justifyContent="space-evenly">
        <Grid item lg={4}>
          <img src={boardGameBlog} alt="project-img" className='img-fluid'/>
          <Link href="https://github.com/AndreaBar94/CapstoneProject" underline="none">
            BoardGameBlog
          </Link>
        </Grid>
        <Grid item>
          Descrizione BoardGameBlog
        </Grid>
      </Grid>
{/* ---------------------------------------------------------------------------------------------------- */}

      <Grid container spacing={3} justifyContent="space-evenly" className='my-2'>
        <Grid item>
          Descrizione Spotify Clone
        </Grid>
        <Grid item lg={4}>
        <img src={spotifyScreen} alt="project-img" className='img-fluid'/>
        <Link href="https://github.com/AndreaBar94/Build-Week-2-Spotify-Clone" underline="none">
            Spotify Clone
          </Link>
        </Grid>
      </Grid>
{/* ---------------------------------------------------------------------------------------------------- */}

      <Grid container spacing={3} justifyContent="space-evenly" className='my-2'>
        <Grid item lg={4}>
          <img src={netflixScreen} alt="project-img" className='img-fluid'/>
          <Link href="https://github.com/AndreaBar94/CapstoneProject" underline="none">
            NetflixClone
          </Link>
        </Grid>
        <Grid item>
          Descrizione NetflixClone
        </Grid>
      </Grid>
{/* ---------------------------------------------------------------------------------------------------- */}

      <Grid container spacing={3} justifyContent="space-evenly" className='my-2'>
        <Grid item>
          Descrizione Medium Clone
        </Grid>
        <Grid item lg={4}>
        <img src={mediumScreen} alt="project-img" className='img-fluid'/>
        <Link href="https://github.com/AndreaBar94/Build-Week-2-Spotify-Clone" underline="none">
            Medium Clone
          </Link>
        </Grid>
      </Grid>

      {/* Aggiungi altri progetti qui */}
    </Container>
  );
}

export default Projects