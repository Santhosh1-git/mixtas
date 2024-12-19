import React from 'react'
import { Link } from 'react-router-dom'
import { page } from './Linkpages'
import  '../assets/Header_for_all.css'
import { Container,Row,Col } from 'react-bootstrap'
import { Checkbox } from '@mui/material'
import {FormControlLabel} from '@mui/material'
function Header_for_all() {
    const link1=page.link1
    const link2=page.link2
    const link3=page.link3
    const link4=page.link4
    const link5=page.link5
  return (
    <>
    <Container fluid  >
        <Container className='uppercontainer' >
    <Row>
        <Col className='ptag' lg={10} md={8} >
            <p>Free shipping on US orders $100+ & Free exchanges</p>
        </Col>
        <Col  className='spntag' lg={2} md={4} >
            <span>English   <i class="fa fa-chevron-down"></i> </span><span>USD <i class="fa fa-chevron-down"></i></span>
        </Col>
    </Row>
    </Container>
    <Row>
    <hr className='hr'/>
    </Row>  
    </Container>
    
     <Container fluid id='sticky1' >
        <Container>
        <Row> 
            <Col lg={2} md={6}>
            <h4>Mixtas</h4>
            </Col>
            <Col lg={7}> 
        <center id='link_div' >
        <Link to={'/'+link1} > <a> {link1} </a> </Link>
        <Link to={'/'+link2} ><a> {link2} </a> </Link>
        <Link to={'/'+link3} ><a> {link3} </a></Link>
        <Link to={'/'+link4} ><a> {link4} </a></Link>
        <Link to={'/'+link5} ><a> {link5} </a></Link>
        </center>
            </Col>
            <Col  lg={3} md={6} >
        <div className='header'>    
<i  class="fa-regular fa-user" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" ></i>
<div class="offcanvas offcanvas-end holediv " tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
<div class="offcanvas-header">
<h5 id="offcanvasRightLabel"  className='headtag'  >log in</h5>
<button type="button" class="btn-close text-reset dismis_2 " data-bs-dismiss="offcanvas" aria-label="Close"></button>
</div>
<div class="offcanvas-body">
<form action="#">
  <input type="text" placeholder='username or email address' className='int_all' /><br />
  <input type="password" placeholder='password' className='int_all' /><br />
    <tr>
    <td>
    <FormControlLabel required control={<Checkbox />} label=" Remember me" />
    </td>
  </tr>

  <button className='submit_btn' >log in</button>
  <p id='ptag'>Lost your password?</p>
  <center> <span  className='text-secondary' id='register' >Not a member?
  <span id='spn_2' >Register</span></span>
  </center>
 
</form>
  </div> 
</div>
<i class="fa-solid fa-magnifying-glass  search_icon_1 "  type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop" ></i>

<div class="offcanvas offcanvas-top" tabindex="-1" id="offcanvasTop" aria-labelledby="offcanvasTopLabel">
  <div class="offcanvas-header">
    <h5 id="offcanvasTopLabel">
    </h5>
    <button type="button" class="btn-close text-reset dismis_1 " data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <center>
  <input type="text"  id='search_int'  placeholder='Product Search'/> <i className='fa-solid fa-magnifying-glass search_i ' ></i>
  </center>
  </div>
</div>
    <i class="fa-regular fa-heart"></i>
 <i class="fa-solid fa-bag-shopping" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight1" aria-controls="offcanvasRight"></i>
  <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight1" aria-labelledby="offcanvasRightLabel">
  <div class="offcanvas-header">
    <h5 id="offcanvasRightLabel">Shopping Cart</h5>
    <button type="button" class="btn-close text-reset dissmis_3 " data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">  
    <center>
      <div id='last_icon' >
      <i class="fa-solid fa-bag-shopping"  ></i>
    <p>No products in the cart.</p>
    </div>
    </center>
  </div>
</div>
</div>


        </Col>
            </Row>
            </Container>
            </Container>        

    </>
  )
}

export default Header_for_all
