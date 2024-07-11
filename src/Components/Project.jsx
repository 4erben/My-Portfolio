import React from 'react'
import { Card, Col } from 'react-bootstrap'

export default function Project({title,img,github,demo}) {
  return (
    <Col lg={4} md={6} data-aos="flip-right">
        <Card className=' bg-trans scale-card'>
          <Card.Img variant="top" src={img}/>
          <Card.Body className='text-center'>
          <Card.Title className='text-purple fw-semibold'>{title}</Card.Title>
          {github &&  <a className='btn btn-outline-warning mx-2' href={`${github}`} target='_blank'><i className="fa-brands fa-github"></i></a>}
          {demo && <a className='btn btn-outline-warning mx-2' href={`${demo}`} target='_blank'><i className="fa-solid fa-arrow-up-right-from-square"></i></a> }
        </Card.Body>
        </Card>
        </Col>
  )
}
