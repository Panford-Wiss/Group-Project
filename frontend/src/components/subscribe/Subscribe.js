import React from 'react'
import './Subscribe.css'
import {FaMapMarkerAlt, FaPhoneAlt, FaFax, FaEnvelope, FaGlobe } from 'react-icons/fa'



const Subscribe = () => {
  return (
   <section id = "subscribe">
     <div className='container contact'>
       <div className='container subscribe'>
     <h2>Contact UGPH NOW!</h2>
       </div>
       <p>
         <FaMapMarkerAlt/>&nbsp; Univerity of Ghana, Legon Accra
       </p>
       <p>
         <FaPhoneAlt/> &nbsp; Phone:  +1230 123 1231
       </p>
       <p>
         <FaFax/> &nbsp; Fax:  +12342762178
       </p>
       <p>
         <FaEnvelope/> &nbsp; Email:  info@ugph.com
       </p>
       <p>
         <FaGlobe/>&nbsp; Website:  www.ugph.edu.gh
       </p>
     </div>
     <div className='container subscribe'>
       <h2>Use The Form Below To Send Us Message</h2>
       <form>
         <div className='form-control'>
           <div>
           <input type="text" placeholder = "Enter your FullName..."/>
             </div>
             <br/>
             <div>
           <input type="email" placeholder = "Enter your Email..."/>
             </div>
            <br/>
             <div>
           <input type="number" placeholder = "Enter your PhoneNumber...."/>
             </div>
             <br/>
             <textarea name='my_textarea' rows= "10" cols="25" spellCheck="true" placeholder='Type your Message Here...'/>
             <div className= 'button-1'>
             <button> Send Message</button>
             </div>
      
         </div>
       </form>
     
         
       </div>
     
      
   </section>
  )
}

export default Subscribe