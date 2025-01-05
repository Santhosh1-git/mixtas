import React from 'react'
import { arrivals } from './New_arivals_cont'
import { Col, Container, Row } from 'react-bootstrap'
import Header_for_all from '../Components/Header_for_all'
import Endbar from '../Components/Endbar'
import { useState } from 'react'
import { Autoplay, Navigation,  } from 'swiper/modules';
import { Swiper,SwiperSlide } from 'swiper/react'
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
import { useParams } from 'react-router-dom'
function Singleshop3() {

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

    let {id}=useParams()

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

  return (
    <>
        <Header_for_all/>
    <br />
    <br />
    <Container>
        <Row>
            <Col lg={6} >
           
        {arrivals.map((k,s)=>{
            if(id===k.cont){
          return(
            <Col  id='hover_col'
             style={{position:`sticky`,top:`0px`}} key={s}>
            <div id='content1'>  
              <div className='img_map1'>
                <img src={new_arrivals.i5[s]} alt="not found"/>
                </div>
                <div className='select_img'>  
                <img src={new_arrivals.i6[0]}   alt="not found"/>  
             <img src={new_arrivals.i5[2]} alt="not found"/> 
             <img src={new_arrivals.i5[3]} alt="not found"/>   
             <img src={new_arrivals.i5[4]} alt="not found"/>  
            <img src={new_arrivals.i6[3]} alt="not found"/>    
                  </div> 
                </div>
          </Col> 
          )
        }
      })}
       </Col>
       <Col lg={6} >
      {arrivals.map((e,x)=>{ 
               if(id===e.cont){
              return (
                <Col lg={12}   id='hover1_col' key={x} >  
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
            <img src={new_arrivals.i5[0]} alt="not found"/>
            
              <h5>Jackets</h5>
              <p>adidas X Pop Beckenbauer </p>
              <p>$120.00</p>
            
            </div>
          
        </SwiperSlide>
        <SwiperSlide> 
          <div className='swiper_div'>
            <img src={new_arrivals.i5[1]} alt="not found"/>
            <h5>Jackets</h5>
              <p>adidas X Pop Beckenbauer t-shirt</p>
              <p>$140.00</p>
              </div>
        </SwiperSlide>
        <SwiperSlide> 
          <div className='swiper_div'>
            <img src={new_arrivals.i5[2]} alt="not found"/>
            
            <h5>Jackets</h5>
              <p>adidas X Pop TXL </p>
              <p>$140.60</p>
              
              </div>
          
        </SwiperSlide>
        <SwiperSlide> 
          <div className='swiper_div'>
            <img src={new_arrivals.i5[3]} alt="not found"/>
            
            <h5>Jackets</h5>
              <p>adidas-graphic-t-shirt</p>
              <p>$110.60</p>
              
              </div>
          
        </SwiperSlide>
        <SwiperSlide> 
            <div className='swiper_div'>
            <img src={new_arrivals.i5[4]} alt="not found"/>
            
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
      <br />
      <Endbar/>
    </>
  )
}

export default Singleshop3
