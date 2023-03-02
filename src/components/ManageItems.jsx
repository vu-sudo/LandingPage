import Aos from 'aos'
import React from 'react'

import "../sass/ManageItems.scss"
function ManageItems({items}) {
  Aos.init();
  return (

    <div className='items'  data-aos="fade-up" >
        <div className='items__container'>
            <img src={require("../asset/icon/" + items.logo + ".svg")} alt=""></img>
            <h2>{items.title}</h2>
            <p>{items.desc}</p>
        </div>
    </div>
  )
}

export default ManageItems