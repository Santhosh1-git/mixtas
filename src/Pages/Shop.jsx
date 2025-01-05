import Endbar from '../Components/Endbar'
import Header_for_all from '../Components/Header_for_all'
import '../assets/Shop.css'
import { Container ,Row,Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { shop_header } from '../Components/Shop_content'
import { useState } from 'react'
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
function Shop(){
  const [prop,setProp]=useState()
  const imgs=[img1,img2,img3,img4,img5,img6,img7,img8,img10,img11,img12,img13,img14,img15,img16,img17,img18,img19,img20,img21,img22,img23,img24,img25,img26,img27,img28,img29,img30,img31,img32,img33,img34,img35,img36,img37,img38,img39]
  const himg=[h1,h2,h3,h4,h5,h6,h7,h8,h10,h11,h12,h13,h14,h15,h16,h17,h18,h19,h20,h21,h22,h23,h24,h25,h26,h27,h28,h29,h30,h31,h32,h33,h34,h35,h36,h37,h38,h39]
  

const [a,setA]=useState(12)
  return (    
    <>
    {/* --------------------------- */}
          {/* Shop_header */}
    {/* --------------------------- */}
    <Header_for_all/>
     <br/>
      <Container>
        <Row>
          <Col>
          <center className='Shop_header' >
            <h3>Shop</h3>
            <p><Link to={'/HOME' } >Home</Link><span className='text-secondary'> / shop </span></p>
            </center>
          </Col>
        </Row>
      </Container>
    {/* --------------------------- */}
         {/* Shop_header end */}
    {/* --------------------------- */}


<div>
  <Container id='top_container'>
      <Row className='tab_div'>
      <i className="fa-solid fa-sliders bars-head12 " data-bs-toggle="offcanvas" href="#offcanvasExample12" role="button" aria-controls="offcanvasExample"></i>
<div className="offcanvas offcanvas-start can12" tabindex="-1" id="offcanvasExample12" aria-labelledby="offcanvasExampleLabel">
  <div className="offcanvas-header">
    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div className="offcanvas-body">
  <div id='occadian1'>
      <div className="accordion" id="accordionExample">
  <div className="accordion-item ">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button"  data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      <p className='tab_heading ' >Product Categories</p>
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body">
       <div id='tab_1' >
        <ul>
            <li><span className='start' > Bags  </span>       <span className='end' >(4)</span></li>
            <li><span className='start' > Hoodies </span>     <span className='end' >(5)</span></li>
            <li><span className='start' > Jackets </span>     <span className='end' >(25)</span></li>
            <li><span className='start' > Men </span>         <span className='end' >(23)</span></li>
            <li><span className='start' > Sweatshirts </span> <span className='end' >(10)</span></li>
            <li><span className='start' > Tshirts </span>     <span className='end' >(15)</span></li>
            <li><span className='start' > Women </span>       <span className='end' >(24)</span></li>
        </ul>
       </div>
      </div>
    </div>
  </div>
  </div>
  <br />
  <br />
  <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
       <p className='tab_heading' >Price</p>
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <div id='tab_2' >
          <ul>
            <li>$50-$100</li>
            <li>$100-$150</li>
            <li>$150-$200</li>
            <li>$200-$250</li>
            <li>$250-$300</li>
            <li>$1-$50</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  </div>
  <br />
  <br />
  <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
       <p className='tab_heading' >color</p>
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <div id='tab_3' >        
            <ul>
                <li> <button className='color1' ></button>blue<span className='end'>(46)</span> </li>
                <li> <button className='color2' ></button>grey<span className='end'>(46)</span> </li>
                <li> <button className='color3' ></button>green<span className='end'>(46)</span> </li>
                <li> <button className='color4' ></button>red<span className='end'>(46)</span> </li>
                <li> <button className='color5' ></button>yellow<span className='end'>(46)</span> </li>
            </ul>
        </div>
      </div>
    </div>
  </div>
  </div>
  <br />
  <br />
  <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingfour">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsefour" aria-expanded="false" aria-controls="collapsefour">
      <p className='tab_heading' >Size</p>
      </button>
    </h2>
    <div id="collapsefour" className="accordion-collapse collapse" aria-labelledby="headingfour" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <div id='tab_4' >
        <ul>
          <li> large <span className='end' >(46)</span></li>
          <li> medium <span className='end' >(46)</span></li>
          <li>small<span className='end' >(46)</span></li>
        </ul>
        </div>
      </div>
    </div>
  </div>
  </div>
  <br />
  <br />
  <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingfive">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsefive" aria-expanded="false" aria-controls="collapsefive">
      <p className='tab_heading' >Tags</p>
      </button>
    </h2>
    <div id="collapsefive" className="accordion-collapse collapse" aria-labelledby="headingfive" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <div  id='tab_5' >
        <ul>
          <li><span className='bg_1' >clothing  </span> <span className='bg_1' > etc</span> <span className='bg_1'  >   fashion</span></li>
          <li><span className='bg_1'>m11</span><span className='bg_1' >m12</span> <span className='bg_1' >m31</span></li>
          <li><span className='bg_1'>m32</span><span className='bg_1' >m41</span> <span className='bg_1' >m71</span></li>
          <li><span className='bg_1'>m72</span><span className='bg_1' >m81</span> <span className='bg_1' >men</span></li>
          <li><span className='bg_1'>products</span> <span className='bg_1' > women </span> </li>
        </ul>
        </div>
      </div>
    </div>
  </div>
  </div>
  </div>
  <div className="dropdown mt-3">
    </div>
  </div>
</div>
      <Col lg={3} id={'ocardian_div'} >
      <div id='occadian'>
      <div className="accordion" id="accordionExample">
  <div className="accordion-item ">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button"  data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      <p className='tab_heading ' >Product Categories</p>
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body">
       <div id='tab_1' >
        <ul>
            <li><span className='start' > Bags  </span>       <span className='end' >(4)</span></li>
            <li><span className='start' > Hoodies </span>     <span className='end' >(5)</span></li>
            <li><span className='start' > Jackets </span>     <span className='end' >(25)</span></li>
            <li><span className='start' > Men </span>         <span className='end' >(23)</span></li>
            <li><span className='start' > Sweatshirts </span> <span className='end' >(10)</span></li>
            <li><span className='start' > Tshirts </span>     <span className='end' >(15)</span></li>
            <li><span className='start' > Women </span>       <span className='end' >(24)</span></li>
        </ul>
       </div>
      </div>
    </div>
  </div>
  </div>
  <br />
  <br />
  <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
       <p className='tab_heading' >Price</p>
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <div id='tab_2' >
          <ul>
            <li>$50-$100</li>
            <li>$100-$150</li>
            <li>$150-$200</li>
            <li>$200-$250</li>
            <li>$250-$300</li>
            <li>$1-$50</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  </div>
  <br />
  <br />
  <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
       <p className='tab_heading' >color</p>
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <div id='tab_3' >        
            <ul>
                <li> <button className='color1' ></button>blue<span className='end'>(46)</span> </li>
                <li> <button className='color2' ></button>grey<span className='end'>(46)</span> </li>
                <li> <button className='color3' ></button>green<span className='end'>(46)</span> </li>
                <li> <button className='color4' ></button>red<span className='end'>(46)</span> </li>
                <li> <button className='color5' ></button>yellow<span className='end'>(46)</span> </li>
            </ul>
        </div>
      </div>
    </div>
  </div>
  </div>
  <br />
  <br />
  <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingfour">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsefour" aria-expanded="false" aria-controls="collapsefour">
      <p className='tab_heading' >Size</p>
      </button>
    </h2>
    <div id="collapsefour" className="accordion-collapse collapse" aria-labelledby="headingfour" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <div id='tab_4' >
        <ul>
          <li> large <span className='end' >(46)</span></li>
          <li> medium <span className='end' >(46)</span></li>
          <li>small<span className='end' >(46)</span></li>
        </ul>
        </div>
      </div>
    </div>
  </div>
  </div>
  <br />
  <br />
  <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingfive">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsefive" aria-expanded="false" aria-controls="collapsefive">
      <p className='tab_heading' >Tags</p>
      </button>
    </h2>
    <div id="collapsefive" className="accordion-collapse collapse" aria-labelledby="headingfive" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <div  id='tab_5' >
        <ul>
          <li><span className='bg_1' >clothing  </span> <span className='bg_1' > etc</span> <span className='bg_1'  >   fashion</span></li>
          <li><span className='bg_1'>m11</span><span className='bg_1' >m12</span> <span className='bg_1' >m31</span></li>
          <li><span className='bg_1'>m32</span><span className='bg_1' >m41</span> <span className='bg_1' >m71</span></li>
          <li><span className='bg_1'>m72</span><span className='bg_1' >m81</span> <span className='bg_1' >men</span></li>
          <li><span className='bg_1'>products</span> <span className='bg_1' > women </span> </li>
        </ul>
        </div>
      </div>
    </div>
  </div>
  </div>
  </div>
      </Col>
      <Col>
      <Row className='mx-5' >
      <Col lg={4} md={12} >
      <div id='result_showing' >
      <p> Showing 1–{a} of 47 results </p>
      </div>
       </Col>
      <Col lg={4} md={4} >
      <div id='shop_size' >
      <p >Show <span className='spn1'  onClick={((e)=>{setA([e.target.innerHTML])})}>10</span> <span className='spn1' onClick={((e)=>{setA(e.target.innerHTML)})}  >15</span> <span className='spn1' onClick={((e)=>{setA(e.target.innerHTML)})} >30</span></p>
      </div>
       </Col>
      <Col lg={4} md={4}>
        <div id='row_col_icon' > 
        <i className="fa-solid fa-chart-simple i1"></i><i className="fa-solid fa-list i2 "></i><span>default sorting</span>
     </div>
</Col>
      </Row>
      <Row className='img_row'> 
      {shop_header.map((e,x)=>{  
              return (
                <Col lg={4} md={6}  className='shop_img_hover' key={x} >  
                <Link to={'singleshop/'+ e.cont}>
                <div className='icon_div'>
            <div className='icon_new' >
                <i className="fa-regular fa-heart "></i>
                <i className="fa-solid fa-magnifying-glass"></i>
                <i className="fa-solid fa-bag-shopping"
                  onClick={(()=>{setProp(e)})}></i>
                </div>
                <div className='img_div'> 
                  <img src={imgs[x]}  onMouseOver={((e)=>{e.target.src=himg[x]})} onMouseOut={((e)=>{e.target.src=imgs[x]})} />
                  </div>  
                        <p>{e.name}</p> 
                        <h4>{e.title}</h4>  
                        <p>{e.price}</p> 
                        </div> 
                 </Link> 
              </Col>  
              )
            })} 
     </Row>  
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

export default Shop
