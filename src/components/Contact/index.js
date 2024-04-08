import { Component } from "react";
import "./index.css"
import { TiStar } from "react-icons/ti";
import { LuInstagram } from "react-icons/lu";
import { CiLinkedin } from "react-icons/ci";

import { MdKeyboardArrowDown} from "react-icons/md";





class Contact extends Component{
    state = {isActivelinks:false, isActivemetta:false, isActivesocial:false}


    onchangefollow = () =>{
        this.setState(prevState =>({isActivesocial:!prevState.isActivesocial}))
    }
    
    onchangemetta = () =>{
        this.setState(prevState =>({isActivemetta:!prevState.isActivemetta}))
    }
    
    onchangequckLink = () =>{            
        this.setState(prevState =>({isActivelinks:!prevState.isActivelinks}))
    }

MobileView = ()=>{        
    const {isActivelinks, isActivemetta, isActivesocial} = this.state
           
    return(
        <div className="contact-container">
            <div className="first-section">
            <div className="mail-section">
                <h3 className="side-header">BE THE FIRST TO KNOW</h3>
                <p className="contact-para">Sign up for updates from metta muse</p>
                <div className="input-sub-con">
                    <input className="email-input" placeholder="Enter your e-mail" type="text" />
                    <button type="button" className="sub-btn">SUBSCRIBE</button>
                </div>
            </div>
            <hr/>
            <h3 className="side-header">CALL US</h3>
            <div className="address-section">
                <p className="contact-para rmsp">+44 221 133 5360</p>
                <TiStar size={6}  className="star"/>
                <p className="contact-para rmsp">customercare@mettamuse.com</p>
            </div>
            <hr/> 
            <div className="currency"> <h3 className="side-header addsp">CURRENCY</h3>
                <div className="usd-div">
                    <img src="https://cdn.britannica.com/33/4833-004-828A9A84/Flag-United-States-of-America.jpg" className="usa" alt="usa"/>
                    <TiStar size={6}  className="star"/>
                    <h4 className="side-header usd">USD</h4>
                </div>
            </div>
            
            </div>
            <hr />
            <div className="second-section">
            <div className="combine">
                <div className="menu-section">
                <h3 className="side-header">metta muse <MdKeyboardArrowDown size={20} onClick={this.onchangemetta}/> </h3>
                {isActivemetta && <>
                    <p className="contact-para">About Us</p>
                <p className="contact-para">Stores</p>
                <p className="contact-para">Artisans</p>
                <p className="contact-para">Boutiques</p>
                <p className="contact-para">Contact Us</p>
                <p className="contact-para">EU Compliances Docs</p>
                </>}
            </div>
            <hr/>
            <div className="links-section">
            <h3 className="side-header">QUICK LINKS <MdKeyboardArrowDown size={20} onClick={this.onchangequckLink}/> </h3>

        {isActivelinks && <>
            <p className="contact-para">Orders & Shipping</p>
                <p className="contact-para">Join/Login as a Seller</p>
                <p className="contact-para">Payment & Pricing</p>
                <p className="contact-para">Return & Refunds</p>
                <p className="contact-para">FAQs Us</p>
                <p className="contact-para">privacy Policy</p>
                <p className="contact-para">Terms & Conditions</p>
        </>}
            </div>
            </div>
            <hr/>
            <div className="follow-section">
                <h3 className="side-header">FOLLOW US <MdKeyboardArrowDown size={20} onClick={this.onchangefollow}/></h3>
                {isActivesocial && <div className="contact-icons-con">
                <LuInstagram size={23} className="social"/>
                <CiLinkedin size={23} className="social"/>
                </div>}
                <hr/>
                <h3 className="side-header">metta muse ACCEPTS</h3>
                <div className="payment-links">
                    <img src="https://res.cloudinary.com/dwwunc51b/image/upload/v1712494797/pay-removebg-preview_1_rion92.png" className="link-img" alt="payment"/>
                    <img src="https://res.cloudinary.com/dwwunc51b/image/upload/v1712494671/pay-removebg-preview_jn52ot.png" className="link-img" alt="payment"/>
                    
                </div>
            </div>
            </div>
            <div className="cop">  <p className="contact-para copy">Copyright © 2023 mettamuse. All rights reserved.</p>
       </div>
           </div>
    )    

}



DesktopView = ()=>{
    return(
        <div className="contact-container">
            <div className="first-section">
            <div className="mail-section">
                <h3 className="side-header">BE THE FIRST TO KNOW</h3>
                <p className="contact-para">Sign up for updates from metta muse</p>
                <div className="input-sub-con">
                    <input className="email-input" placeholder="Enter your e-mail" type="text" />
                    <button type="button" className="sub-btn">SUBSCRIBE</button>
                </div>
            </div>
            <div className="address-section">
                <h3 className="side-header">CONTACT US</h3>
                <p className="contact-para">+44 221 133 5360</p>
                <p className="contact-para">customercare@mettamuse.com</p>
                <h3 className="side-header addsp">CURRENCY</h3>
                <div className="usd-div">
                    <img src="https://cdn.britannica.com/33/4833-004-828A9A84/Flag-United-States-of-America.jpg" className="usa" alt="usa"/>
                    <TiStar size={6}  className="star"/>
                    <h4 className="side-header usd">USD</h4>
                </div>
                <p className="contact-para">Transactions will be completed in Euros and a currency reference is available on hover.</p>
            </div>
            </div>
            <hr />
            <div className="second-section">
            <div className="combine">
                <div className="menu-section">
                <h3 className="side-header">metta muse</h3>
                <p className="contact-para">About Us</p>
                <p className="contact-para">Stores</p>
                <p className="contact-para">Artisans</p>
                <p className="contact-para">Boutiques</p>
                <p className="contact-para">Contact Us</p>
                <p className="contact-para">EU Compliances Docs</p>
            </div>
            <div className="links-section">
            <h3 className="side-header">QUICK LINKS</h3>
                <p className="contact-para">Orders & Shipping</p>
                <p className="contact-para">Join/Login as a Seller</p>
                <p className="contact-para">Payment & Pricing</p>
                <p className="contact-para">Return & Refunds</p>
                <p className="contact-para">FAQs Us</p>
                <p className="contact-para">privacy Policy</p>
                <p className="contact-para">Terms & Conditions</p>
            </div>
            </div>
            <div className="follow-section">
                <h3 className="side-header">FOLLOW US</h3>
                <div className="contact-icons-con">
                <LuInstagram size={23} className="social"/>
                <CiLinkedin size={23} className="social"/>
                </div>
                <h3 className="side-header">metta muse ACCEPTS</h3>
                <div className="payment-links">
                    <img src="https://res.cloudinary.com/dwwunc51b/image/upload/v1712494797/pay-removebg-preview_1_rion92.png" className="link-img" alt="payment"/>
                    <img src="https://res.cloudinary.com/dwwunc51b/image/upload/v1712494671/pay-removebg-preview_jn52ot.png" className="link-img" alt="payment"/>
                    
                </div>
            </div>
            </div>
            <div className="cop">  <p className="contact-para copy">Copyright © 2023 mettamuse. All rights reserved.</p>
       </div>
        </div>
    )
}


render(){

    return(
        <>
        
        <div className="mobile">
            {this.MobileView()}
        </div>
         
        <div className="desktop">
            {this.DesktopView()}
        </div>
        </>
    )
}
    }

export default Contact