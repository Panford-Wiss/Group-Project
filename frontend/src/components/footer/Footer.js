import React from 'react'
import './Footer.css'
import {TiSocialGooglePlus} from 'react-icons/ti'
import { FaFacebookF, FaTwitter, FaInstagram,FaYoutube } from 'react-icons/fa'
import {BsMouse} from "react-icons/bs"

const Footer = () => {
  return (
    <footer id='footer'>
      <div className='container footer'>

      <h2>Connect With University of Ghana Parliament House-UGPH</h2>
       <div className='social-icons'>
    
         <a href='https://www.google.com/search?q=parliament+of+university+of+ghana&oq=parliament+of+university+of+ghana&aqs=chrome..69i57j69i60l3.16012j0j7&sourceid=chrome&ie=UTF-8'>
         <div className='social-icon'>
           <TiSocialGooglePlus/>
         </div>
         </a>

         <a href='https://www.facebook.com/University-of-Ghana-Parliament-House-UGPH-560013277420570/'>
         <div className='social-icon'>
           <FaFacebookF/>
         </div>
         </a>

         <a href='https://twitter.com/ug_house'>
         <div className='social-icon'>
           <FaTwitter/>
         </div>
         </a>

         <a href='/#'>
          
         <div className='social-icon'>
           <FaInstagram/>
         </div>
         </a>

          <a href='https://www.youtube.com/results?search_query=parliament+house+of+university+of+ghana'>
          <div className='social-icon'>
           <FaYoutube/>

         </div>
          </a>
        
         </div>
      </div>
      <div className='floating-icon'>
      <a href='#'>
        <BsMouse color = "#fff" size={25} className="mouse"/>
      </a>
      <p>@7th-Cloud</p>
    </div>
    </footer>
  )
}

export default Footer