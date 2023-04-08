import Aos from 'aos'
import React from 'react'

import "./Reference.scss"

function Reference() {
    Aos.init();
    const logos = [
        {
            id: 1,
            col: ["BorusanLogo"]
        },
        {
            id: 2,
            col: ["InstandLogo", "BookMyShowLogo"]
        },
        {
            id: 3,
            col: ["AkbankLogo", "AkcanSALogo", "TumunuGorLogo"]
        },
        {
            id: 4,
            col: ["AkatasLogo", "OLALogo"]
        },
        {
            id: 5,
            col: ["AmazonLogo"],
        }
    ];

  return (
    <div className='reference' data-aos="fade-up" >
        <div className='reference__container' >
            <div className='reference__header'>
                <h1>Referanslarımız</h1>
                <p>Bize güvenen ve beraber çalıştığımız iş ortaklarımız</p>
            </div>
            <div className='reference__com'>
                <div className='reference__items'>
                    {
                        logos.map((items, index) => (
                            <div className='reference__items__box' key={items.id}>
                                {
                                    items.col.map((logo, index) => (
                                        <div className='box' data-aos="fade-up" key={index}>
                                            <img src={require("@logo/" + logo + ".png")} alt="" />
                                        </div>
                                    ))
                                }
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default Reference