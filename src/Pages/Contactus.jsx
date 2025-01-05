import React from 'react'
import Header_for_all from '../Components/Header_for_all'
import '../assets/Contact.css'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { TextField } from '@mui/material'
import Endbar from '../Components/Endbar'
function Contactus() {
  return (
    <>
        <Header_for_all/>
        <br />
        <br />
        <br />
        <Container>
          <Row>
            <Col lg={12}>
              <div id='contact_head'>
                <center>
                <h5>Contact Us</h5>
                <Link to={'/HOME'}><span> HOME</span></Link><span className='text-secondary' > /Contact us</span>
                </center>
              </div>
            </Col>
          </Row>
        </Container>
        <br />
        <br />
        <br />
        <br />
        <br /> 
        <br /> 
        <Container>
          <Row>
            <Col lg='3' md={3} >  
            <div className='map' >
            <i className="fa-solid fa-location-dot"></i>
            <h5>Store Address</h5>
            <p>PO Box 16122 Collins Street</p>
            <p>West Victoria 8007 Australia</p>
            </div>
            </Col>
            <Col lg='3' md={3} >
            <div className='map' >
            <i className="fa-solid fa-phone"></i>
            <h5>Call Info</h5>
            <p>Open a chat or give us call at</p>
            <p>91+98427641</p>
            </div>
            </Col>
            <Col lg='3' md={3} >
            <div className='map' >
            <i className="fa-solid fa-envelope"></i>
            <h5>Email Support</h5>
            <p>Sent mail to</p>
            <p><a href='mailto:santhoshppn92@gmail.com' className='text-secondary' >santhoshppn92@gmail.com </a></p>
            </div>
            </Col>
            <Col lg='3' md={3} >
            <div className='map' >
            <i className="fa-solid fa-inbox"></i>
            <h5>Live Support</h5>
            <p>Live chat service</p>
            <p>https://www.livechat.com</p>
            </div>
            </Col>
          </Row>
        </Container>
        <br />
        <br />
        <br />
        <br />
        <Container>
          <Row>
            <Col lg={6}>
              <div id='given_adress'>
                <h5>get in touch</h5>
                <TextField className='textfi'  variant="standard" label="Your Name" /><br />
                <TextField className='textfi' variant="standard" label="Your email" /><br />
                <TextField className='textfi'  variant="standard" label="Subject" /><br />
                <TextField
          id="standard-multiline-static"
          label="your message"
          multiline
          variant="standard" className='textarea'  />
          <br />
          <br />
          <br />
        <button>sent message</button>
              </div>
            </Col>
            <Col lg={6}>
            <div id='ustate' >
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1334099.544467455!2d-106.0613426679878!3d39.60553657515404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54eab584e432360b%3A0x1c3bb99243deb742!2sUnited%20States!5e1!3m2!1sen!2sin!4v1733460093434!5m2!1sen!2sin" width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            </Col>
          </Row>
        </Container>
          <br />
          <br />
          <br />
          <Endbar/>
    </>
  )
}

export default Contactus
