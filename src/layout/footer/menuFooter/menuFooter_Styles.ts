import styled from "styled-components";
import {theme} from "../../../Styles/Theme";
import {font} from "../../../Styles/Common";

const MenuFooter = styled.nav`
    ul {
        display: flex;
        gap: 30px;
        
        @media ${theme.media.tablet}{
            flex-direction: column;
            align-items: center;
        }
    }

`
const ListItem = styled.li`
    transition: ${theme.animations.transition};

    &:hover {
        transition: ${theme.animations.transition};
        transform: scale(1.1);
`
const Link = styled.a`
    ${font({family:"'Rubik', sans-serif", weight: 500, Fmax: 22, Fmin: 20  })};
    color: ${theme.colors.iconBG};
    line-height: 140%;
    text-align: left;
    
   
`

export const S ={
    MenuFooter,
    ListItem,
    Link
}