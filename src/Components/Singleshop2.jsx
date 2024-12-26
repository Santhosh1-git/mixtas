import React from 'react'
import { seller } from '../Components/Bset_seller_content';
import { useState } from 'react';
import { Col,CardBody,Card, Container, Row} from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { Autoplay, Navigation,  } from 'swiper/modules';
import { Swiper,SwiperSlide } from 'swiper/react'
// best seller
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
import Header_for_all from './Header_for_all';
import Endbar from './Endbar';

function Singleshop2() {
    let {id}=useParams()

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

      // 
      const [a,setA]=useState ()
const [size,setSize]=useState()
const [inc,setInc]=useState(0)
  const  incr=(()=>{
    if(inc<10){
        setInc(inc+1)
    }
  })
  const  dcr=(()=>{
    if(inc>0){
    setInc(inc-1)
    }
})

  return (
    <>  
        <Header_for_all/>
        <br />
        <br />
        <br />
        <Container>
          <Row>
            <Col lg={6}>
     {seller.map((p,o)=>{
                if(id===p.cont){  
            return( 
     <Col  id='hover_col' style={{position:`sticky`,top:`0px`}} >
      <div id='content1'>  
        <div className='img_map1'>
          <img src={card_img.i1[o]} alt="not found"/>
          </div>
          <div className='select_img'>  
          <img src={card_img.i2[1]}  alt="not found"/>  
            <img src={card_img.i1[2]}   alt="not found"/> 
            <img src={card_img.i1[3]} alt="not found"/>   
            <img src={card_img.i1[4]} alt="not found"/>  
            <img src={card_img.i2[0]} alt="not found"/>  
            </div> 
          </div>
    </Col> 
     )
    }
    })} 
    </Col>
    <Col lg={6} >
      {seller.map((e,x)=>{ 
               if(id===e.cont){
              return (
                <Col lg={12}   id='hover1_col' >  
                <br />
                 <div id='content2'>  
                        <h4>{e.title}</h4>
                        <p>{e.price}</p>
                        <hr />
                        </div>
                        <div>                        
                          <p className='cont_p' >A product short description is a concise and brief overview of a product, providing key information to potential customers. Typically, it is a brief summary that highlights the most important features, benefits, and characteristics of the product. The goal is to quickly communicate relevant details to the consumer and entice them to learn more or make a purchase.</p>
                          <div className='colors' >
                          <span>Color: {a}</span>
                          <ul>
    <li> <button className='blue' value={'Blue'}     onClick={((e)=>{setA(e.target.value)})}></button></li>
    <li> <button className='grey' value={'Grey'}     onClick={((e)=>{setA(e.target.value)})}></button></li>
    <li> <button className='green' value={'Green'}   onClick={((e)=>{setA(e.target.value)})}></button></li>
    <li> <button className='red'  value={'Red'}      onClick={((e)=>{setA(e.target.value)})}></button></li>
    <li> <button className='yellow' value={'Yellow'} onClick={((e)=>{setA(e.target.value)})}></button></li><li></li>
                          </ul>
                          <br />
                        
        <span>Size: {size}</span><br /><br />
        <div id='sizes' >  
            <a href="##"   className='badge1'  onClick={((e)=>{setSize(e.target.innerHTML)})}>Large</a>      
            <a href="##"  className='badge1' onClick={((e)=>{setSize(e.target.innerHTML)})}> Medium</a> 
            <a  href="##" className='badge1' onClick={((e)=>{setSize(e.target.innerHTML)})}> Small</a>
            </div>
                            <br />
                            <br />
                            <div id='inc_dic' >
                            <button className='btn out ' onClick={dcr} > - </button><span> {inc} </span><button className='btn out ' onClick={incr} > + </button>
                            </div>
                           <br />
                            <span className='btn btn-dark' >Add To Card</span>
                            <br />
                            <br />
                            <table  id='tab_details' > 
                              <tr>
                                <td>SKU </td>
                                <td className='end_tas' >N/A</td>
                              </tr>
                              <tr>
                                <td>Categories </td>
                                <td className='end_tas' > {e.name}</td>
                              </tr>
                              <tr>
                                <td>Tags </td>
                                <td className='end_tas' >clothing, etc, fashion, m81, men, products</td>
                              </tr>
                            </table>
                        </div>
                        </div>
                        <br />
                        <br />
                        <br />
                        <div id='acort'>
                        <div class="accordion" id="accordionExample">
  <div class="accordion-item1">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
       <h5>Description</h5>
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <p>In WooCommerce, a product description refers to the written content that provides information about a specific product listed on an online store. It serves to inform potential customers about the features, benefits, specifications, and other relevant details of the product. A well-crafted product description can play a crucial role in influencing a customer’s purchasing decision.</p>
        <p>In WooCommerce, you can create and manage product descriptions through the WordPress dashboard. Each product has its own page where you can input and format the description, add images, set prices, and manage other product-related details. Effective product descriptions are essential for e-commerce success as they help customers make informed decisions and contribute to a positive shopping experience.</p>
      </div>
    </div>
  </div>
  </div>
  <div class="accordion" id="accordionExample">
  <div class="accordion-item1">
    <h2 class="accordion-header" id="headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
       <h5>Additional information</h5>
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div class="accordion-body">
          <table>
            <tr>
              <td>Color </td>
              <td className='colors1 text-secondary ' >  Blue, Gray, Green, Red, Yellow</td>
            </tr>
            <tr>
              <td>Size </td>
              <td className='colors1 text-secondary ' > Large, Medium, Small</td>
            </tr>
          </table>
      </div>
    </div>
  </div>
  </div>
  <div class="accordion" id="accordionExample">
  <div class="accordion-item1">
    <h2 class="accordion-header" id="headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
       <h5>Reviews (1)</h5>
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <div id='contact' >
        <h5>1 review for adidas X Pop Beckenbauer Track Jacket</h5>
        <br />
        <hr />
        <br />
        <h5>Add a review</h5>
        <p>Your email address will not be published. Required fields are marked *</p>
        <p>Your rating *</p>
        <p> <i className='fa fa-star '></i><i className='fa fa-star '></i><i className='fa fa-star '></i><i className='fa fa-star '></i><i className='fa fa-star '></i></p>
        <table>
            <tr>
                <td>
                  <label >Your review *</label>
                  <tr>
                    <td>
                      <textarea name="" id=""></textarea>
                    </td>
                  </tr>
                </td>
              </tr>
              
        </table>
        <tr>
              <td>Name</td>
                <td>Email</td>
              </tr>    
              <tr>
              <td>
                <input className='checkbox'  type="text" /> 
              </td>
              <td>
                <input type="text" className='checkbox'  /> 
              </td>
            </tr>
        
             <input type="checkbox" name="" id="" /> <span>Save my name, email, and website in this browser for the next time I comment.</span>
             <br />
             <br />
            <button className='btn btn-dark' >Submit</button>
            
        </div>
      </div>
    </div>
  </div>
</div>
<br />
<br />
<div id='social_icons' >
<i class="fa-brands fa-facebook"></i> <span>facebook</span> 
 <i class="fa-brands fa-twitter"> </i><span>x</span>
 <i class="fa-brands fa-whatsapp"></i> <span>Whatspann</span>
  <i class="fa-brands fa-linkedin"></i><span>linkedin</span>
</div>
 </div>
              </Col> 
              )
            }
            
            })} 
      </Col>
      <br />
      <br />
      <br />
      <br />
      <br />
      <center id='related' style={{padding:`70px`}}  >
      <h5>Related Products</h5>
      </center>
      <br />
      <br />
      <br />
      <Swiper 
      modules={[Navigation,Autoplay]}
      spaceBetween={35}
      slidesPerView={4}
      navigation
      direction='horizontal'
      loop='true'
      speed='500'
      autoplay={{
        delay:2500,
        pauseOnMouseEnter: true
      }}
      breakpoints={{
        1024:{
          width:1024,
          slidesPerView:4
        },
        768:{
          width:768,
          slidesPerView:2
        },
        320:{
          width:320,
          slidesPerView:1,
        },
      }}
      
    >
      <SwiperSlide> 
          <div className='swiper_div'>
            <img src={card_img.i2[0]} alt="not found"/>
            
              <h5>Jackets</h5>
              <p>adidas X Pop Beckenbauer </p>
              <p>$120.00</p>
            
            </div>
          
        </SwiperSlide>
        <SwiperSlide> 
          <div className='swiper_div'>
            <img src={card_img.i1[3]} alt="not found"/>
            <h5>Jackets</h5>
              <p>adidas X Pop Beckenbauer t-shirt</p>
              <p>$140.00</p>
              </div>
        </SwiperSlide>
        <SwiperSlide> 
          <div className='swiper_div'>
            <img src={card_img.i1[0]} alt="not found"/>
            
            <h5>Jackets</h5>
              <p>adidas X Pop TXL </p>
              <p>$140.60</p>
              
              </div>
          
        </SwiperSlide>
        <SwiperSlide> 
          <div className='swiper_div'>
            <img src={card_img.i1[1]} alt="not found"/>
            
            <h5>Jackets</h5>
              <p>adidas-graphic-t-shirt</p>
              <p>$110.60</p>
              
              </div>
          
        </SwiperSlide>
        <SwiperSlide> 
            <div className='swiper_div'>
            <img src={card_img.i1[2]} alt="not found"/>
            
            <h5>Jackets</h5>
              <p>adidas-graphic-t-shirt</p>
              <p>$110.60</p>
              
              </div>
          
        </SwiperSlide>
    </Swiper>
    </Row>
    </Container>
    <br />
    <br />
    <Endbar/>
    </>
  )
}

export default Singleshop2
