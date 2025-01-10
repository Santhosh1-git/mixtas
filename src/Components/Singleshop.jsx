import Endbar from '../Components/Endbar'
import Header_for_all from '../Components/Header_for_all'
import { Container ,Row,Col,Card,CardBody } from 'react-bootstrap'
import {  useParams } from 'react-router-dom'
import { shop_header } from '../Components/Shop_content'
import { useState } from 'react'
import '../assets/Single.css'
import 'swiper/css'
import { Autoplay, Navigation,  } from 'swiper/modules';
import { Swiper,SwiperSlide } from 'swiper/react'
// defult imgs
import img1 from '../shop_images/all/1.jpg'
import img2 from '../shop_images/all/2.jpg'
import img3 from '../shop_images/all/3.jpg'
import img4 from '../shop_images/all/4.jpg'
import img5 from '../shop_images/all/5.jpg'
import img6 from '../shop_images/all/6.jpg'
import img7 from '../shop_images/all/7.jpg'
import img8 from '../shop_images/all/8.jpg'
import img10 from '../shop_images/all/10.jpg'
import img11 from '../shop_images/all/11.jpg'
import img12 from '../shop_images/all/12.jpg'
import img13 from '../shop_images/all/13.jpg'
import img14 from '../shop_images/all/14.jpg'
import img15 from '../shop_images/all/15.jpg'
import img16 from '../shop_images/all/16.jpg'
import img17 from '../shop_images/all/17.jpg'
import img18 from '../shop_images/all/18.jpg'
import img19 from '../shop_images/all/19.jpg'
import img20 from '../shop_images/all/20.jpg'
import img21 from '../shop_images/all/21.jpg'
import img22 from '../shop_images/all/22.jpg'
import img23 from '../shop_images/all/23.jpg'
import img24 from '../shop_images/all/24.jpg'
import img25 from '../shop_images/all/24.jpg'
import img26 from '../shop_images/all/26.jpg'
import img27 from '../shop_images/all/27.jpg'
import img28 from '../shop_images/all/28.jpg'
import img29 from '../shop_images/all/29.jpg'
import img30 from '../shop_images/all/30.jpg'
import img31 from '../shop_images/all/31.jpg'
import img32 from '../shop_images/all/32.jpg'
import img33 from '../shop_images/all/33.jpg'
import img34 from '../shop_images/all/34.jpg'
import img35 from '../shop_images/all/35.jpg'
import img36 from '../shop_images/all/36.jpg'
import img37 from '../shop_images/all/37.jpg'
import img38 from '../shop_images/all/38.jpg'
import img39 from '../shop_images/all/39.jpg'
// hover imgs
import h1 from '../shop_images/all/hover_1.jpg'
import h2 from '../shop_images/all/hover_2.jpg'
import h3 from '../shop_images/all/hover_3.jpg'
import h4 from '../shop_images/all/hover_4.jpg'
import h5 from '../shop_images/all/hover_5.jpg'
import h6 from '../shop_images/all/hover_6.jpg'
import h7 from '../shop_images/all/hover_7.jpg'
import h8 from '../shop_images/all/hover_8.jpg'

