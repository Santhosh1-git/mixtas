import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import '../assets/Endbar.css'

import img1 from '../images/endbar/amazon.svg'

function Endbar() {
  return (
    <>
<Container fluid className='end_bar'  >
    <Container className='mb-5' >
      <Row>
        <Col lg='3' md={12} >
        <div id='content_1' >
          <h4>Mixtas</h4>
          <p> Whether you're a trendsetter, a minimalist, or an adventurer at heart, Mixtas has something for everyone. Our diverse range of styles caters to various personas.</p>
          <i class="fa-brands fa-facebook-f"></i><i class="fa-brands fa-x-twitter"></i><i class="fa-brands fa-instagram"></i><i class="fa-brands fa-meta"></i>
          </div>
        </Col>
        <Col lg='2'md={4} >
        <div className='content_2_3_4'>
          <h4>About Us</h4>
          <p>Our Story</p>
          <p>Mission & Values</p>
          <p>Meet the Team</p>
          <p>Sustainability Efforts</p>
          <p>Brand Partnerships</p>
          <p>Influencer Collaborations</p>
          </div>
        </Col>
        <Col lg='2' md={4} >
        <div className='content_2_3_4'>
          <h4>Accessibility</h4>
          <p>Accessibility Statement</p>
          <p>Site Map</p>
          <p>Web Accessibility Options</p>
          <p>ADA Compliance</p>
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
          </div>
        </Col>

        <Col lg='2' md={4} > 
        <div className='content_2_3_4'>
          <h4>Join Our Community</h4>
            <p>VIP Membership</p>
              <p>Loyalty Program</p>
              <p>Customer Reviews</p>
              <p>Style Forums</p>     
              <p>Job Openings</p>  
              <p>Culture and Values</p>
          </div>
         </Col>
        <Col lg='3' md={12} >
        <div id='content_5' >
        <h4>Let’s get in touch</h4>
        <p>Sign up for our newsletter and receive 10% off your</p>
        <input type="text"  placeholder='Enter your email' /><i class="fa-solid fa-arrow-right"></i>
        </div>
        </Col>
        
      </Row>
    </Container>
    
    <Row>
    <hr className='hrline'/>
    </Row>
    <Container>
    <Row>
        <Col lg='6' id='copy' md={12} >
            <p>&#169;2024 Mixtas All rights reserved. Designed by Novaworks</p>
        </Col>
        <Col  lg='6' md={12}  >
        <div className='ads_img' >
          <img src={img1} alt="not found" />
          </div>
        </Col>
    </Row>
      </Container>
    </Container>
    </>
  )
}

export default Endbar
