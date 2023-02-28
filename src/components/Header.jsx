import React, { useState, useEffect } from 'react'

import "../sass/Header.scss"
function Header() {
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
    console.log(scrollPosition);
    
    
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
    console.log(activeHeader);

    let headerActive = activeHeader ? "" : "hided"
    return (
        <div className={`header ${"header--" + headerActive}`}>
            <div className='header__container'>
            <div className={`header__toggle ${"header__toggle--" + active}`}
            onClick = {() => handleClick()}
            ></div>
                <div className={`header__option ${"header__option--" + activeMenu}`}>
                    <ul className={`header__option__list`}>
                        <li>Çözüm ve Hizmetler</li>
                        <li>Ürünler</li>
                        <li>Teknolojiler</li>
                        <li>İnsan Kaynakları</li>
                        <li>Kurumsal</li>
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