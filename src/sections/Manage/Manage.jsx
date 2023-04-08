import React from 'react'

import "./Manage.scss"
import Manage_List from '@data/List_Mange'
import ManageItems from '@components/ManageItems/ManageItems'

function Manage() {
  return (
    <div data-aos="fade-up" className='manage'>
        <div className='manage__container'>
            <div className='manage__desc'  data-aos="fade-up" >
                <h2>Kalite ve Süreç Yönetimi</h2>
                <p>Müşterilerimizin yüksek kalite seviyelerini koruyabilmeleri için farklı sektörlerde tecrübe kazanmış uzman kadrolarımızla Proje Yönetimi, İş Analizi ve Test Yönetimi hizmetleri sunmaktayız.</p>
            </div>
            <div className='manage__items' >
                {
                  Manage_List.map((items, index) => (
                    <ManageItems  items = {items} key = {index}></ManageItems>
                  ))
                }
            </div>
        </div>
    </div>
  )
}

export default Manage