import React from 'react';
import {S} from "../../headerMenu/HeaderMenu_Styles"

export const Menu = (props:{menuItems: Array<string>}) => {
    return (
        <S.StyledMenu>
            <ul>
                {props.menuItems.map((item, index) => {
                    return <S.ListItem key={index}>
                        <S.Link href="">{item}</S.Link></S.ListItem>
                        })}
            </ul>
        </S.StyledMenu>
    );
};