import h10 from '../shop_images/all/hover_10.jpg'
import h11 from '../shop_images/all/hover_11.jpg'
import h12 from '../shop_images/all/hover_12.jpg'
import h13 from '../shop_images/all/hover_13.jpg'
import h14 from '../shop_images/all/hover_14.jpg'
import h15 from '../shop_images/all/hover_15.jpg'
import h16 from '../shop_images/all/hover_16.jpg'
import h17 from '../shop_images/all/hover_17.jpg'
import h18 from '../shop_images/all/hover_18.jpg'
import h19 from '../shop_images/all/hover_19.jpg'
import h20 from '../shop_images/all/hover_20.jpg'
import h21 from '../shop_images/all/hover_21.jpg'
import h22 from '../shop_images/all/hover_22.jpg'
import h23 from '../shop_images/all/hover_23.jpg'
import h24 from '../shop_images/all/hover_24.jpg'
import h25 from '../shop_images/all/hover_25.jpg'
import h26 from '../shop_images/all/hover_26.jpg'
import h27 from '../shop_images/all/hover_27.jpg'
import h28 from '../shop_images/all/hover_28.jpg'
import h29 from '../shop_images/all/hover_29.jpg'
import h30 from '../shop_images/all/hover_30.jpg'
import h31 from '../shop_images/all/hover_31.jpg'
import h32 from '../shop_images/all/hover_32.jpg'
import h33 from '../shop_images/all/hover_33.jpg'
import h34 from '../shop_images/all/hover_34.jpg'
import h35 from '../shop_images/all/hover_35.jpg'
import h36 from '../shop_images/all/hover_36.jpg'
import h37 from '../shop_images/all/hover_37.jpg'
import h38 from '../shop_images/all/hover_38.jpg'
import h39 from '../shop_images/all/hover_39.jpg'
function Singleshop() {
  const imgs=[img1,img2,img3,img4,img5,img6,img7,img8,img10,img11,img12,img13,img14,img15,img16,img17,img18,img19,img20,img21,img22,img23,img24,img25,img26,img27,img28,img29,img30,img31,img32,img33,img34,img35,img36,img37,img38,img39]
  const himg=[h1,h2,h3,h4,h5,h6,h7,h8,h10,h11,h12,h13,h14,h15,h16,h17,h18,h19,h20,h21,h22,h23,h24,h25,h26,h27,h28,h29,h30,h31,h32,h33,h34,h35,h36,h37,h38,h39]

  const [imgchange,Imgchange]=useState(imgs)

let {id}=useParams()
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
    {/* --------------------------- */}
          {/* Shop_header */}
    {/* --------------------------- */}
    <Header_for_all/>
     <br/>
    {/* --------------------------- */}
         {/* Shop_header end */}
    {/* --------------------------- */}


<div>
  <Container id='top_container'>
      <Row className='tab_div'>
      <Col lg={6} >
      <Row className='img_row1'>
      {shop_header.map((e,x)=>{   
          if(id===e.cont){
        return (
          <Col lg={12}  id='hover_col' >  
            <div id='content1'>  
            <div className='img_map1'>             
            <img src={imgchange[x]}  alt='image not found'/>
                </div>
                <div className='select_img'>
            <img src={himg[x]}   alt="not found" /> 
            <img src={imgs[x]} alt="not found" />   
            <img src={imgs[4]} alt="not found" />  
            <img src={imgs[5]} alt="not found" />  
            <img src={imgs[6]} alt="not found" />  
            </div>          
            </div>   
              </Col> 
              )
            }
            
            })} 
        
     </Row>  
      </Col>
      <Col lg={6} >
      {shop_header.map((e,x)=>{ 
               if(id===e.cont){
              return (
                <Col lg={12}  key={x}  id='hover1_col' >  
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
                            <span className='btn btn-dark' >Add To Cart</span>
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
                        <div className="accordion" id="accordionExample">
  <div className="accordion-item1">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
       <h5>Description</h5>
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <p>In WooCommerce, a product description refers to the written content that provides information about a specific product listed on an online store. It serves to inform potential customers about the features, benefits, specifications, and other relevant details of the product. A well-crafted product description can play a crucial role in influencing a customer’s purchasing decision.</p>
        <p>In WooCommerce, you can create and manage product descriptions through the WordPress dashboard. Each product has its own page where you can input and format the description, add images, set prices, and manage other product-related details. Effective product descriptions are essential for e-commerce success as they help customers make informed decisions and contribute to a positive shopping experience.</p>
      </div>
    </div>
  </div>
  </div>
  <div className="accordion" id="accordionExample">
  <div className="accordion-item1">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
       <h5>Additional information</h5>
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body">
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
  <div className="accordion" id="accordionExample">
  <div className="accordion-item1">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
       <h5>Reviews (1)</h5>
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body">
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
<i className="fa-brands fa-facebook"></i> <span>facebook</span> 
 <i className="fa-brands fa-twitter"> </i><span>x</span>
 <i className="fa-brands fa-whatsapp"></i> <span>Whatspann</span>
  <i className="fa-brands fa-linkedin"></i><span>linkedin</span>
</div>
 </div>
              </Col> 
              )
            }
            
            })} 
      </Col>
      </Row>
      <br />
      <br />
      <br />
      <center id='related' >
      <h5>Related Products</h5>
      </center>
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
            <img src={imgs[0]} alt="not found"/>
            
              <h5>Jackets</h5>
              <p>adidas X Pop Beckenbauer </p>
              <p>$120.00</p>
            
            </div>
          
        </SwiperSlide>
        <SwiperSlide> 
          <div className='swiper_div'>
            <img src={imgs[1]} alt="not found"/>
            <h5>Jackets</h5>
              <p>adidas X Pop Beckenbauer t-shirt</p>
              <p>$140.00</p>
              </div>
        </SwiperSlide>
        <SwiperSlide> 
          <div className='swiper_div'>
            <img src={imgs[2]} alt="not found"/>
            
            <h5>Jackets</h5>
              <p>adidas X Pop TXL </p>
              <p>$140.60</p>
              
              </div>
          
        </SwiperSlide>
        <SwiperSlide> 
          <div className='swiper_div'>
            <img src={imgs[3]} alt="not found"/>
            
            <h5>Jackets</h5>
              <p>adidas-graphic-t-shirt</p>
              <p>$110.60</p>
              
              </div>
          
        </SwiperSlide>
        <SwiperSlide> 
            <div className='swiper_div'>
            <img src={imgs[4]} alt="not found"/>
            
            <h5>Jackets</h5>
              <p>adidas-graphic-t-shirt</p>
              <p>$110.60</p>
              
              </div>
          
        </SwiperSlide>
    </Swiper>
      </Container>
  </div>
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  {/* endbar */}
  <Endbar/>
    </>
  )
}

export default Singleshop
