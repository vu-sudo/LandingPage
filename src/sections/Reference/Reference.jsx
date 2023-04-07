import Aos from 'aos'
import React from 'react'

import "./Reference.scss"

function Reference() {
    Aos.init();
  return (
    <div className='reference' data-aos="fade-up" >
        <div className='reference__container' >
            <div className='reference__header'>
                <h1>Referanslarımız</h1>
                <p>Bize güvenen ve beraber çalıştığımız iş ortaklarımız</p>
            </div>
            <div className='reference__com'>
                <div className='reference__items'>
                    <div className='reference__items__box' >
                        <div className='box'data-aos="fade-up" >
                            <img src={require("../../asset/image/logoCloud/image 6.png")} alt="company" />
                        </div>
                    </div>
                    <div className='reference__items__box'>
                        <div className='box'data-aos="fade-up" >
                            <img src={require("../../asset/image/logoCloud/image 5.png")} alt="company" />
                        </div>
                        <div className='box'data-aos="fade-up" >
                            <img src={require("../../asset/image/logoCloud/BookMyShow Logo.png")} alt="company" />
                        </div>
                    </div>
                    <div className='reference__items__box'>
                        <div className='box'data-aos="fade-up" >
                            <img src={require("../../asset/image/logoCloud/image 2.png")} alt="company" />
                        </div>
                        <div className='box'data-aos="fade-up" >
                            <img src={require("../../asset/image/logoCloud/image 3.png")} alt="company" />
                        </div>
                        <div className='box'data-aos="fade-up" >
                            <img src={require("../../asset/image/logoCloud/Frame 4.png")} alt="company" />
                        </div>

                    </div>
                    <div className='reference__items__box'>
                        <div className='box'data-aos="fade-up" >
                            <img src={require("../../asset/image/logoCloud/image 4.png")} alt="company" />
                        </div>
                        <div className='box'data-aos="fade-up" >
                            <img src={require("../../asset/image/logoCloud/OLA logo.png")} alt="company" />
                        </div>
                    </div>
                    <div className='reference__items__box'>
                        <div className='box'data-aos="fade-up" >
                            <img src={require("../../asset/image/logoCloud/Amazon Logo.png")} alt="company" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Reference