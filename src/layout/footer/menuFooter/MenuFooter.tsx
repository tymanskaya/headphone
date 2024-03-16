import React from 'react';
import {S} from "../menuFooter/menuFooter_Styles"

const items= [
    {
        title: "Home",
        href: "home"
    },
    {
        title: "About",
        href: "specification"
    },
    {
        title: "Product",
        href: "product"
    }
    ]

export const MenuFooter: React.FC  = () => {
    return (
        <S.MenuFooter>
            <ul>
                {items.map((item, index) =>{
                    return (
                        <S.ListItem key={index}>
                        <S.NavLink to={item.href}
                                   smooth={true}>{item.title}</S.NavLink>
                    </S.ListItem>
                    )
                })}
            </ul>
        </S.MenuFooter>
    );
};

