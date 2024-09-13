import React, { useEffect } from 'react'
import './ContactMe.css';
import "aos/dist/aos.css";

import MailOutlineIcon from '@mui/icons-material/MailOutline';
import ContactInfoCard from './contactinfocard/ContactInfoCard';
import { cg, din, em, wh } from '../images';
import ContactForm from './contactform/ContactForm';
import { Link } from '@mui/material';
import Aos from 'aos';
const ContactMe = () => {
  useEffect(() => {
    Aos.init()
    
  }, [])
  return (
    <div id='contact'>
   <section className='contact-contanier' id='contact'>
    <h5>Contact Me</h5>
    <div className='contact-content'>
        
        <div style={{flex:1}}>
          <div
            data-aos="flip-left"
          data-aos-duration="1000"
          >
            <ContactInfoCard
            
            iconUrl={em} 
            text="muhammdazam8i@gmail.com"
            />
            </div>
            <div
            data-aos="flip-left"
          data-aos-duration="1000"
          >
             <ContactInfoCard
            
            iconUrl={cg}
            text="https://github.com/MuhammadAzam11"
            />
             </div>
             <div
            data-aos="flip-left"
          data-aos-duration="1000"
          >
              <ContactInfoCard
            iconUrl={din}
            text="www.linkedin.com/in/muhammad-azam-982b57223"
            />
             <div
            data-aos="flip-left"
          data-aos-duration="1000"
          ></div>
              <ContactInfoCard
            iconUrl={wh}
            text="03021790414 "
            />
            </div>
        </div>
        <div style={{flex:'1'}}>
            <ContactForm/>
            
        </div>
    </div>

   </section>
   </div>
  )
}

export default ContactMe