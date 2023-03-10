import React from 'react'

import "../sass/Footer.scss"
import Media from "../asset/icon/MediumLogo.svg"
import Lindedin from "../asset/icon/LinkedinLogo.svg"
import Twitter from "../asset/icon/TwitterLogo.svg"
import Instagram from "../asset/icon/InstagramLogo.svg"
import Facebook from "../asset/icon/FacebookLogo.svg"
import Aos from 'aos'


function Footer() {
  Aos.init()
  return (
    <div className='footer' data-aos="fade-up" >
        <div className='footer__container'>
          <div className='footer__contents'>
            <div className='footer__text'>
              <h3 >Çözüm ve Hizmetler</h3>
              <ul className='ul'>
                <li className='li' >Yazılım Geliştirme</li>
                <li className='li' >Outsourcing</li>
                <li className='li' >Kalite ve Süreç Yönetimi</li>
                <li className='li' >Danışmanlık</li>
                <li className='li' >IoT Destekli Çözümler</li>
              </ul>
            </div>
            <div className='footer__text'>
              <h3 >Ürünler</h3>
              <ul className='ul'>
                <li className='li' >Eğitim Yönetim Sistemi</li>
                <li className='li' >İnsan Sermayesi Yönetim Sistemi</li>
                <li className='li' >Müşteri İlişkileri Yönetim Sistemi</li>
                <li className='li' >İçerik Yönetim Sistemi</li>
              </ul>
            </div>
            <div className='footer__text'>
              <h3 >Kurumsal</h3>
              <ul className='ul'>
                <li className='li' >Hakkımızda</li>
                <li className='li' >Belge ve Yetkinlikler</li>
                <li className='li' >İş Ortakları</li>
              </ul>
            </div>
            <div className='footer__text'>
              <h3 >İletişim</h3>
              <ul className='ul'>
                <li className='li' >Bilgi İstek Formu</li>
                <li className='li' >Uzman Talep Formu</li>
              </ul>
            </div>
          </div>

          <div className='footer__bottom'>
            <div className='footer__refer' >
              <p >© Copyright 2010-2021 - Can Çevik</p>
            </div>
            <div className='footer__refer'>
              <img  src={Media} alt="icon"/>
              <img  src={Lindedin} alt="icon"/>
              <img  src={Twitter} alt="icon"/>
              <img  src={Instagram} alt="icon"/>
              <img  src={Facebook} alt="icon"/>

            </div>
          </div>
        </div>
    </div>
  )
}

export default Footer