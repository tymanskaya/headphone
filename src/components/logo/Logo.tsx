import React from 'react';
import logot from "../../assets/images/logo.png"
import {animateScroll as scroll} from "react-scroll";

export const Logo: React.FC = () => {
    return (

            <a onClick={()=>{scroll.scrollToTop()}}>
              <img src={logot} alt="logo"/>
            </a>

    );
};



