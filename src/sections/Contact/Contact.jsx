import Aos from 'aos'
import React from 'react'

import "./Contact.scss"

function Contact() {
  Aos.init();
  return (
    <div className='contact' data-aos="fade-up" >
        <div className='contact__container'>
            <div className='contact__icon' data-aos="fade-up" >
                <img src={require("@image/Users.png")} alt="" className='contact__icon--ic'/>
                <img src={require("@image/Ellipse 5.png")} alt=""  className='contact__icon--red'/>
            </div>
            <h1 data-aos="fade-up" >Bize Ulaşın</h1>
            <p data-aos="fade-up" >Çözüm, hizmet ve ürünlerimiz hakkında detaylı bilgi için bizimle irtibata geçin.</p>
            <button data-aos="fade-up" >Bize Ulaşın</button>
        </div>
    </div>
  )
}

export default Contact