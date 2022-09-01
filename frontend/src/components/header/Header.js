import React, {useEffect} from 'react'
import './Header.css'
import phoneHeader from "../../assets/phone-header-bg.png"
import Button from '../UI/button/Button'
import "../UI/button/Button.css"
import AOS from 'aos';
import 'aos/dist/aos.css';
import img1 from '../../assets/img1.jpg'




const Header = () => {

  useEffect (()=>{
    AOS.init({
    duration: 1000,
    });
  }, [])

  
  return (
    
    <section id='header'>
      
      <div className='container header'>
        <div className='header-left' data-aos="fade-right">
           <h1>
            <span>WELCOME TO THE UGPH</span>
            <span>OFFICIAL WEBSITE</span>
            <span>DID YOU KNOW?</span>
           </h1>
           <p className='u-text-small u-text-light'>The Minority Leader is the Principal Spokesperson
              for the Minority Caucus in Parliament </p>
          <div className='header-cta'>
            <Button text={'Visit Us'} btnClass={"btn-dark"} href={"#"}/>
            <Button text={'Learn More'} btnClass={"btn-orange"} href={"#faq"}/>
        </div>
          </div>

        <div className='header-right' data-aos="fade-left">
          <img src={phoneHeader} alt="phone"/>
        </div>
      </div>
    
     
        </section>
  )
}

export default Header