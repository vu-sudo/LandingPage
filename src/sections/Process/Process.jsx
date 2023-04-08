import React from 'react'

import "./Process.scss"
import image1 from "@image/Illustration.jpg"
import image2 from "@image/Illustration1.png"
import Aos from 'aos'


function Process() {
    Aos.init();
    // const processData = [
    //     {
    //         id: 1,
    //         img: "image1",
    //         title: "Kalite ve Süreç Yönetimi",
    //         content: "Deneyimli kadromuz; birçok farklı sektörden deneyimli, PMP® sertifikasına sahip, uzman proje yöneticilerinden oluşmaktadır. Projelerinizin yönetimine destek olmak, zayıf olduğunu düşündüğünüz alanları güçlendirmek, uluslararası geçerliliği olan PMI® metodolojisini şirketinizde uygulamak ve geliştirmek için yanınızdayız.",
    //     },
    //     {
    //         id: 2,
    //         img: "image2", 
    //         title: "Test Yönetimi ve Analizi",
    //         content: "Deneyimli kadromuz; birçok farklı sektörden deneyimli, PMP® sertifikasına sahip, uzman proje yöneticilerinden oluşmaktadır. Projelerinizin yönetimine destek olmak, zayıf olduğunu düşündüğünüz alanları güçlendirmek, uluslararası geçerliliği olan PMI® metodolojisini şirketinizde uygulamak ve geliştirmek için yanınızdayız."
    //     }
    // ]
    // chổ này không map được vì css riêng từng phần :(
  return (
    <div className='process'>
        <div className='process__container'>
            <div className='process__content1'>
                <div className='process__content1__image' data-aos="fade-up" >
                    <img src={image1} alt="image1" />
                </div>
                <div className='process__content1__text'>
                    <div>
                        <h1 data-aos="fade-up" >Kalite ve Süreç Yönetimi</h1>
                        <p data-aos="fade-up" >Deneyimli kadromuz; birçok farklı sektörden deneyimli, PMP® sertifikasına sahip, uzman proje yöneticilerinden oluşmaktadır. Projelerinizin yönetimine destek olmak, zayıf olduğunu düşündüğünüz alanları güçlendirmek, uluslararası geçerliliği olan PMI® metodolojisini şirketinizde uygulamak ve geliştirmek için yanınızdayız.</p>
                        <button data-aos="fade-up" >Keşfet</button>
                    </div>
                </div>
            </div>

            <div className='process__content2'>
                <div className='process__content2__image' data-aos="fade-up" >
                        <img src={image2} alt="image2" />
                </div>

                <div className='process__content2__text'>
                    <div>
                        <h1 data-aos="fade-up" >Test Yönetimi ve Analizi</h1>
                        <p data-aos="fade-up" >Deneyimli kadromuz; birçok farklı sektörden deneyimli, PMP® sertifikasına sahip, uzman proje yöneticilerinden oluşmaktadır. Projelerinizin yönetimine destek olmak, zayıf olduğunu düşündüğünüz alanları güçlendirmek, uluslararası geçerliliği olan PMI® metodolojisini şirketinizde uygulamak ve geliştirmek için yanınızdayız.</p>
                        <button data-aos="fade-up" >Keşfet</button>    
                    </div> 
                </div>
            </div>
        </div>
    </div>
  )
}

export default Process