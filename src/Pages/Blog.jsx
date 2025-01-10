import React from 'react'
import Header_for_all from '../Components/Header_for_all'
import '../assets/Blog.css'
import { Col,Container,Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { TextField } from '@mui/material'
import Endbar from '../Components/Endbar' 

// images
import img1 from '../images/Blog_page/1.jpg'
import img2 from '../images/Blog_page/2.jpg'
import img3 from '../images/Blog_page/3.jpg'
import img4 from '../images/Blog_page/4.jpg'
import img5 from '../images/Blog_page/5.jpg'
import img6 from '../images/Blog_page/6.jpg'
function Blog() {
  return (
    <>
    {/* header start */}
     <Header_for_all/>
        <br/>
      <Container>
        <Row>
          <Col>
          <center className='Blog_header' >
            <h3>Blog</h3>
            <p><Link to={'/HOME' } >Home</Link><span className='text-secondary'> / Blog </span></p>
            </center>
          </Col>
        </Row>
      </Container>
      <br />
      <br />
      <br />
      <Container>
        <Row>
          <Col lg={4} md={12} >
             <div id='blog_details' >
         <TextField variant="outlined" color="dark" id='int1'  label="Search" type="email" /><i className='fa fa-search search_icon ' ></i>
          <br />    
          <br />    
          <br />    
           <div id='boxes' >
            
         <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        <h5>Categories</h5>
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body body_box1 ">
        <ul>
        <li>Men Clothing <span className='acrot_1s' >3</span> </li>
        <li>News <span className='acrot_1s' >6</span> </li>
        <li>Women Clothing <span  className='acrot_1s' >3</span></li>
        </ul>
      </div>
    </div>
  </div>
 
</div>
<br />
<br />

<div className="accordion" id="accordionExample">
    <div id="collapsetwo" className="accordion-collapse collapse show" aria-labelledby="headingtwo" data-bs-parent="#accordionExample">
      <div className="accordion-body body_box2 ">
        <center>
        <p className='text-secondary' >December 2024</p>
        </center>
          <table>
            <tbody>
            <tr>
              <th>M</th>
              <th>T</th>
              <th>W</th>
              <th>T</th>
              <th>F</th>
              <th>S</th>
              <th>S</th>
            </tr>
            </tbody>
            <tbody>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>1</td>
              <td>2</td>
              <td>3</td>
            </tr>
            </tbody>
            <tbody>
            <tr>
              <td>4</td>
              <td>5</td>
              <td>6</td>
              <td>7</td>
              <td>8</td>
              <td>9</td>
              <td>10</td>
            </tr>
            </tbody>
            <tbody>
            <tr>
              <td>11</td>
              <td>12</td>
              <td>13</td>
              <td>14</td>
              <td>15</td>
              <td>16</td>
              <td>17</td>
            </tr>
            </tbody>
            <tbody>
            <tr>
              <td>18</td>
              <td>19</td>
              <td>20</td>
              <td>21</td>
              <td>22</td>
              <td>23</td>
              <td>24</td>
            </tr>
            </tbody>
            <tbody>
            <tr>
              <td>25</td>
              <td>26</td>
              <td>27</td>
              <td>28</td>
              <td>29</td>
              <td>30</td>
              <td>31</td>
            </tr>
            </tbody>
          </table>
      </div>
    </div>
  </div>
  <br />
<div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingthree">
      <button className="accordion-button" type="button"  data-bs-target="#collapsethree" aria-expanded="true" aria-controls="collapsethree">
        <h5>Archives</h5>
      </button>
    </h2>
    <div id="collapsethree" className="accordion-collapse collapse show" aria-labelledby="headingthree" data-bs-parent="#accordionExample">
      <div className="accordion-body body_box3 ">
<select className="form-select" defaultValue="option2">
    <option id='option'  value="option1" >Select month</option>
    <option id='option' value="option2" >December 2024</option>
</select>
      </div>
    </div>
  </div>
  </div>
  <br />
  <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingfour">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapsefour" aria-expanded="true" aria-controls="collapsefour">
        <h5>Recent Posts</h5>
      </button>
    </h2>
    <div id="collapsefour" className="accordion-collapse collapse show" aria-labelledby="headingfour" data-bs-parent="#accordionExample">
      <div className="accordion-body body_box4 ">
        <Container>
          <Row>
            <Col lg={4} >
            <div id='imgs' >
            <img src={img2} alt={'not fount'}/>
            </div>
            </Col>
            <Col lg={8} >
            <div id='box_4_content' >
            <p className='text-secondary' id='dec' >December 19, 2023</p>
            <p>Fashion Forward: Emerging Trends You Need to Know</p>
            </div>
            </Col>
            {/* 2 */}
            <Col lg={4} >
            <div id='imgs' >
            <img src={img1} alt={'not fount'}/>
            </div>
            </Col>
            <Col lg={8} >
            <div id='box_4_content' >
            <p className='text-secondary' id='dec' >December 19, 2023</p>
            <p>Dress to Impress: A Guide to Power Dressing success</p>
            </div>
            </Col>
            {/* 3 */}
            <Col lg={4} >
            <div id='imgs' >
            <img src={img3} alt={'not fount'}/>
            </div>
            </Col>
            <Col lg={8} >
            <div id='box_4_content' >
            <p className='text-secondary' id='dec' >December 19, 2023</p>
            <p>Unveiling Elegance: Timeless Fashion Trends for Women</p>
            </div>
            </Col>
            {/* 4 */}
            <Col lg={4} >
            <div id='imgs' >
            <img src={img4} alt={'not fount'}/>
            </div>
            </Col>
            <Col lg={8} >
            <div id='box_4_content' >
            <p className='text-secondary ' id='dec' >December 19, 2023</p>
            <p>Gentleman’s Gazette: A Guide to Timeless Men’s Fashion</p>
            </div>
            </Col>
            {/* 5 */}
            <Col lg={4} >
            <div id='imgs' >
            <img src={img5} alt={'not fount'}/>
            </div>
            </Col>
            <Col lg={8} >
            <div id='box_4_content' >
            <p className='text-secondary' id='dec' >December 19, 2023</p>
            <p>Tailored Tales: Unveiling the Latest Trends in Men’s Fashion</p>
            </div>
            </Col>
            {/* 6 */}
            <Col lg={4} >
            <div id='imgs' >
            <img src={img6} alt={'not fount'}/>
            </div>
            </Col>
            <Col lg={8} >
            <div id='box_4_content' >
            <p className='text-secondary' id='dec' >December 19, 2023</p>
            <p>small-business owners to designers, artists, and actors— </p>
            </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  </div>
  </div>
  <br />
  <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingfive">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapsefive" aria-expanded="true" aria-controls="collapsefive">
        <h5>Tags</h5>
      </button>
    </h2>
    <div id="collapsefive" className="accordion-collapse collapse show" aria-labelledby="headingfive" data-bs-parent="#accordionExample">
      <div className="accordion-body body_box5 ">
       <span className='border_tag' >clothing </span><span className='border_tag' >men</span><span className='border_tag' > posts</span>
       <br />
       <br />
       <span className='border_tag' >shopping</span><span className='border_tag' >women</span>
      </div>
    </div>
  </div>
  </div>

 </div>
 </div>

 <i className="fa-solid fa-sliders bars-head123 " data-bs-toggle="offcanvas" href="#offcanvasExample12" role="button" aria-controls="offcanvasExample"></i>
<div className="offcanvas offcanvas-start can123"  id="offcanvasExample12" aria-labelledby="offcanvasExampleLabel">
  <div className="offcanvas-header">
    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div className="offcanvas-body">             
         <TextField variant="outlined" id='int1'  label="Search" type="email" /><i className='fa fa-search search_icon ' ></i>
          <br />    
          <br />    
          <br />    
           <div id='boxes' >            
         <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        <h5>Categories</h5>
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body body_box1 ">
        <ul>
        <li>Men Clothing <span className='acrot_1s' >3</span> </li>
        <li>News <span className='acrot_1s' >6</span> </li>
        <li>Women Clothing <span  className='acrot_1s' >3</span></li>
        </ul>
      </div>
    </div>
  </div>
 
</div>
<br />
<br />

<div className="accordion" id="accordionExample">
    <div id="collapsetwo" className="accordion-collapse collapse show" aria-labelledby="headingtwo" data-bs-parent="#accordionExample">
      <div className="accordion-body body_box2 ">
        <center>
        <p className='text-secondary' >December 2024</p>
        </center>
          <table>
            <tbody>
            <tr>
              <th>M</th>
              <th>T</th>
              <th>W</th>
              <th>T</th>
              <th>F</th>
              <th>S</th>
              <th>S</th>
            </tr>
            </tbody>
            <tbody>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>1</td>
              <td>2</td>
              <td>3</td>
            </tr>
            </tbody>
            <tbody>
            <tr>
              <td>4</td>
              <td>5</td>
              <td>6</td>
              <td>7</td>
              <td>8</td>
              <td>9</td>
              <td>10</td>
            </tr>
            </tbody>
            <tbody>
            <tr>
              <td>11</td>
              <td>12</td>
              <td>13</td>
              <td>14</td>
              <td>15</td>
              <td>16</td>
              <td>17</td>
            </tr>
            </tbody>
            <tbody>
            <tr>
              <td>18</td>
              <td>19</td>
              <td>20</td>
              <td>21</td>
              <td>22</td>
              <td>23</td>
              <td>24</td>
            </tr>
            </tbody>
            <tbody>
            <tr>
              <td>25</td>
              <td>26</td>
              <td>27</td>
              <td>28</td>
              <td>29</td>
              <td>30</td>
              <td>31</td>
            </tr>
            </tbody>
          </table>
      </div>
    </div>
  </div>
  <br />
<div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingthree">
      <button className="accordion-button" type="button"  data-bs-target="#collapsethree" aria-expanded="true" aria-controls="collapsethree">
        <h5>Archives</h5>
      </button>
    </h2>
    <div id="collapsethree" className="accordion-collapse collapse show" aria-labelledby="headingthree" data-bs-parent="#accordionExample">
      <div className="accordion-body body_box3 ">
      <select className="form-select" aria-label="Default select example">
          <option selected>select month</option>
          <option value="2">december 2024</option>
</select>
      </div>
    </div>
  </div>
  </div>
  <br />
  <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingfour">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapsefour" aria-expanded="true" aria-controls="collapsefour">
        <h5>Recent Posts</h5>
      </button>
    </h2>
    <div id="collapsefour" className="accordion-collapse collapse show" aria-labelledby="headingfour" data-bs-parent="#accordionExample">
      <div className="accordion-body body_box4 ">
        <Container>
          <Row>
            <Col lg={4} >
            <div id='imgs' >
            <img src={img2} alt={'not fount'}/>
            <img src={img1} alt={'not fount'}/>
            <img src={img3} alt={'not fount'}/>
            <img src={img4} alt={'not fount'}/>
            <img src={img5} alt={'not fount'}/>
            <img src={img6} alt={'not fount'}/>
            </div>
            </Col>
            <Col lg={8}>
            <div id='box_4_content' >
            <p className='text-secondary' >December 19, 2023</p>
            <p>Fashion Forward: Emerging Trends You Need to Know</p>
            </div>
            <div id='box_4_content' >
            <p className='text-secondary' >December 19, 2023</p>
            <p>Dress to Impress: A Guide to Power Dressing success</p>
            </div>

            <div id='box_4_content' >
            <p className='text-secondary' >December 19, 2023</p>
            <p>Unveiling Elegance: Timeless Fashion Trends for Women</p>
            </div>
            <div id='box_4_content' >
            <p className='text-secondary' >December 19, 2023</p>
            <p>Gentleman’s Gazette: A Guide to Timeless Men’s Fashion</p>
            </div>
            <div id='box_4_content' >
            <p className='text-secondary' >December 19, 2023</p>
            <p>Tailored Tales: Unveiling the Latest Trends in Men’s Fashion</p>
            </div>
            <div id='box_4_content' >
            <p className='text-secondary' >December 19, 2023</p>
            <p>small-business owners to designers, artists, and actors— </p>
            </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  </div>
  </div>
  <br />
  <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingfive">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapsefive" aria-expanded="true" aria-controls="collapsefive">
        <h5>Tags</h5>
      </button>
    </h2>
    <div id="collapsefive" className="accordion-collapse collapse show" aria-labelledby="headingfive" data-bs-parent="#accordionExample">
      <div className="accordion-body body_box5 ">
       <span className='border_tag' >clothing </span><span className='border_tag' >men</span><span className='border_tag' > posts</span>
       <br />
       <br />
       <span className='border_tag' >shopping</span><span className='border_tag' >women</span>
      </div>
    </div>
  </div>
  </div>

 </div>
         
  <div className="dropdown mt-3">
    </div>
  </div>
</div>
          </Col>
          <Col lg={8} >
          <Row>
              <Col lg={6} md={6} >
              <div className='admin_img' >
                <img src={img2} alt="not found" />
                </div>
              </Col>
              <Col lg={6} md={6} >
                  <div className='admin_content' >
                    <span className='text-secondary' >By <span className='text-dark' >admin </span> December 19, 2023 </span>
                    <h5>Fashion Forward: Emerging Trends You Need to Know</h5>
                    <p className='text-secondary' >What makes a purchase “worth it”? The answer is different for everybody, so we’re asking some of the coolest, most shopping-savvy people we know—from small-business owners to designers, artists, and actors—to tell…</p>
                    <span>News, Women Clothing</span>
                    <br />
                    <br />
                     <Link to={'/Ad_min1'}> <button className='adminbtns' >About Admin</button> </Link>
                  </div>
              </Col>
              </Row>
              <br />
              <hr className='hrline' />
              <br />
              <Row>
              <Col lg={6} md={6} >
              <div className='admin_img' >
                <img src={img1} alt="not found" />
                </div>
              </Col>
              <Col lg={6} md={6} >
                  <div className='admin_content' >
                    <span className='text-secondary' >By <span className='text-dark' >admin </span> December 19, 2023 </span>
                    <h5>Dress to Impress: A Guide to Power Dressing for Success</h5>
                    <p className='text-secondary' >What makes a purchase “worth it”? The answer is different for everybody, so we’re asking some of the coolest, most shopping-savvy people we know—from small-business owners to designers, artists, and actors—to tell…</p>
                    <span>News, Women Clothing</span>
                    <br />
                     <Link to={'/Ad_min2'}> <button className='adminbtns' >about admin</button> </Link>
                  </div>
              </Col>
              </Row>
              <br />
              <hr className='hrline' />
              <br />
              <Row>
              <Col lg={6} md={6} >
              <div className='admin_img' >
                <img src={img3} alt="not found" />
                </div>
              </Col>
              <Col lg={6} md={6} >
                  <div className='admin_content' >
                    <span className='text-secondary' >By <span className='text-dark' >admin </span> December 19, 2023 </span>
                    <h5>Unveiling Elegance: Timeless Fashion Trends for Women</h5>
                    <p className='text-secondary' >What makes a purchase “worth it”? The answer is different for everybody, so we’re asking some of the coolest, most shopping-savvy people we know—from small-business owners to designers, artists, and actors—to tell…</p>
                    <span>News, Women Clothing</span>
                    <br />
                     <Link to={'/Ad_min3'}> <button className='adminbtns' >about admin</button> </Link>
                  </div>
              </Col>
              </Row>
              <br />
              <hr className='hrline' />
              <br />
              <Row>
              <Col lg={6} md={6} >
              <div className='admin_img' >
                <img src={img4} alt="not found" />
                </div>
              </Col>
              <Col lg={6} md={6} >
                  <div className='admin_content' >
                    <span className='text-secondary' >By <span className='text-dark' >admin </span> December 19, 2023 </span>
                    <h5>Gentleman’s Gazette: A Guide to Timeless Men’s Fashion</h5>
                    <p className='text-secondary' >What makes a purchase “worth it”? The answer is different for everybody, so we’re asking some of the coolest, most shopping-savvy people we know—from small-business owners to designers, artists, and actors—to tell…</p>
                    <span>News, Women Clothing</span>
                    <br />
                     <Link to={'/Ad_min4'}> <button className='adminbtns' >about admin</button> </Link>
                  </div>
              </Col>
              </Row>
              <br />
              <hr className='hrline' />
              <br />
              <Row>
              <Col lg={6} md={6} >
              <div className='admin_img' >
                <img src={img5} alt="not found" />
                </div>
              </Col>
              <Col lg={6} md={6} >
                  <div className='admin_content' >
                    <span className='text-secondary' >By <span className='text-dark' >admin </span> December 19, 2023 </span>
                    <h5>Tailored Tales: Unveiling the Latest Trends in Men’s Fashion</h5>
                    <p className='text-secondary' >What makes a purchase “worth it”? The answer is different for everybody, so we’re asking some of the coolest, most shopping-savvy people we know—from small-business owners to designers, artists, and actors—to tell…</p>
                    <span>News, Women Clothing</span>
                    <br />
                     <Link to={'/Ad_min5'}> <button className='adminbtns' >about admin</button> </Link>
                  </div>
              </Col>
              </Row>
              <br />
              <hr className='hrline' />
              <br />
              <Row>
              <Col lg={6} md={6} >
              <div className='admin_img' >
                <img src={img6} alt="not found" />
                </div>
              </Col>
              <Col lg={6} md={6} >
                  <div className='admin_content' >
                    <span className='text-secondary' >By <span className='text-dark' >admin </span> December 19, 2023 </span>
                    <h5>Menswear Maven: Fashion Finds for Every Occasion</h5>
                    <p className='text-secondary' >What makes a purchase “worth it”? The answer is different for everybody, so we’re asking some of the coolest, most shopping-savvy people we know—from small-business owners to designers, artists, and actors—to tell…</p>
                    <span>News, Women Clothing</span>
                    <br />
                    <Link to={'/Ad_min6'}> <button className='adminbtns' >about admin</button> </Link>
                  </div>
              </Col>
              </Row>
              <br />
              <hr className='hrline' />
              <br />
          </Col>
        </Row>
      </Container>
        <br />
        <br />
        <br />
        <br />
        <Endbar/>


    {/* header end */}

    </>
  )
}

export default Blog
