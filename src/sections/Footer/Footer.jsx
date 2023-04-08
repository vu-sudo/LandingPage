import React from 'react'

import "./Footer.scss"
import Aos from 'aos'


function Footer() {
  Aos.init()
  const footerData = [
    {
      id: 1,
      title: "Çözüm ve Hizmetler",
      content: ["Yazılım Geliştirme", "Outsourcing", "Kalite ve Süreç Yönetimi", "Danışmanlık", "IoT Destekli Çözümler"]
    },
    {
      id: 2,
      title : "Ürünler",
      content: ["Eğitim Yönetim Sistemi", "İnsan Sermayesi Yönetim Sistemi", "Müşteri İlişkileri Yönetim Sistemi", "İçerik Yönetim Sistemi"]
    },
    {
      id: 3,
      title: "Kurumsal",
      content: ["Hakkımızda", "Belge ve Yetkinlikler", "İş Ortakları"]
    },
    {
      id: 4,
      title: "İletişim",
      content: ["Bilgi İstek Formu", "Uzman Talep Formu"]
    }
  ];
  const bottomFooter = [
    {
      rescr: "© Copyright 2010-2021 - Can Çevik",
      toConnect: ["MediumLogo", "LinkedinLogo", "TwitterLogo", "InstagramLogo", "FacebookLogo"]
    }
  ];
  return (
    <div className='footer' data-aos="fade-up" >
        <div className='footer__container'>
          <div className='footer__contents'>
            {
            footerData.map((items, index) => (
              <div className='footer__text' key={items.id}>
                <h3>{items.title}</h3>
                <ul>
                  {items.content.map((txt, i) => (
                    <li key={i}>{txt}</li>
                  ))}
                </ul>
              </div>
            ))
            }
          </div>

          <div className='footer__bottom'>
            { 
              bottomFooter.map((items,index) => (
                <div key={index}>
                    <div className='footer__refer'>
                      <p>{items.rescr}</p>
                    </div>
                    <div className='footer__refer'>
                      {
                        items.toConnect.map((icon, i) => (
                          <img src={require("@icon/" + icon + ".svg")} alt="icon" key={i}/>
                        ))
                      }
                    </div>
                </div>
              ))
            }
          </div>
        </div>
    </div>
  )
}

export default Footer