import React from 'react';
import styled from "styled-components";
import {Icon} from "../icon/Icon";
import {theme} from "../../Styles/Theme";
import {GlobalStyle} from "../../Styles/GlobalStyled";

export const Menu = (props:{menuItems: Array<string>, direction: string}) => {
    return (
        <StyledMenu>
            <ul>
                {props.menuItems.map((item, index) => {
                    return <ListItem key={index}>
                        <Link href="">{item}</Link></ListItem>
                        })}
            </ul>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav<{direction?: string}>`
    ul {
        display: flex;
        flex-direction: ${props => props.direction};
        gap: 30px;
        
        
    }
    
`
const ListItem = styled.li`
`

const Link = styled.a`
    color: ${theme.colors.iconBG};
    font-family: 'Rubic', sans-serif;
    font-size: 22px;
    font-weight: 500;
    line-height: 140%;
    text-align: left;


`
