import React, {useState} from 'react';
import styled, {css} from "styled-components";
import {Menu} from "../../../components/menu/Menu";
import {Navigation} from "../navigation/Navigation";
import {theme} from "../../../Styles/Theme";

const items= ["Home", "About", "Product"]
export const HeaderMenu = () => {

    return (
        <HeaderMenuStyled>
            <StyledBurgerMenu isOpen={true}>
                <span></span>
                <span></span>
            </StyledBurgerMenu>
            <MenuPopup isOpen={true}>
                <Menu menuItems={items} direction={'column'}/>
                <Navigation/>
            </MenuPopup>

        </HeaderMenuStyled>

    );
};

const HeaderMenuStyled = styled.div`

`

const StyledBurgerMenu = styled.button<{isOpen: boolean}> `
    width: 38px;
    height: 25px;
    cursor: pointer;
    z-index: 99999999;
    background-color: transparent;
    border: none;
    display: flex;
    flex-direction: column;
    gap: 3px;
    position: relative;
    span {
        display: block;
        width: 38px;
        height: 3px;
        background-color: rgb(255, 255, 255);
        position: absolute;
        top: 15px;
    }
    
    ${props => props.isOpen && css<{isOpen: boolean}>`
        background-color: rgb(255, 255, 255, 0);
`}
    span:first-child {
        top: 0px;
        ${props => props.isOpen && css<{isOpen: boolean}>`
        background-color: rgb(255, 255, 255, 0);
`}
    }
    &::before {
        content: "";
        display: block;
        width: 29px;
        height: 3px;
        background-color: rgb(255, 255, 255);
        position: absolute;
        top: 8px;
        right: 0px;
        ${props => props.isOpen && css<{isOpen: boolean}>`
        transform: rotate(-45deg) translateY(0);
`}
    }
    &::after {
        content: "";
        display: block;
        width: 29px;
        height: 3px;
        background-color: rgb(255, 255, 255);
        position: absolute;
        bottom: 0px;
        right: 0px;
        ${props => props.isOpen && css<{isOpen: boolean}>`
            transform: rotate(-45deg) translateY(0);
`}
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
    
    
`