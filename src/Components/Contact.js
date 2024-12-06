import React from 'react'
import './Contact.css'
function Contact() {
  return (
   <div className='contact-us'> 
<div className='connect'>
<h2>Connect Us</h2>
<p className='cursor typewriter-animation'>We'd love to hear from you!</p>
     </div>
     <div style={{display:"flex"}}>
     <div className='datas'style={{display:"flex"}}>
        <div>
        <input type='text' placeholder='Name'/>
        <input type='email' placeholder='E-mail'/>
        <input type='number' placeholder='Phone'/>
        <input type='textarea' placeholder='Message'/>
        <button>Send Message</button>
        </div>
        <div className='details' style={{display:"flex"}}>
        <div>
        <h3> U.A.E.</h3>
 <h3>Trident Support Flagpoles, LLC</h3>
 <p>Dubai Investments Park, Dubai</p>
 <p>Tel: +971-4-8830501</p>
 <p> Fax: +971-4-8830502</p>
</div>
<div style={{marginLeft:"100px"}}>
 <h3> U.S.A.</h3>
 <h3>Trident Suppport Corp.</h3>
 <p>San Diego, California</p>
 <p>Tel +1 (858) 693-1129</p>
 <p>Fax: +1 (858) 777-3644</p>
 
</div>
     </div>
     </div>
     </div>
   </div>
  )
}

export default Contact