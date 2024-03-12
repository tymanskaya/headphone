import styled, {css} from "styled-components";
import {theme} from "../../Styles/Theme";


const Header = styled.header`
    padding: 20px 0;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 999999;
    background: inherit;
`

const NavigationlList = styled.ul`
 display: flex;
    gap: 60px;
    
    @media ${theme.media.mobile}{
        display: none;
    }
        
`
const NavigationItem = styled.li`
    position: relative;
    &:not(:last-child)::before{
        content: '';
        width: 2px;
        height: 47px;
        background-color: ${theme.colors.iconBG};
        opacity: 0.5;
        display: block;
        position: absolute;
        right: -30px;
    }

`
const NavigationlLink = styled.a`
    background-color: ${theme.colors.iconBG};
    border-radius: 50%;
    width: 50px;
    height: 50px;

    display: flex;
    justify-content: center;
    align-items: center;

    color: ${theme.colors.accent};

    &:hover {
       transform: translateY(-4px);
        
       
       `

export const S = {
    Header,
    NavigationlList,
    NavigationItem,
    NavigationlLink
}