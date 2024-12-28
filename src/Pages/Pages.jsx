import React from 'react'
import Header from '../Components/Header'
import Endbar from '../Components/Endbar'
import '../assets/Pages.css'
import { Container, Row,Col } from 'react-bootstrap'
import img1 from '../images/about_us/1.jpeg'
import { Autoplay, Navigation,  } from 'swiper/modules';
import { Swiper,SwiperSlide } from 'swiper/react'


// iamges
import img2 from '../images/about_us/team/1.jpg'
import img3 from '../images/about_us/team/2.jpg'
import img4 from '../images/about_us/team/3.jpg'
import img5 from '../images/about_us/team/4.jpg'
function Pages() {
  return (
    <>
    <Header/>     
   <br />
   
      <Container fluid id='about_container' >
        <Container  >
        <Row>
          <Col>
          <div id='about_us'>
          <h4>Discover the Art of Dressing Where Every Stitch Tells a Story and Every Outfit Paints a Picture</h4>
          </div>
          </Col>
        </Row>
        </Container>
      
      </Container>
      <br />
        <br />
       
        <Container>
          <Col lg='12' md={12} >
    <p>
      <div className='collaps_btns' >
  <a class="btn"  data-bs-toggle="collapse" href=".multi-collapse1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">About Mixtas</a>

  <button class="btn " type="button" data-bs-toggle="collapse" data-bs-target="#multiCollapseExample2" aria-expanded="false" aria-controls="multiCollapseExample2">Our Story</button>
  
  <button class="btn " type="button" data-bs-toggle="collapse" data-bs-target="#multiCollapseExample3" aria-expanded="false" aria-controls="multiCollapseExample3">Our Mission</button>

  <button class="btn " type="button" data-bs-toggle="collapse" data-bs-target="#multiCollapseExample4" aria-expanded="false" aria-controls="multiCollapseExample4">Connect with Us</button>
  <br />
  <hr />
  </div>
</p>
<div class="row">
  <div class="col-12">
    <div class="collapse multi-collapse1" id="multiCollapseExample1">
      <br />
      <br />
      <Container>
      <Row>
        <Col lg={6}  md={6} >
        <div className='collapse1'>
          <img src={img1} alt="not found"/>
      </div>
        </Col>
        <Col lg={6} md={6} >
          <div className='collapse1_content'>
            <h4>Unveiling Your Unique Fashion Journey</h4>
            <p>Welcome to Mixtas Store, where fashion meets individuality, and style is more than just clothing – it's a statement. Our passion for fashion drives us to curate a collection that celebrates diversity, embraces trends, and empowers you to express yourself through clothing.</p>
          </div>
        </Col>
        <div className='our_team' >
        <center>
          <br />  
          <br />
          <br />
          <br />
        <h5 >Meet the our team</h5>
        </center>
        <Swiper 
      modules={[Navigation,Autoplay]}
      spaceBetween={35}
      slidesPerView={3}
      navigation
      direction='horizontal'
      loop='true'
      speed='500'
      autoplay={{
        delay:2500,
        pauseOnMouseEnter: true
      }}
      
    >
      <SwiperSlide>
        <div className='swi_div'>
          <img src={img2} alt="not found" />
          <h5>markes</h5>
          <p>art director</p>
        </div>

      </SwiperSlide>
      <SwiperSlide>
      <div className='swi_div'>
          <img src={img3} alt="not found" />
          <h5>sofio patel</h5>
          <p>marketing managet</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className='swi_div'>
          <img src={img4} alt="not found" />
            <h5>marcus turner</h5>
            <p>ceo/founder</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className='swi_div'>
          <img src={img5} alt="not found" />
          <h5>adrion johnson</h5>
          <p>fashion designer</p>
        </div>
      </SwiperSlide>
    </Swiper>

        </div>
      </Row>
           
      </Container>
    </div>
  </div>
  <div class="col-12"  >
    <div class="collapse multi-collapse" id="multiCollapseExample2">
      <div  className='collape_2'>
        <p>In the heart of [Your City], a dream was woven into the fabric of reality – the dream of creating a clothing haven that resonates with style enthusiasts, trendsetters, and those who seek to express themselves through fashion. Welcome to [Your Store Name], where every stitch tells a story.</p>
        <p>Founded [Year], [Your Store Name] emerged from a passion for clothing and a commitment to providing a curated collection that transcends mere fashion trends. Our journey began with the belief that clothing is not just about covering the body; it’s a canvas for self-expression, an art form that reflects individuality.</p>
        <p>What sets us apart is our dedication to offering more than just garments – we curate experiences. From the luxurious touch of premium fabrics to the meticulous craftsmanship of each design, every piece at [Your Store Name] is a testament to our commitment to quality and style. Our curated selection embraces the essence of contemporary trends while celebrating the enduring charm of timeless classics.</p>
        <p>At [Your Store Name], we understand that fashion is more than a fleeting moment; it’s an ongoing narrative. Our collections are thoughtfully curated to tell stories that resonate with diverse tastes, preferences, and lifestyles. We believe in empowering our customers to embrace their unique identities through the choices they make in our store.</p>
        <p>Beyond the racks of clothing, [Your Store Name] is a community – a gathering place for fashion enthusiasts to connect, explore, and celebrate the art of dressing well. Our team is passionate about assisting you in creating looks that speak volumes and stand the test of time.</p>
        <p>As we continue to evolve, our commitment remains unwavering – to inspire confidence, foster self-expression, and redefine the way you experience fashion. Thank you for being a part of our story, and we look forward to helping you script your own fashion narrative at [Your Store Name].”</p>
        <p>Feel free to customize the details to align with your store’s unique history and vision.</p>

      </div>
    </div>
  </div>
  <div class="col-12">
    <div class="collapse multi-collapse" id="multiCollapseExample3">
      <div class="collapse_3">
      <p>At [Your Store Name], we are driven by a singular mission: to empower individuals through the art of fashion. We believe that clothing is not just a means of covering the body but a powerful tool for self-expression, confidence, and individuality.</p>
      <br />
      <ol>
        <li><span>Curate Exceptional Style :</span> We are committed to curating a diverse and exceptional collection of clothing that transcends the boundaries of fashion. Our mission is to offer a carefully selected range of garments that reflect the latest trends, timeless classics, and unique pieces that resonate with our customers.</li>
        <li><span>Quality Craftsmanship : </span> We prioritize quality craftsmanship in every stitch and detail. Our dedication to superior craftsmanship ensures that each garment is not just a piece of clothing but a work of art, designed to stand the test of time.</li>
        <li><span>Celebrate Diversity:</span> Fashion is a universal language, and we celebrate the diversity of styles and tastes. Our mission is to provide a space where individuals from all walks of life can find clothing that aligns with their unique identity and personal expression.</li>
        <li><span>Customer Empowerment: </span>  We strive to empower our customers to embrace their individuality with confidence. Our team is committed to providing personalized assistance, style advice, and a seamless shopping experience that goes beyond transactions to create lasting connections.</li>
        <li><span>Sustainable Choices: </span>  As stewards of the environment, we are dedicated to making sustainable choices in our business practices. We actively seek eco-friendly materials, ethical manufacturing processes, and sustainable packaging options to contribute to a more conscious and responsible fashion industry.</li>
        <li><span>Community Engagement: </span> [Your Store Name] is more than just a place to shop; it’s a community. Our mission extends beyond fashion to create a space where like-minded individuals can connect, share inspiration, and foster a sense of belonging. </li>
        <li><span>Innovation and Adaptability: </span>  In a dynamic and ever-changing fashion landscape, we embrace innovation and adaptability. Our mission is to stay ahead of the curve, offering the latest trends and technological advancements that enhance the overall shopping experience.</li>
      </ol>
      <br />
      <p>At [Your Store Name], our mission is not just about selling clothes; it’s about fostering a culture of confidence, creativity, and self-expression. Join us on this journey as we continue to redefine the way you experience fashion.”</p>
      <p>Feel free to modify the mission statement to align with the specific values and goals of your clothing store.</p>
      </div>
    </div>
  </div>
  <div class="col-12">
    <div class="collapse multi-collapse" id="multiCollapseExample4">
      <div class="collapse_4">
    <h5>Affilate Program</h5>
    <ul>
      <li>Build your own online sporting goods store!</li>
      <li> If you have a web site, you can make money selling sporting goods products. It’s easy and it’s free to join</li>
      <li>Click here to join now and earn commissions of up to 6%</li>
    </ul>
      </div>
    </div>
  </div>
</div>
          </Col>
        </Container>
        <br />
        <br />
        <br />
     

        <Endbar/>    
    </>
  )
}

export default Pages
