import React, {useState} from 'react';
import {Menu} from "../../headerMenu/menu/Menu";
import {S} from "../../headerMenu/HeaderMenu_Styles"

const items= ["Home", "About", "Product"]
const navigationMobileStyle=[
    {
        title: 'Search',
    },
    {
        title: 'Basket',
    },
    {
        title: 'Login',
    },
]
export const MobileMenu: React.FC = ()  => {
   const [menuIsOpen, setmenuIsOpen] = useState(false)
    const onBurgerBtnClick = () => {setmenuIsOpen(!menuIsOpen)}
    return (
        <S.MobileMenuStyled>
            <S.StyledBurgerMenu isOpen={menuIsOpen} onClick={onBurgerBtnClick}>
                <span></span>
                <span></span>
            </S.StyledBurgerMenu>
            <S.MenuPopup isOpen={menuIsOpen} onClick={()=> {setmenuIsOpen(false)}}>
                <Menu/>
                <S.NavigationMobile>
                    {navigationMobileStyle.map((s, index) =>{
                        return (
                            <li key={index}>
                                <a href="/public">{s.title}</a>
                            </li>
                        )
                    })}
                </S.NavigationMobile>
            </S.MenuPopup>

        </S.MobileMenuStyled>

    );
};


