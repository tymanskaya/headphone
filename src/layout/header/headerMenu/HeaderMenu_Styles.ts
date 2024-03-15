import {theme} from "../../../Styles/Theme";
import styled, {css} from "styled-components";
import {font} from "../../../Styles/Common";

//Menu

const StyledMenu = styled.nav`
    ul {
        display: flex;
        gap: 30px;
        flex-direction: column;
    }
    
`
const ListItem = styled.li`
`
const Link = styled.a`
    ${font({family:"'Rubik', sans-serif", weight: 500, Fmax: 30, Fmin: 30  })};
    color: ${theme.colors.iconBG};
    font-family: 'Rubic', sans-serif;
    font-weight: 500;
    line-height: 140%;
    text-align: left;
`

//MobileMenu


const MobileMenuStyled = styled.div`
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
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transform: translateX(-100%);
    transition: 1s ease-in-out;
    gap: 30px;
    ul{
        flex-direction: column;
        text-align: center;
        gap: 10px;
        transition: 1s ease-in-out;

    }
        ${props => props.isOpen && css<{isOpen: boolean}>`
    transform: translateX(0);
            & ul {
                gap: 30px;
            }
`}
    
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

//DekstopMenu

const StyledDesctopMenu = styled.div`

`


export const S ={
    StyledMenu,
    ListItem,
    Link,
    MobileMenuStyled,
    StyledBurgerMenu,
    MenuPopup,
    NavigationMobile,
    StyledDesctopMenu



}