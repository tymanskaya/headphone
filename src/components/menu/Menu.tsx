import React from 'react';
import styled from "styled-components";
import {theme} from "../../Styles/Theme";

export const Menu = (props:{menuItems: Array<string>, font?: string}) => {
    return (
        <StyledMenu>
            <ul>
                {props.menuItems.map((item, index) => {
                    return <ListItem key={index}>
                        <Link font={props.font} href="">{item}</Link></ListItem>
                        })}
            </ul>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav`
    ul {
        display: flex;
        gap: 30px;
    }
    
`
const ListItem = styled.li`
`

const Link = styled.a<{font?: string}>`
    color: ${theme.colors.iconBG};
    font-family: 'Rubic', sans-serif;
    font-size: ${props => props.font};
    font-weight: 500;
    line-height: 140%;
    text-align: left;
`
