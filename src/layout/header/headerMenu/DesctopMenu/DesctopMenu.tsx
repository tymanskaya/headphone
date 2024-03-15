import React, {useState} from 'react';
import {Menu} from "../../headerMenu/menu/Menu";
import {S} from "../../headerMenu/HeaderMenu_Styles";





export const DesctopMenu: React.FC = () => {
    const [menuIsOpen, setmenuIsOpen] = useState(false)
    const onBurgerBtnClick = () => {setmenuIsOpen(!menuIsOpen)}
    return (
        <S.StyledDesctopMenu>
            <S.StyledBurgerMenu isOpen={menuIsOpen} onClick={onBurgerBtnClick}>
                <span></span>
                <span></span>
            </S.StyledBurgerMenu>
            <S.MenuPopup isOpen={menuIsOpen} onClick={()=> {setmenuIsOpen(false)}}>
                <Menu/>
            </S.MenuPopup>
        </S.StyledDesctopMenu>

    );
};


