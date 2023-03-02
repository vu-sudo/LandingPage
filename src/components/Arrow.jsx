import React, { useEffect } from 'react'
import { useState } from 'react';

import { RxDoubleArrowUp } from "react-icons/rx";
import "../sass/Arrow.scss"
function Arrow() {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [activeScroll, setActiveScroll] = useState(false);
    const handleScroll = () => {
        const pos = window.pageYOffset;
        setScrollPosition(pos);
        setActiveScroll(true);
    }
    useEffect(() => {
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, []);
      console.log(scrollPosition);
    const scollOnScroll = () => {
        if(scrollPosition >= 200) {
            setActiveScroll(activeScroll => true);
        } else {
            setActiveScroll(activeScroll => false);
        }
    }
    useEffect(() => {
        scollOnScroll();
     })
     let active = activeScroll ? "active" : "";
  return (
    <div>
        <p class={`arrow ${"arrow--" + active}`} href = "#banner">
            <a href="#banner" class="animate">
                <RxDoubleArrowUp className='icon'/>
            </a></p>
    </div>
  )
}

export default Arrow