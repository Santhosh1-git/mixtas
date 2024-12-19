import React from 'react'
import Header_for_all from '../../Components/Header_for_all'
import { Container,Row,Col } from 'react-bootstrap'
import '../../assets/Admins.css'
import { Link } from 'react-router-dom'
import { TextField } from '@mui/material'
import img1 from '../../images/Admin_1/admin1.png'
import img2 from '../../images/Blog_page/2.jpg'
import img3 from '../../images/Admin_1/admin_2.webp'
import Endbar from '../../Components/Endbar' 

function Ad_min1() {
  return (
    <>
        <Header_for_all/>
        <Container> 
          <div id='ad_head1'>
        <h4>Fashion Forward: Emerging Trends You Need to Know</h4>
        <img src={img1} alt="not found" /><span> admin <span className='text-secondary' >. December 19, 2024</span> </span>
          </div>
          <Row>
            <Col lg={12}>
              <img src={img2} alt="not found" id='admin1_img'/>
              <div id={'content_ad1'} >
              <p>What makes a purchase “worth it”? The answer is different for everybody, so we’re asking some of the coolest, most shopping-savvy people we know—from small-business owners to designers, artists, and actors—to tell us the story behind one of their most prized possessions</p>
              <br />
              <h5>Who?</h5>
              <p>Phoebe Sung and Peter Buer met and fell in love as fashion school students in mid-aughts Boston. After they graduated, the couple began to craft together as a way to decompress from their corporate fashion jobs. They made jewelry, then bags, then home goods like wall hangings, which were ultimately the gateway to launching their now-beloved New York–based textile brand Cold Picnic.</p>
              </div>
            </Col>
            <Col lg={12} >
              <div id='content_adi2' >
                <center>
                <img src={img3} alt="not found" />
                </center>
                <p>Phoebe and Peter in their Ridgewood home</p>
                <br />
                <p>Since 2010, Phoebe and Peter have been designing colorful, abstract rugs and bath mats that double as works of art. Nearly every collection is informed by old movies, either in composition (they print out stills and trace shapes over them) or palette (think retro hues). “There was one series of films that we were really inspired by that were all set in the desert, so the colors were very chalky and powdery but still saturated,” Phoebe shares. “We still use a lot of peaches and mints and citrons and tans.”</p>
                
                <h5>What?</h5>

                <p>The couple’s 1910s Ridgewood, Queens, home is filled with their own creations, including a HAY sofa (the Mags Soft Low sectional to be exact) that they reupholstered using hand-tufted rugs after the sofa’s original pink tweed got ruined. “We were trying to think of what kind of upholstery we could actually live with and the rugs are pretty durable,” Phoebe says. “We thought that something a little bit heartier with a lot of color and design would survive our family.”</p>
                <p>For the sofa’s seat and back cushions, Phoebe and Peter chose designs from their Beau Travail collections, which are an homage to the Claire Denis film of the same name. But instead of using the handmade, high-low pile wool rugs that are sold on the Cold Picnic website, Peter tufted the rugs himself—twice. “He bought a frame and a gun and he watched all these videos, but we used the wrong glue backing, so it was too stiff and he had to do it all over again,” Phoebe laments.</p>
                
                <h5>Where and When?</h5>

                <p>Peter undertook this grueling project at home in 2021—injuring his back in the process. “Everything he does, he does very intensely. He just wanted to finish it, but then he put his back out and couldn’t walk or get out of bed for a week after. He paid for it, but it was worth it,” Phoebe says, adding that a local upholsterer then covered the HAY sofa in the hand-tufted rugs and a greenish-mustard wide wale corduroy.</p>
                
                <h5>Why?</h5>

                <p>In addition to being durable and stylish, the one of a kind sectional holds lots of sentimental value for the couple. “I actually had a mustard corduroy sofa growing up, so it’s nostalgic, but it is our take on it,” Phoebe explains. “And that’s how we think about designing. That’s why we always use old movies and these ’70s powdery palettes. It’s exactly our personal style, which is hard to encapsulate.”</p>
                
                <p>Phoebe and Peter paired their special sofa with one of the rugs that’s featured in the design, the Denis Denis, as well as a vintage coffee table, a Noguchi-style pendant, and a papier-mâché tulip lamp they made during the pandemic. “We thought using one of the rugs that it was based on would be too much, so we made a brown rug to go with it, but actually that was too much,” Phoebe says. “The effect was more low-key when we just really went for it and did the whole room in the same print.”</p>
                <br />
                <div id='ad1_icon' >
                <i class="fa-brands fa-square-facebook"></i><i class="fa-brands fa-square-twitter"></i><i class="fa-brands fa-linkedin"></i>
                </div>
                <br />
                <br />
                <h4 className='htag' >
                  <Link to='/Ad_min6' reloadDocument = {true} >  <i class="fa-solid fa-arrow-left leftl "></i>  <span className='prw' >Prev Post </span> </Link>
                  <Link to='/Ad_min2' reloadDocument = {true}  > <span className='next' > Next Post</span> <i class="fa-solid fa-arrow-right rightr "> </i> </Link>
                </h4>
              </div>
              
            </Col>
            <Col lg={12} >
            <div id='admin_contact' >
                  <h5>Leave a Reply</h5>
                  <p>Your email address will not be published. Required fields are marked *</p>
                  <br />
                  <table>
                    <tr>
                      <label>Comment *
                      </label>
                    </tr>
                    <tr>
                    <textarea  ></textarea>
                    </tr>
                  </table>

                  <br />

                  <table>
                    <tr>
                    <th><TextField variant="outlined" label="Name" type="email"  className='textf' /></th>
                    <th><TextField variant="outlined" label="Email" type="email" className='textf' /></th>
                    <th><TextField variant="outlined" label="Website" type="email" className='textf' /></th>
                    </tr>
                    <tr>
                      <td><input type="checkbox" /> Save my name, email, and website.</td>
                    </tr>
                  </table>
                  <br />
                  <br />
                    <button className=' btn lastbtn'>post comment</button>
                  </div>
            </Col>           
          </Row>
        </Container>
        <Endbar/>
    </>
  )     
}       

export default Ad_min1
