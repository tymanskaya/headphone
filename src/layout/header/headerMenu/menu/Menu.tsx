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
                        <S.Link href={`#${item.href}`}>{item.title}</S.Link>
                    </S.ListItem>
                )})}
            </ul>
        </S.StyledMenu>
    );
};


