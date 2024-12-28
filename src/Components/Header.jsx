import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { page } from './Linkpages'
import { Container, Row ,Col } from 'react-bootstrap'
import { Checkbox } from '@mui/material'
import '../assets/Header.css'
import {FormControlLabel} from '@mui/material'
function Header() {
  const [nav2,setNav2]=useState("none")  

    const link1=page.link1
    const link2=page.link2
    const link3=page.link3
    const link4=page.link4
    const link5=page.link5
  return (
    <>
    <Container fluid className='head-to-container'>
      <Row className='rwo_div' >
       <Col lg={9} md={9}>  
        <div className='header'>
        <h5>Mixtas</h5>
        </div>
        </Col>
        <Col lg={3} md={3}>
        <div id='icon_div' >
          {/* search */}
<i class="fa-solid fa-magnifying-glass  "  id='search' type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop" ></i>

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
{/* log in*/}
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
<Link to={'/favorite'}>
<i class="fa-regular fa-heart heart none-sm "></i>
</Link>

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
       
        <div id='sticky'>
          <center>
        <Link to={'/'+link1} > <a> {link1} </a></Link>
        <Link to={'/'+link2} ><a> {link2} </a> </Link>
        <Link to={'/'+link3} ><a> {link3} </a></Link>
        <Link to={'/'+link4} ><a> {link4} </a></Link>
        <Link to={'/'+link5} ><a> {link5} </a></Link>
        </center>
        </div> 

        
{/* header 2 */}

<ul class="nav nav-pills nav-fill ">
  <li class="nav-item">
  <i class="fa-solid fa-bars bars-head1 " onClick={(()=>{setNav2(`flex`)})}  ></i>
      </li>
  <li class="nav-item">
  <center>
  <h4 id='mixtas3'>Mixtas</h4>  
</center> 
  </li>
  <li class="nav-item" >
  <h4 id='mixtas2' >Mixtas</h4>  
  <center id='link_div' >
        <Link to={'/'+link1} > <a> {link1} </a> </Link>
        <Link to={'/'+link2} ><a> {link2} </a> </Link>
        <Link to={'/'+link3} ><a> {link3} </a></Link>
        <Link to={'/'+link4} ><a> {link4} </a></Link>
        <Link to={'/'+link5} ><a> {link5} </a></Link>
        </center>
  </li>
  <li class="nav-item">
  </li>
  <li class="nav-item">
  <div className='header'>   
    {/*user  */}
<i  class="fa-regular fa-user" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight_head" aria-controls="offcanvasRight" ></i>
<div class="offcanvas offcanvas-end " tabindex="-1" id="offcanvasRight_head" aria-labelledby="offcanvasRightLabel">
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

{/* search */}
<i class="fa-solid fa-magnifying-glass  search_icon_1 "  type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop_head" aria-controls="offcanvasTop" ></i>

<div class="offcanvas offcanvas-top" tabindex="-1" id="offcanvasTop_head" aria-labelledby="offcanvasTopLabel">
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

{/* heart */}
   <i class="fa-regular fa-heart  sm_heart"></i>
   {/* shopping cart */}
<i class="fa-solid fa-bag-shopping" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight1_head" aria-controls="offcanvasRight"></i>
 <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight1_head" aria-labelledby="offcanvasRightLabel">
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
  </li>
</ul>




<nav id='slider_2' style={{display:`${nav2}`}}>
    <ul id='nav_2'>
<i class="fa-solid fa-xmark dismis_nav" onClick={(()=>{setNav2(`none`)})}></i>
<li> <Link to={'/'+link1} > <i class="fa-solid fa-house"></i>  <a>  {link1} </a></Link></li>

<li><Link to={'/'+link2} > <i class="fa-solid fa-cart-shopping"></i> <a>  {link2} </a> </Link></li>
<li><Link to={'/'+link3} ><i class="fa-solid fa-clipboard"></i> <a>  {link3} </a></Link></li>
<li><Link to={'/'+link4} > <i class="fa-solid fa-user"></i> <a>   {link4} </a></Link></li>
<li><Link to={'/'+link5} > <i class="fa-solid fa-phone"></i> <a>   {link5} </a></Link></li>
  </ul>
</nav>
  

</>

  )
}

export default Header
