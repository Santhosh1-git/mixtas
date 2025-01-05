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
import { shop_search } from './Sreach_content'

function Search_shop() {

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
      {shop_search.map((e,x)=>{   
          if(id===e.cont){
        return (
          <Col lg={12}  id='hover_col' >  
            <div id='content1'>  
            <div className='img_map1'>             
            <img src={e.image}  alt='image not found'/>
                </div>
            </div>   
              </Col> 
              )
            }
            
            })} 
        
     </Row>  
      </Col>
      <Col lg={6} >
      {shop_search.map((e,x)=>{ 
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

export default Search_shop
