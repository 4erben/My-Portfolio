import React, { useEffect } from 'react'
import { Row ,Col} from 'react-bootstrap'
import AOS from "aos";
import html5 from "../assets/skills/html.png";
import css from "../assets/skills/css.png";
import js from "../assets/skills/js.png";
import reactpng from "../assets/skills/react.png";
import restapi from "../assets/skills/restapi.png";
import bs from "../assets/skills/bootstrap.png";
import nodejs from "../assets/skills/nodejs.png";
import expressjs from "../assets/skills/express.png";
import mongodb from "../assets/skills/mongodb.png";
import mongoose from "../assets/skills/mongoose.png";
import ejs from "../assets/skills/ejs.png";



export default function SkillSection() {
    useEffect(() => {
        AOS.init({
            // Global settings here
            duration: 1000,
            easing: 'ease-in-out',
            once: true // Animations occur only once
        });
    }, [AOS]);
  return (
    <Row data-aos="flip-left" className='my-5'>
        <h3>My Technical Skills</h3>
        <hr/>
        <Col lg={4} md={6} className='my-2 ' >
            <div className=' skill-cap'>
            <span className='text-uppercase'>html</span>
            <span><img className='skill-img' src={html5}/></span>
            </div>
        </Col>
        <Col lg={4} md={6} className='my-2 '>
            <div className=' skill-cap'>
            <span className='text-uppercase'>css</span>
            <span><img className='skill-img' src={css}/></span>
            </div>
        </Col>
        <Col lg={4} md={6} className='my-2 '>
            <div className=' skill-cap'>
            <span className='text-uppercase'>JS</span>
            <span><img className='skill-img' src={js}/></span>
            </div>
        </Col>
        <Col lg={4} md={6} className='my-2 '>
            <div className=' skill-cap'>
            <span className='text-uppercase'>React</span>
            <span><img className='skill-img' src={reactpng}/></span>
            </div>
        </Col>
        <Col lg={4} md={6} className='my-2 '>
            <div className=' skill-cap'>
            <span className='text-uppercase'>REST API</span>
            <span><img className='skill-img' src={restapi}/></span>
            </div>
        </Col>
        <Col lg={4} md={6} className='my-2 '>
            <div className=' skill-cap'>
            <span className='text-uppercase'>nodejs</span>
            <span><img className='skill-img' src={nodejs}/></span>
            </div>
        </Col>
        <Col lg={4} md={6} className='my-2 '>
            <div className=' skill-cap'>
            <span className='text-uppercase'>expressJS</span>
            <span><img className='skill-img' src={expressjs}/></span>
            </div>
        </Col>
        <Col lg={4} md={6} className='my-2 '>
            <div className=' skill-cap'>
            <span className='text-uppercase'>mongodb</span>
            <span><img className='skill-img' src={mongodb}/></span>
            </div>
        </Col>
        <Col lg={4} md={6} className='my-2 '>
            <div className=' skill-cap'>
            <span className='text-uppercase'>mongoose</span>
            <span><img className='skill-img' src={mongoose}/></span>
            </div>
        </Col>
        <Col lg={4} md={6} className='my-2 '>
            <div className=' skill-cap'>
            <span className='text-uppercase'>ejs</span>
            <span><img className='skill-img' src={ejs}/></span>
            </div>
        </Col>

      </Row>
  )
}
