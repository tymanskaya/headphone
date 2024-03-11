import React from 'react';
import styled from "styled-components";
import {theme} from "../../../Styles/Theme";
import {font} from "../../../Styles/Common";


export const MenuFooter = (props:{menuItems: Array<string>}) => {
    return (
        <StyledMenuFooter>
            <ul>
                {props.menuItems.map((item, index) => {
                    return <ListItem key={index}>
                        <Link href="">{item}</Link></ListItem>
                })}
            </ul>
        </StyledMenuFooter>
    );
};

const StyledMenuFooter = styled.nav`
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
`

const Link = styled.a`
    ${font({family:"'Rubik', sans-serif", weight: 500, Fmax: 22, Fmin: 20  })};
    color: ${theme.colors.iconBG};
    line-height: 140%;
    text-align: left;
`
