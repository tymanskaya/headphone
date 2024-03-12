import React from 'react';
import {S} from "../menuFooter/menuFooter_Styles"


export const MenuFooter: React.FC <{menuItems: Array<string>}> = (props:{menuItems: Array<string>}) => {
    return (
        <S.MenuFooter>
            <ul>
                {props.menuItems.map((item, index) => {
                    return <S.ListItem key={index}>
                        <S.Link href="">{item}</S.Link></S.ListItem>
                })}
            </ul>
        </S.MenuFooter>
    );
};

