import { Grid } from '@mui/material'
import React from 'react'
import { Container } from 'react-bootstrap'

const Skills = () => {
  return (
    <>
     <Container className='sectionBox'>
      <Container className='text-start'>
        <h3 >
          Skills
        </h3>
        <hr />
      </Container>
      {/* <Grid container spacing={3} justifyContent="space-evenly">
        <Grid item >progetto 1</Grid>
        <Grid item >descrizione progetto 1</Grid>
      </Grid> */}
      <ul>
        <li>skill 1</li>
        <li>skill 2</li>
        <li>skill 3</li>
        <li>skill 4</li>
        <li>skill 5</li>
        <li>skill 6</li>
        <li>skill 7</li>
      </ul>
    </Container>
    </>
  )
}

export default Skills