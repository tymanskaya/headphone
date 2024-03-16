import React from 'react';
import {S} from "../../headerMenu/HeaderMenu_Styles"

const items= [
    {
        title: "Home",
        href: "home"
    },
    {
        title: "Latest colour collection",
        href: "latestCollection"
    },
    {
        title: "Specifications",
        href: "specification"
    },
    {
        title: "Product",
        href: "product"
    },
    {
        title:"Contain",
        href: "contain"
    }
]
export const Menu = () => {
    return (
        <S.StyledMenu>
            <ul>
                {items.map((item, index) =>{
                    return (
                    <S.ListItem key={index}>
                        <S.NavLink to={item.href}
                                   smooth={true}>{item.title}</S.NavLink>
                    </S.ListItem>
                )})}
            </ul>
        </S.StyledMenu>
    );
};


