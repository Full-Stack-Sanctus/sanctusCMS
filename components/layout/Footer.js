import React from 'react'
import { Link } from '../common/Links'


import Logo from '../assets/img/logo.png' 

import Image from 'next/image'

import img from "../assets/images/images.jpg"








const Footer = () => {
	
	
	
	
  return (
    <footer >
      


<div className="footer_section">


        <div className="subscriber_head">

            <h1 id="free_daily_updates">Free Daily Updates</h1>

            
            <form action="" className="subscriber_search_box" method="get"  >
                
                <input className="subscriber_search_bar" type="text" placeholder="Search for datasets, APIs, " />

           
                <button className="subscriber_button" type="submit" >Subscribe</button>
        </form>

        </div>

        

        <div className="subscriber_mid">

        <div className="first_para">
        
            <div className="footer_logo absolute">
            
            
                
                    
                    <Image
      src={Logo}
      alt="Picture of the author"
      className='w-6 h-6'
      width="500px"
      height="500px"
      quality={100}
     
      objectPosition="center" 
      />
                    
                    
                
                    
                   
                    
                    
                     
                       </div>
            
                    <div className="footer_para relative">
                        
                        <h3 id="footer_first_head">Start Your Jounery Now</h3>
                        <br />
               
                        <h5>sanctusobasi@gmail.com</h5>
                        <h5>www.EmpireFx-Dev-Security.com</h5>
                   
                    </div>

               
                </div>
          
                
             
                <div className = "vertical2"></div>   <div className = "horizontal"></div> 
                <div className="middle_para">
                
                    <div className="footer_About">
                        <h5 className="footer_About_para"><a className="footer_About_head" href="#">About</a>
                          </h5>
                        <h5 className="footer_About_para"><a className="footer_About_links" href="">Terms of use</a></h5>
                        <h5 className="footer_About_para"><a className="footer_About_links" href="">Privacy Policy</a></h5>
                        <h5 className="footer_About_para"><a className="footer_About_links" href="">Risk Of Factor</a></h5>
                        <h5 className="footer_About_para"><a className="footer_About_links" href="">Risk Of Factor</a></h5>


                    </div>

                    <div className="footer_About">
                            <h5 className="footer_About_para"><a className="footer_About_head" href="#">Policies</a></h5>
                            <h5 className="footer_About_para"><a className="footer_About_links" href="">Terms of use</a></h5>
                            <h5 className="footer_About_para"><a className="footer_About_links" href="">Privacy Policy</a></h5>
                            <h5 className="footer_About_para"><a className="footer_About_links" href="">Risk Of Factor</a></h5>
                            <h5 className="footer_About_para"><a className="footer_About_links" href="">Risk Of Factor</a></h5>
                    </div>

                    <div className="footer_About">
                        <h5 className="footer_About_para"><a className="footer_About_head" href="#">What's New</a></h5>
                        <h5 className="footer_About_para"><a className="footer_About_links" href="">Terms of use</a></h5>
                        <h5 className="footer_About_para"><a className="footer_About_links" href="">Privacy Policy</a></h5>
                        <h5 className="footer_About_para"><a className="footer_About_links" href="">Risk Of Factor</a></h5>
                        <h5 className="footer_About_para"><a className="footer_About_links" href="">Risk Of Factor</a></h5>


                    </div>

                    <div className="footer_About">
                            <h5 className="footer_About_para"><a className="footer_About_head" href="#">Legal</a></h5>
                            <h5 className="footer_About_para"><a className="footer_About_links" href="">Terms of use</a></h5>
                            <h5 className="footer_About_para"><a className="footer_About_links" href="">Privacy Policy</a></h5>
                            <h5 className="footer_About_para"><a className="footer_About_links" href="">Risk Of Factor</a></h5>
                            <h5 className="footer_About_para"><a className="footer_About_links" href="">Risk Of Factor</a></h5>
                    </div>


                </div>

                

                
                <div className = "vertical"></div><div className = "horizontal2"></div> 

            <div className="last_para">

                <div className="footer_last">
                    <p className="quick_signup">Quick Signup</p>
                    <h5 id="free_daily_updates">This 3 Minute Will Take Your Newslatter To Harry Potter House So Dont Forget To Subscribe</h5>
                    <form action="" className="footer_form_mid" method="get"  >
                
                        <input className="footer_mid_subscribe_bar" type="text" placeholder="Search for datasets, APIs, " />
        
                   
                        <button className="footer_mid_subscriber_button" type="submit" >Subscribe</button>
                </form>
                </div>

                <div className="contacts">
                    <h4>Connect:
                  
                    </h4>
                    <div className="icon_section">
                    <a className="footer_mid_icons" href=""><i className="fab fa-twitter footer_mid_icons_inner"></i></a>
                    <a className="footer_mid_icons" href=""><i className="fab fa-instagram footer_mid_icons_inner"></i></a>
                    <a className="footer_mid_icons" href=""><i className="fab fa-linkedin footer_mid_icons_inner"></i></a>
                    <a className="footer_mid_icons" href=""><i className="fab fa-youtube footer_mid_icons_inner"></i></a>
                    <a className="footer_mid_icons" href=""><i className="fab fa-twitter footer_mid_icons_inner"></i></a>
                </div>
                </div>

            </div>

        </div>

    <div className="subscriber_last">



        <div className="footer_logo_last">


       
       
       
       <Image
      src={Logo}
      alt="Picture of the author"
      width="50px"
      height="50px"
      
    />
    
    
    


        </div>
        <div className = "vertical3"></div>
        <div className = "footer_last_mid_para"><p id="unleash">Unleash The Power Of Security And Development</p></div>
        <div className = "footer_last_last_para">
            <p className="copyright2">COPYRIGHT 2023 &copy; All right reserved</p>
            <p className="copyright2">ALL Trademark are registered to their respective owners </p>
        </div>

    </div>

</div>


    </footer>
  )
}

export default Footer
