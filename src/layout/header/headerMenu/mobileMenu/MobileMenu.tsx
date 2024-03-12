import React from 'react';
import {Menu} from "../../headerMenu/menu/Menu";
import {S} from "../../headerMenu/HeaderMenu_Styles"

const items= ["Home", "About", "Product"]
export const MobileMenu: React.FC<{menuItems: Array<string>}> = (props:{menuItems: Array<string>})  => {
    return (
        <S.MobileMenuStyled>
            <S.StyledBurgerMenu isOpen={false}>
                <span></span>
                <span></span>
            </S.StyledBurgerMenu>
            <S.MenuPopup isOpen={false}>
                <Menu menuItems={props.menuItems} />
                <S.NavigationMobile>
                    <li>
                        <a href="/public">Search</a>
                    </li>
                    <li>
                        <a href="/public">Basket</a>
                    </li>
                    <li>
                        <a href="/public">Login</a>
                    </li>
                </S.NavigationMobile>
            </S.MenuPopup>

        </S.MobileMenuStyled>

    );
};


