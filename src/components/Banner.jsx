import React from 'react'

import "../sass/Banner.scss"
import BanerImage from "../asset/image/Rectangle_1.png"
function Banner() {
  return (
    <div className='banner' id='banner'>
      <div className='banner__image'>
        <img src={BanerImage} alt="banner_image" />
      </div>
      <div className='banner__image--filter'></div>
      <div className='banner__container'>
        <div className='banner__content'>
          <h1>Bilgi Teknolojilerinde 23 Yıllık Tecrübe</h1>
          <p>Müşterilerimizin yüksek kalite seviyelerini koruyabilmeleri için farklı sektörlerde tecrübe kazanmış uzman kadrolarımızla Proje Yönetimi, İş Analizi ve Test Yönetimi hizmetleri sunmaktayız.</p>
          <div className='banner__input'>
              <input type="text" placeholder='Mail bültenimize kayıt ol' />
              <button>Kayıt Ol</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner