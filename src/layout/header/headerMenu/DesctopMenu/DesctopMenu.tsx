import React, {useState} from 'react';
import {Menu} from "../../headerMenu/menu/Menu";
import {S} from "../../headerMenu/HeaderMenu_Styles";


const items= ["Home", "About", "Product", ]
export const DesctopMenu: React.FC<{menuItems: Array<string>}> = (props:{menuItems: Array<string>}) => {

    return (
        <S.StyledDesctopMenu>
            <S.StyledBurgerMenu isOpen={false}>
                <span></span>
                <span></span>
            </S.StyledBurgerMenu>
            <S.MenuPopup isOpen={false}>
                <Menu menuItems={props.menuItems} />
            </S.MenuPopup>
        </S.StyledDesctopMenu>

    );
};


