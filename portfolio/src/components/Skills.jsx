import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import react from '../assets/icons/react.svg';
import javascript from '../assets/icons/javascript.svg';
import bootstrap from '../assets/icons/bootstrap.svg';
import sass from '../assets/icons/sass.svg';
import java from '../assets/icons/java.svg';
import database from '../assets/icons/database.svg';
import material from '../assets/icons/material.svg';

const Skills = ({checked}) => {
  const skillsList = [
    { name: 'React', icon: <img src={react} alt="React" width={48} height={48} className="custom-icon"/> },
    { name: 'JavaScript', icon: <img src={javascript} alt="JavaScript" width={48} height={48} /> },
    { name: 'Bootstrap', icon: <img src={bootstrap} alt="Bootstrap" width={48} height={48} /> },
    { name: 'Sass', icon: <img src={sass} alt="Sass" width={48} height={48} /> },
    { name: 'Java', icon: <img src={java} alt="Java" width={48} height={48} /> },
    { name: 'PostgreSQL', icon: <img src={database} alt="PostgreSQL" width={48} height={48} /> },
    { name: 'Material UI', icon: <img src={material} alt="MaterialUI" width={48} height={48} /> },
  ];

  return (
    <div 
    className='sectionBox' 
    id="skills-section"
    data-aos="slide-right"
    data-aos-offset="100"
    data-aos-delay="10"
    data-aos-duration="500"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="bottom-bottom">
      <Container className='text-start'>
        <h3>
          Skills
        </h3>
        <hr />
      </Container>
      <Grid container justifyContent="space-evenly" className='my-5'>
        {skillsList.map((skill, index) => (
          <Grid item key={index} className='text-center'>
              <div>
                {skill.icon}
              </div>
              <Typography variant="h6">
                {skill.name}
              </Typography>
            
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Skills;
