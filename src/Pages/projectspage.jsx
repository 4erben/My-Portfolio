import React, { useEffect } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import ecommerce from "../assets/projects/e-commerce.png";
import resturant from "../assets/projects/resturant.png";
import school from "../assets/projects/school-api.png";
import clinic from "../assets/projects/theclinic.jpg";
import alerts from "../assets/projects/Alerts.png";
import AOS from "aos";

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
        <Col lg={4} md={6} data-aos="flip-right">
        <Card className=' bg-trans scale-card'>
          <Card.Img variant="top" src={ecommerce}/>
          <Card.Body className='text-center'>
          <Card.Title className='text-purple fw-semibold'>E-Commerce App</Card.Title>
          <a className='btn btn-outline-warning mx-2' href='https://github.com/4erben/FullStack-e-commerce' target='_blank'><i className="fa-brands fa-github"></i></a>
          <a className='btn btn-outline-warning mx-2' href='https://github.com/4erben/FullStack-e-commerce' target='_blank'><i className="fa-solid fa-arrow-up-right-from-square"></i></a>
        </Card.Body>
        </Card>
        </Col>
        <Col lg={4} md={6} data-aos="flip-right">
        <Card className=' bg-trans scale-card'>
          <Card.Img variant="top" src={resturant}/>
          <Card.Body className='text-center'>
          <Card.Title className='text-purple fw-semibold'>Sizzle Resturant Website</Card.Title>
          <a className='btn btn-outline-warning mx-2' href='https://github.com/4erben/Sizzle-Resturant' target='_blank'><i className="fa-brands fa-github"></i></a>
          <a className='btn btn-outline-warning mx-2' href='https://sizzleresturant.netlify.app/' target='_blank'><i className="fa-solid fa-arrow-up-right-from-square"></i></a>
        </Card.Body>
        </Card>
        </Col>
        <Col lg={4} md={6} data-aos="flip-right">
        <Card className=' bg-trans scale-card'>
          <Card.Img variant="top" src={school}/>
          <Card.Body className='text-center'>
          <Card.Title className='text-purple fw-semibold'>School API</Card.Title>
          <a className='btn btn-outline-warning mx-2' href='https://github.com/4erben/School-Api' target='_blank'><i className="fa-brands fa-github"></i></a>
          <a className='btn btn-outline-warning mx-2' href='https://school-api-5wjw.onrender.com/api-docs/' target='_blank'><i className="fa-solid fa-arrow-up-right-from-square"></i></a>
        </Card.Body>
        </Card>
        </Col>
        <Col lg={4} md={6} data-aos="flip-right">
        <Card className=' bg-trans scale-card'>
          <Card.Img variant="top" src={clinic}/>
          <Card.Body className='text-center'>
          <Card.Title className='text-purple fw-semibold'>The Clinic App</Card.Title>
          <a className='btn btn-outline-warning mx-2' href='https://github.com/4erben/The-Clinic-' target='_blank'><i className="fa-brands fa-github"></i></a>
          <a className='btn btn-outline-warning mx-2' href='https://theclinic.netlify.app/' target='_blank'><i className="fa-solid fa-arrow-up-right-from-square"></i></a>
        </Card.Body>
        </Card>
        </Col>
        <Col lg={4} md={6} data-aos="flip-right">
        <Card className=' bg-trans scale-card'>
          <Card.Img variant="top" src={alerts}/>
          <Card.Body className='text-center'>
          <Card.Title className='text-purple fw-semibold'>Alerts App</Card.Title>
          <a className='btn btn-outline-warning mx-2' href='https://github.com/4erben/geek-project' target='_blank'><i className="fa-brands fa-github"></i></a>
          <a className='btn btn-outline-warning mx-2' href='https://geekalertsapp.netlify.app/' target='_blank'><i className="fa-solid fa-arrow-up-right-from-square"></i></a>
        </Card.Body>
        </Card>
        </Col>
      </Row>
      </Container>
    </Container>
  )
}
