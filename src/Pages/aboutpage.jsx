import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { Button, Col, Container, Row } from 'react-bootstrap'
import AOS from "aos";
import SkillSection from '../Components/SkillSection';

export default function AboutPage() {
  useEffect(() => {
    AOS.init({
        // Global settings here
        duration: 1000,
        easing: 'ease-in-out',
        once: true // Animations occur only once
    });
}, []);
  return (
    <Container className='py-5 overflow-x-hidden' >
      <Container className="py-5 my-5 text-start ">
        {/* About me */}
      <Row className='justify-content-center my-2' data-aos="fade-down">
        <Col lg={10} className="">
        <span className='text-blue fw-bold  fs-1 '>About Me</span>
        <p className='fs-5 my-2'>
        Hey there! I'm <span className='fw-bold fs-3 text-purple'>Mahmoud</span>, 
        a passionate web developer with expertise in the MERN stack. 
        I thrive on turning ideas into reality through clean, 
        efficient,and user-friendly web applications.
        I've honed my skills in front-end and back-end development, 
        enabling me to create seamless digital experiences.
        </p>
        <Link 
        className='btn btn-warning fw-semibold'
        to="/projectspage"
        >Check My Projects
        </Link>
        </Col>
      </Row>
      <hr/>
      {/* My Journey */}
      <Row className='justify-content-center my-2' data-aos="fade-down-right">
        <Col lg={10} className="">
        <span className='text-blue fw-bold  fs-1 '>My Journey</span>
        <p className='fs-5 my-2'>
        My journey into web development began with a spark of curiosity and a desire to create impactful solutions. 
        Over the years, I've dived deep into the world of coding, constantly learning and adapting to the ever-evolving technologies. 
        From mastering HTML, CSS, and JavaScript to delving into the complexities of React.js, Node.js, Express.js, and MongoDB, 
        I've cultivated a versatile skill set that allows me to tackle diverse projects with confidence.
        </p>
        </Col>
      </Row>
      <hr/>
      {/* What I Do Row */}
      <Row className='justify-content-center my-2' data-aos="fade-down-left">
      <Col lg={10} className="">
        <span className='text-blue fw-bold  fs-1'>What I Do</span>
        <p className='fs-5 my-2'>
        As a MERN stack developer, I specialize in crafting dynamic and responsive web applications tailored to meet the unique needs of clients and users.
       Whether it's building robust back-end systems with Node.js and Express.js or creating intuitive front-end interfaces using React.js,
       I'm dedicated to delivering solutions that not only meet but exceed expectations.
        </p>
        </Col>
      </Row>
      <SkillSection/>
      </Container>
    </Container>
  )
}
