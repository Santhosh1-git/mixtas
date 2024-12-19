import React from 'react'
import Header_for_all from '../Components/Header_for_all'
import Endbar from './Endbar'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../assets/Favorite.css'
// images
import imgs from  '../shop_images/all/1.jpg'
function Favorit() {
  return (
    <>
      <Header_for_all/>
      <br />
      <div className='fav_head'>
      <Link to={'/HOME'}>HOME</Link><span> / Wishlist</span>
      <h4>Wishlist</h4>
      </div>
      <Container>
        <Row>
        <Col lg={6}>
            <div id='cont_div' >
              <img src={imgs} alt="not found" />
            </div>
        </Col>
        <Col lg={4}>
        <div id='content' >
        <h5>adidas X Pop Beckenbauer Track Jacket</h5>
        </div>
        </Col>
        <Col lg={1} >
        <div id='content' >
        <p>Jackets</p>
        </div>
        </Col>
        <Col lg={1  } >
        <div id='content' >
        <p>$120.00</p>
        </div>
        </Col>
        
           <Col>
           <br />
           <i class="fa-solid fa-location-dot"></i>
           <i class="fa-solid fa-phone"></i>
           <i class="fa-solid fa-envelope"></i>
           <i class="fa-solid fa-inbox"></i>
           
           </Col>   

        </Row>
      </Container>
      <br />
      <br />
      <br />
      <br />
      <br />
      <Endbar/>
    </>
  )
}

export default Favorit
