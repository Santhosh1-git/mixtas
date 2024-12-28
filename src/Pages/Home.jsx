
import { Container, Row , Col, CardBody,Card } from 'react-bootstrap'
import '../assets/Home.css'
import { Link } from 'react-router-dom';
import { seller } from '../Components/Bset_seller_content';
import { arrivals } from '../Components/New_arivals_cont';
// swiper
import { Autoplay, Navigation,  } from 'swiper/modules';
import { Swiper,SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/navigation';
// swiper end
import imgblog4 from '../images/Blog_page/4.jpg'

import Endbar from '../Components/Endbar'
import Header from '../Components/Header'
  import img1 from '../images/slider/1.jpg'
  import img2 from '../images/slider/2.jpg'
  import img3 from '../images/slider/3.jpg'
  // polupar
  import img4 from '../images/popular/1.jpg'
  import img5 from '../images/popular/2.jpg'
  import img6 from '../images/popular/3.jpg'
      // best sellers
      import img7 from '../images/best seller/1.jpg' 
      import img8 from '../images/best seller/hover_1.jpg' 
      // img2
      import img9 from '../images/best seller/2.jpg'
      import img10 from '../images/best seller/hover_2.jpg' 
      // img3
      import img11 from '../images/best seller/3.jpg'
      import img12 from '../images/best seller/hover_3.jpg' 
      // img4
      import img13 from '../images/best seller/4.jpg'
      import img14 from '../images/best seller/hover_4.jpg' 
      // img5
      import img05 from '../images/best seller/5.jpg'
      import hover_05 from '../images/best seller/hover_5.jpg' 
        

    // new arraivals
      import img15 from '../images/new_arrivals/1.jpg'
      import img16 from '../images/new_arrivals/2.jpg'
      import img17 from '../images/new_arrivals/3.jpg'
      import img18 from '../images/new_arrivals/4.jpg'
     // line tow
      import img23 from '../images/new_arrivals/5.jpg'
      import img24 from '../images/new_arrivals/6.jpg'
      import img25 from '../images/new_arrivals/7.jpg'
      import img26 from '../images/new_arrivals/8.jpg'
    // new arraivals_hover
    import img19 from '../images/new_arrivals/hover_1.jpg'      
    import img20 from '../images/new_arrivals/hover_2.jpg'      
    import img21 from '../images/new_arrivals/hover_3.jpg'      
    import img22 from '../images/new_arrivals/hover_4.jpg'      
    // line two
    import img27 from '../images/new_arrivals/hover_5.jpg'      
    import img28 from '../images/new_arrivals/hover_6.jpg'      
    import img29 from '../images/new_arrivals/hover_7.jpg'      
    import img30 from '../images/new_arrivals/hover_8.jpg'   
    
    // pauplar brand
    import img31 from '../images/popular brands/1.png'
    import img32 from '../images/popular brands/2.png'
    import img33 from '../images/popular brands/3.png'
    import img34 from '../images/popular brands/4.png'
    import img35 from '../images/popular brands/5.png'
    import img36 from '../images/popular brands/6.png'
    import papularlast from '../images/popular brands/7.png'

    // blog
    import img37 from '../images/blog_/1.jpg'
    import img38 from '../images/blog_/2.jpg'
    import img39 from '../images/blog_/3.jpg'
function Home() {
  // best seller_img start
      const card_img={
        i1:[img7,img9,img11,img13,img05],
        i2:[img8,img10,img12,img14,hover_05]
      }
    function hover_img1(e){e.target.src=card_img.i1[0]}  
    function mouseout_img1(e){e.target.src=card_img.i2[0]}
    
    function hover_img2(e){e.target.src=card_img.i1[1]}  
    function mouseout_img2(e){e.target.src=card_img.i2[1]}

    function hover_img3(e){e.target.src=card_img.i1[2]}  
    function mouseout_img3(e){e.target.src=card_img.i2[2]}

    function hover_img4(e){e.target.src=card_img.i1[3]}  
    function mouseout_img4(e){e.target.src=card_img.i2[3]}

    function hover_imghov_5(e){e.target.src=card_img.i1[4]}  
    function mouseout_imghov_5(e){e.target.src=card_img.i2[4]}

      const hover={
        hov:[hover_img1,hover_img2,hover_img3,hover_img4,hover_imghov_5],
        out:[mouseout_img1,mouseout_img2,mouseout_img3,mouseout_img4,mouseout_imghov_5]
      }

  // best seller_img end
    
    // new arraivals_img strat
        const new_arrivals={
          i5:[img15,img16,img17,img18,img23,img24,img25,img26],
          i6:[img19,img20,img21,img22,img27,img28,img29,img30]
        }

        function hover_img5(e){e.target.src=new_arrivals.i5[0]}
        function mouseout_img5(e){e.target.src=new_arrivals.i6[0]}

        function hover_img6(e){e.target.src=new_arrivals.i5[1]}
        function mouseout_img6(e){e.target.src=new_arrivals.i6[1]}

        function hover_img7(e){e.target.src=new_arrivals.i5[2]}
        function mouseout_img7(e){e.target.src=new_arrivals.i6[2]}

        function hover_img8(e){e.target.src=new_arrivals.i5[3]}
        function mouseout_img8(e){e.target.src=new_arrivals.i6[3]}

             
        // line two
        const new_arrivals_line2={
          i9:[img23,img24,img25,img26],
          i10:[img27,img28,img29,img30]
        }
          function hover_img9(e){e.target.src=new_arrivals_line2.i9[0]}
          function mouseout_img9(e){e.target.src=new_arrivals_line2.i10[0]}

          function hover_img10(e){e.target.src=new_arrivals_line2.i9[1]}
          function mouseout_img10(e){e.target.src=new_arrivals_line2.i10[1]}

          function hover_img11(e){e.target.src=new_arrivals_line2.i9[2]}
          function mouseout_img11(e){e.target.src=new_arrivals_line2.i10[2]}

          function hover_img12(e){e.target.src=new_arrivals_line2.i9[3]}
          function mouseout_img12(e){e.target.src=new_arrivals_line2.i10[3]}

          // line 1 and line 2

          const hov1=[hover_img5,hover_img6,hover_img7,hover_img8,hover_img9,hover_img10,hover_img11,hover_img12]
          const out1=[mouseout_img5,mouseout_img6,mouseout_img7,mouseout_img8,mouseout_img9,mouseout_img10,mouseout_img11,mouseout_img12]

    // new arraivals_img end
    

  return (
    <>
    <Header/>
    {/* ------------------------ */}
       {/* home carousel start */}
    {/* ------------------------ */}
          
        <div id="carouselExampleCaptions" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button"  data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button"   data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button"   data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner Slider_img">
    <div class="carousel-item active" id='carousl-img' >
    <img src={img1} alt="slider-one"/> 
    <div class="carousel-caption carousel_content_1 ">
    <p>chic charisma</p>
    <h5>effortless</h5>
    <h5> glamour for</h5> 
    <h5> every occasion </h5>
    <Link to={'/SHOP'} >  <button className='btn btn-dark btn-outline-light' >Shop Now </button></Link>
   </div>
    </div>
    <div class="carousel-item" id='carousl-img'  >
    <img src={img2} alt="slider-two"/>
    <div class="carousel-caption carousel_content_1 ">
    <p>chic reverie</p>
    <h5>fashioning</h5>
    <h5> dreams into</h5>
    <h5> reality</h5>
    <Link to={'/SHOP'} ><button className='btn btn-dark btn-outline-light' >Shop Now</button></Link>
   </div>
    </div>
    <div class="carousel-item" id='carousl-img'  >
    <img src={img3} alt="slider-three"/>
    <div class="carousel-caption carousel_content_2 ">
    <p>chic reverie</p>
    <h5>fashioning</h5>
    <h5> dreams into</h5>
    <h5> reality</h5>
    <br />
    <Link to={'/SHOP'} ><button className='btn btn-dark btn-outline-light' >Shop Now</button></Link>
   </div>
    </div>
  </div>
  <button class="carousel-control-prev text-dark " type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
  <i class="fa fa-chevron-left arrow_1 "></i>
  <span class="carousel-control-prev-icon text-dark" hidden aria-hidden="true"> </span>
  <span class="sr-only">Previous </span>
  </button>
  <button class="carousel-control-next " type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
  <i class="fa fa-chevron-right arrow_2"></i>
  <span class="carousel-control-next-icon " hidden aria-hidden="true"></span>
  <span class="sr-only">Next</span> 
  </button>
</div>
        
   
    
  {/* ------------------------ */}
    {/* home carousel end */}
  {/* ------------------------ */}
<br />
<br />
<br />
<br />
 {/* ------------------------ */}
    {/*  papular start */}
  {/* ------------------------ */}
  <Container   >
    <div className='popular' data-aos="fade-up"
     data-aos-duration="1000"  >
      <p>top Collections</p>
        <h4>Popular Collections</h4>
    </div>
    <br />
    <br />
    <Row> 
    <Col lg='7' md={12} >
    <div className='hover_1' >
      <div className='content_1'  data-aos="fade-up"
     data-aos-duration="500" >
           <p>chasing urban allure</p>
           <h5>effotless style</h5>
           <h5>for the morden</h5>
           <h5>woman</h5>
           <h5>Collections</h5>
           <br/>
           <Link to={'/SHOP'} ><button className='btn btn-white btn-mt'>Shop Now</button></Link>
      </div>
        <div className='overflow_i1' id='over'  data-aos="fade-up"
     data-aos-duration="500"  >      
        <img src={img4} alt="not found" className={'papular_img1'}  />
        </div>
    </div>
        <Row>
        <Col lg={6} md={6}>
        <div className='hover_2'>
        <div className='content_2'>
           <p> urban elegance</p>
           <h5>elevate your</h5>
           <h5>everyday look</h5>
           <br/>
           <Link to={'/SHOP'} ><button className='btn btn-white btn-mt'>Shop Now</button></Link>
      </div>
        <div className='overflow_i2' id='over2' >
            <img src={img6} alt="not found" className={'papular_img2'} />
        </div>
        </div>
          </Col >
           <Col lg={6} md={6}>
        <div className='overflow_i2 ower3' id='over3' >
           <h4>mastering the art of</h4>
           <h4>menswear</h4>
           <h1>50%</h1>
           <Link to={'/SHOP'} ><button className='btn btn-white btn-mt'>Shop Now</button></Link>
        </div>
           </Col>
          </Row>
    </Col>
    <Col lg='5' md={12}>
    <div className='hover_3' >
      <div className='content_3' id='cont3' data-aos="fade-up"
     data-aos-duration="300" >
           <p> adorable essentials</p>
           <h5>everyday</h5>
           <h5>cuteness</h5>
           <h5>for kids</h5>
           <br/>
           <Link to={'/SHOP'} ><button className='btn btn-white btn-mt'>Shop Now</button></Link>
      </div>
    <div className='overflow_il' id='overli' data-aos="fade-up"
     data-aos-duration="500" >
          <img src={img5} alt="not found"  className={'papular_img4'} />
          </div>
      </div>
    </Col>
    </Row>
    </Container>
    <br />
    <br />
 {/* ------------------------ */}
    {/* papular end */}
  {/* ------------------------ */}


{/* --------------------- */}
    {/* best seller start */}
{/* --------------------- */}

      <Container  className='best_seller' data-aos="fade-up"
     data-aos-duration="2000" >
        <p>top Products</p>
        <h4>Best Sellers</h4>
        <Row>
        <Swiper 
      modules={[Navigation,Autoplay]}
      spaceBetween={30}
      slidesPerView={4}
      navigation
      direction='horizontal'
      loop='true'
      speed='500'
      autoplay={{
        delay:2500,
        pauseOnMouseEnter:true
      }}
      breakpoints={{
        1024:{
          slidesPerView:4
        },
        768:{
          slidesPerView:2
        },
        320:{
          slidesPerView:1
        }
      }}
      
    >
          {seller.map((p,o)=>{
            return(
        <SwiperSlide>
     <Col  className='hover_col' data-aos="fade-up"
     data-aos-duration="2000" >
      <Link to={'singleshop2/' + p.cont}>  
      <Card className='card_1'>
        <div className='icons'>
        <i class="fa-regular fa-heart"></i> 
        <i class="fa-solid fa-magnifying-glass"></i>   
        <i class="fa-solid fa-bag-shopping"></i>    
      </div>
        <div className='hover_div'>
          <img src={card_img.i1[o]} alt="not found" id='card_1'  onMouseOver={hover.out[o]} onMouseOut={hover.hov[o]} height={250} />
          </div>
        <CardBody className='cardbody_1'>
          <p>{p.name}</p>
          <h6>{p.title}</h6>
          <p>{p.price}</p>
        </CardBody>
      </Card>
      </Link>
    </Col> 
  </SwiperSlide>             
            )
          })}
          </Swiper>         


    </Row>
      </Container>

      {/* -------------------------------------- */}
              {/* best seller cont2 */}
      {/* -------------------------------------- */}


    <Container id='seller_2' data-aos="fade-up"
     data-aos-duration="2000">
      <Row>
        <Col lg='6' md={12}>
            <div id='col-2'>
            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/wII9bv2P9c8?si=WMA6HiXj3PJz-Dzg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
        </Col>
        <Col lg='6' md={12} >
          <div className='seller_col_2' >
            <span><p>Up to 60% Off</p></span>
            <h4>Unleash Your Style</h4>
            <h4>Potential with Our</h4>
            <h4>Spectacular Clothing</h4>
            <h4>Sale</h4>
            <p>Feel free to customize these titles to fit the tone and theme of your clothing sale and to convey the excitement of the discounts being offered.</p>
            <center>
            <Link to={'/SHOP'} ><button className='btn' >Shop The Sale</button> </Link>
            </center>
          </div>
        </Col>
      </Row>
    </Container>
{/* --------------------- */}
  {/* best seller end */}
{/* --------------------- */}


{/* --------------------- */}
  {/* new arrivals start */}
{/* --------------------- */}
    <Container id='newarrivals_container' >
      <Row>
    <center>
        <div id='new_arrivals_head' data-aos="fade-up"
     data-aos-duration="500">
        <p>Latest Products</p>
        <h5>New Arrivals</h5>
      </div>
      </center>
      {arrivals.map((k,s)=>{
          return(
            <Col lg='3' md={6} className='hover_arrival_col' data-aos="fade-up"  data-aos-anchor-placement="center-bottom">
              <Link to={'singleshop3/' +k.cont }>
            <Card  className='arraivls_card' id='arri_card' >
            <div className='icon' >
         <i class="fa-regular fa-heart"></i>
         <i class="fa-solid fa-magnifying-glass"></i>
        <i class="fa-solid fa-bag-shopping"></i>
       </div>
             <img src={new_arrivals.i5[s]} alt="not found" onMouseOver={out1[s]} onMouseOut={hov1[s]} />
             <CardBody className='arraivals_body'>  
                 <p>{k.name}</p>
                 <h6>{k.title}</h6>
                 <p>{k.price}</p>
             </CardBody>
            </Card>
            </Link>
         </Col>     
          )
      })}
      </Row>     
      <br />
      <center>
      <Link to={'/SHOP'}><button className='btn btn-outline-dark btn-mt show_more_btn ' >Show More Products</button></Link>
        </center>
    </Container>
{/* --------------------- */}
  {/* new arrivels end */}
{/* --------------------- */}



{/* --------------------- */}
  {/* popular brands  start */}
{/* --------------------- */}

    <Container className='popular_container' >
      <div className='popular_brand_head'data-aos="fade-up"
     data-aos-duration="500" >
         <center>
          <p>top brands</p>
          <h5>popular brands</h5>
          </center>
      </div>
      <Row>
        <div data-aos="fade-up"
     data-aos-duration="500" >
      <Swiper
      modules={[Navigation,Autoplay]}
      spaceBetween={120}
      slidesPerView={6}
      navigation={true}
      direction='horizontal'
      loop='true'
      speed='500'
      autoplay={{
        delay:2500,
        pauseOnMouseEnter: true
      }}
      breakpoints={{
        1024:{
          slidesPerView:6
        },
        768:{
          slidesPerView:4
        },
        320:{
          slidesPerView:3
        }
       
        
      }}
    >
      <SwiperSlide >
      <Col lg='2' className='papular_imgs' ><img src={img35} alt="not found"  style={{height:'100px',width:'150px'}} /></Col>
        </SwiperSlide>

        <SwiperSlide>
        <Col lg='2' className='papular_imgs' ><img src={img34} alt="not found"  style={{height:'100px',width:'150px'}} /></Col>
        </SwiperSlide>

        <SwiperSlide>
        <Col lg='2' className='papular_imgs' ><img src={img36} alt="not found"  style={{height:'100px',width:'150px'}} /></Col>
        </SwiperSlide>

        <SwiperSlide>
        <Col lg='2' className='papular_imgs' ><img src={img33} alt="not found"  style={{height:'100px',width:'150px'}} /></Col>
        </SwiperSlide>

        <SwiperSlide>
        <Col lg='2' className='papular_imgs' ><img src={img31} alt="not found"  style={{height:'100px',width:'150px'}} /></Col>
        </SwiperSlide>

        <SwiperSlide>
        <Col lg='2' className='papular_imgs' ><img src={img32} alt="not found"  style={{height:'100px',width:'150px'}} /></Col>
        </SwiperSlide>

        <SwiperSlide>
        <Col lg='2' className='papular_imgs' ><img src={papularlast} alt="not found"  style={{height:'100px',width:'150px'}} /></Col>
        </SwiperSlide>

        </Swiper>
        </div>
      </Row>
      
    </Container>
{/* --------------------- */}
  {/* popular brands  end */}
{/* --------------------- */}




{/* --------------------- */}
  {/* Blog & Insights start */}
{/* --------------------- */}

    <Container fluid className='head_fluid'  >
      <Container>
        <br />
        <center>
          <div className='Blog_head' data-aos="fade-up"
     data-aos-duration="500" >
            <p>Latest posts</p>
            <h5>Blog & Insights</h5>
          </div>
        </center>
      <Row>

        <Col lg='4' md={12} >
          <Card className='hover_card' >
            <div  className='overflow_div' id='over_div' data-aos="fade-up"
     data-aos-duration="500">
            <img src={img37} alt="not found" />
            </div>
            <CardBody className='cardbody_text'data-aos="fade-up"
     data-aos-duration="500"  >
                <p>by admin december 19,2032</p>
                <h5>dress to impress:a guide to</h5>
                <h5>power dressing for success</h5>
            </CardBody>
          </Card>
        </Col>
       
        <Col lg='4' md={12} >
        <Card className='hover_card' >
            <div  className='overflow_div' data-aos="fade-up"
     data-aos-duration="500"  >
            <img src={img38} alt="not found" />
            </div>
            <CardBody className='cardbody_text' data-aos="fade-up"
     data-aos-duration="500"  >
                <p>by admin december 19,2032</p>
                <h5>Fashion Forward: Emerging Trends</h5>
                <h5>You Need to Know</h5>
            </CardBody>
          </Card>
        </Col>
       
        <Col lg='4' md={12} >
        <Card className='hover_card' >
            <div  className='overflow_div' data-aos="fade-up"
     data-aos-duration="500"  >  
            <img src={img39} alt="not found" />
            </div>
            <CardBody className='cardbody_text' data-aos="fade-up"
     data-aos-duration="500"  >
                <p>by admin december 19,2032</p>
                <h5>Unveiling Elegance: Timeless</h5>
                <h5>Fashion Trends for Women</h5>
            </CardBody>
          </Card>
        </Col>
        
       
               
      </Row>
      </Container>
    </Container>






    <Container className='details_container' data-aos="fade-up"
     data-aos-duration="500" >
      <Row>
        <Col lg='3' md={6} >
        <div className='delivary_detal_1' >
        <i class="fa-solid fa-truck-fast"></i>
        <h6>Free Shipping</h6>
          <p>Free Shipping for orders</p>
          <p className='my-0 last_ptag ' >over £130</p>
          </div>
        </Col>
        <Col lg='3' md={6} >
        <div className='delivary_detal_1' >
        <i class="fa-solid fa-money-bill"></i>
        <h6>Money Guarantee</h6>
          <p>Within 30 days for an</p>
          <p className='my-0 last_ptag ' >exchange.</p>
          </div>
        </Col>
        <Col lg='3' md={6} >
        <div className='delivary_detal_1' >
        <i class="fa-solid fa-cart-shopping"></i>
        <h6>Flexible Payment</h6>
          <p>Pay with Multiple Credit</p>
          <p className='my-0 last_ptag ' >Cards</p>
          </div>
        </Col>
        <Col lg='3' md={6} >
        <div className='delivary_detal_1' >
        <i class="fa-brands fa-cloudflare"></i>
        <h6>Online Support</h6>
          <p>Online Support</p>
          <p className='my-0 last_ptag ' >week</p>
          </div>
        </Col>
      </Row>
    </Container>

{/* --------------------- */}
  {/* Blog & Insights start */}
{/* --------------------- */}

    {/* end bar */}
    <Endbar/>
    
    </>
  )
}

export default Home
