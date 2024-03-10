import React from 'react';
import {Menu} from "../../../components/menu/Menu";
import {theme} from "../../../Styles/Theme";
import styled, {css} from "styled-components";

const items= ["Home", "About", "Product"]
export const MobileMenu = () => {
    return (
        <MobileMenuStyled>
            <StyledBurgerMenu isOpen={false}>
                <span></span>
                <span></span>
            </StyledBurgerMenu>
            <MenuPopup isOpen={false}>
                <Menu menuItems={items} font={'30px'}/>
                <NavigationMobile>
                    <li>
                        <a href="/">Search</a>
                    </li>
                    <li>
                        <a href="/">Basket</a>
                    </li>
                    <li>
                        <a href="/">Login</a>
                    </li>
                </NavigationMobile>
            </MenuPopup>

        </MobileMenuStyled>

    );
};

const MobileMenuStyled = styled.div`
    display: none;
    
    @media ${theme.media.mobile}{
        display: block;
    }

`

const StyledBurgerMenu = styled.button<{isOpen: boolean}> `
    position: relative;
    width: 38px;
    height: 25px;
    cursor: pointer;
    z-index: 99999999;
    background-color: transparent;
    border: none;
    display: flex;
    flex-direction: column;
    gap: 9px;

    span {
        display: block;
        width: 38px;
        height: 3px;
        background-color: rgb(255, 255, 255);
        border-radius: 3px;
        position: relative;

        ${props => props.isOpen && css<{isOpen: boolean}>`
            background-color: rgb(255, 255, 255, 0);
        `}

        &:first-child::after{
            content: "";
            display: block;
            width: 29px;
            height: 3px;
            background-color: rgb(255, 255, 255);
            border-radius: 3px;
            position: absolute;
            top: 6px;
            right: 0;
            ${props => props.isOpen && css<{isOpen: boolean}>`
                transform: rotate(-45deg) translateY(0);
                top: 11px;
                width: 40px;



            `}
        }
        &:nth-child(2)::before {
            content: "";
            display: block;
            width: 29px;
            height: 3px;
            background-color: rgb(255, 255, 255);
            border-radius: 3px;
            position: absolute;
            top: 6px;
            right: 0;
            ${props => props.isOpen && css<{isOpen: boolean}>`
                transform: rotate(45deg) translateY(0);
                width: 40px;
                top: 0;



            `}
        }
    }


`
const MenuPopup = styled.div<{isOpen: boolean}>`
    position: fixed;
    background-color: ${theme.colors.accent};
    opacity: 0.8;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 99999;
    display: none;


    ${props => props.isOpen && css<{isOpen: boolean}>`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 20px;
    `
    }
    ul{
        flex-direction: column;
        text-align: center;

    }
`

const NavigationMobile = styled.ul`
    display: flex;
    flex-direction: row;
    gap: 20px;

    
    &::before{
        content: '';
        width: 100%;
        height: 3px;
        background: ${theme.colors.iconBG};
        
    }
    a {
        color: ${theme.colors.iconBG};
        font-family: 'Rubic', sans-serif;
        font-size: 30px;
        font-weight: 500;
    }
`

