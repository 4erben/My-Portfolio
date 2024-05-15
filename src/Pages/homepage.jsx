import React, { useEffect } from 'react';
import Writer from "../Components/Typewriter";
import homemain from "../assets/images/home-main.svg"
import { Col, Container, Row } from 'react-bootstrap';
import AOS from "aos";





export default function HomePage() {
  const whatsappNumber = "01279828369";
  const gmailAddress = "mahmoud.n.elsherbeny@gmail.com";
  useEffect(() => {
    AOS.init({
        // Global settings here
        duration: 1000,
        easing: 'ease-in-out',
        once: true // Animations occur only once
    });
}, []);
  return (
    <Container fluid className="text-light py-5">
      <Container className="py-5 ">
      <Row className="my-5  mx-auto justify-content-center " data-aos="fade-up"> 
        <Col lg={6} md={12} className="d-flex flex-column text-center justify-content-center">
      <Row>
      <Col md={12} lg={2} className="d-flex flex-lg-column justify-content-center">
            <a href="https://github.com/4erben" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-github fa-2x mx-3 my-3 text-light scale"></i></a>
            <a href="https://www.linkedin.com/in/4erben/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-linkedin mx-3 my-3 fa-2x text-light scale"></i></a>
            <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-whatsapp mx-3 my-3 fa-2x text-light scale"></i></a>
            <a href={`mailto:${gmailAddress}`} target="_blank" rel="noopener noreferrer"><i className="fa-solid fa-envelope mx-3 my-3 fa-2x text-light scale"></i></a>
      </Col>
      <Col md={12} lg={10} className='align-items-center justify-content-center d-flex flex-column'>
        <h1>
            Hi There!
            <span className="wave" role="img" aria-labelledby="wave">
              👋🏻
            </span>
          </h1>
          <h1>
            I'm 
            <strong className="text-purple"> Mahmoud Elsherbeny</strong>
          </h1>
          <div className="writer">
          <Writer />
          </div>
          </Col>
          </Row>
        </Col>
        <Col lg={6} md={12}>
        <img 
          className="img-fluid animated"
          src={homemain}
          alt='home'
          />
      </Col>
      </Row>
      </Container>
    </Container>
  )
}