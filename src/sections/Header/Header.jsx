import Aos from 'aos';
import React, { useState, useEffect } from 'react'

import "./Header.scss"
function Header() {
    Aos.init();
    const [activeNav, setActiveNav] = useState(false);
    const handleClick = () => {
        setActiveNav(activeNav => !activeNav);
    }
    let active = activeNav ? "active" : "";
    let activeMenu = activeNav ? "activeMenu" : "";
    
    const [scrollPosition, setScrollPosition] = useState(0);
    const [activeHeader, setActiveHeader] = useState(true);
    const handleScroll = () => {
        const pos = window.pageYOffset;
        setScrollPosition(pos);
        setActiveNav(false);
      }
    // console.log(scrollPosition);
    
    
    useEffect(() => {
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, []);
    const scollOffHeader = () => {
        if(scrollPosition >= 40) {
            setActiveHeader(activeHeader => false);
        } else {
            setActiveHeader(activeHeader => true);
        }
   }
    useEffect(() => {
        scollOffHeader();
     })
    // console.log(activeHeader);

    let headerActive = activeHeader ? "" : "hided"
    const links = [
        "Çözüm ve Hizmetler",
        "Ürünler",
        "Teknolojiler",
        "İnsan Kaynakları",
        "Kurumsal"
    ] 
    return (
        <div className={`header ${"header--" + headerActive}`} id = "header">
            <div className='header__container'>
            <div className={`header__toggle ${"header__toggle--" + active}`}
            onClick = {() => handleClick()}
            ></div>
                <div className={`header__option ${"header__option--" + activeMenu}`}>
                    <ul className={`header__option__list`}>
                        {
                            links.map((items, index) => (
                                <li onClick={() => setActiveNav(false)} key={index}>{items}</li>
                            ))
                        }
                    </ul>
                </div>

            <div className='header__btn'>
                <button>İletişim</button>
            </div>
        </div>
    </div>
  )
}

export default Header