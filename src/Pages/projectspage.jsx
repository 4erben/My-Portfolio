import React, { useEffect } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'

import AOS from "aos";
import Project from '../Components/Project';
import projects from '../data/data';

export default function ProjectsPage() {
  useEffect(() => {
    AOS.init({
        // Global settings here
        duration: 2000,
        easing: 'ease-in-out',
        once: true // Animations occur only once
    });
}, []);
  return (
    <Container fluid className='py-5' > 
      <Container fluid className='my-5 py-5'>
      <Row>
        {
          projects?.map((p)=>{
            return(
            <Project 
              key={p.no}
              title={p.title}
              img={p.img}
              github={p.github}
              demo={p.demo}
              />
            )
          })
        }
        
      </Row>
      </Container>
    </Container>
  )
}
