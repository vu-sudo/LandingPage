import React from 'react'

import "../sass/Provide.scss"
import arrowLogo from "../asset/icon/CaretCircleDoubleRight.svg"
import Aos from 'aos'

function Provide() {
  Aos.init()
  return (
    <div className='provide'  data-aos="fade-up" >
        <div className='provide__container'>
            <div className='provide__header'>
                <h1>Test Yönetimiyle Neler Sağlıyoruz?</h1>
                <p>IoT Destekli Çözümler</p>
            </div>
            <div className='provide__items'>
                <p>Yazılım Kalitesini Arttırıyoruz</p>
                <img src={arrowLogo} alt=""></img>
                <p>Olası Hataları Önceden Belirliyoruz</p>
                <img src={arrowLogo} alt=""></img>
                <p>Oluşabilecek Riskleri Önlüyoruz</p>
                <img src={arrowLogo} alt=""></img>
                <p>Zaman ve Maliyetten Tasarruf Sağlıyoruz</p>
            </div>
        </div>
    </div>
  )
}

export default Provide