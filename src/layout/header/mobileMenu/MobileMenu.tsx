import React from 'react';
import {Menu} from "../../../components/menu/Menu";
import {Navigation} from "../navigation/Navigation";

const items= ["Home", "About", "Product"]
export const MobileMenu = () => {
    return (
        <div>
            <Menu menuItems={items} direction={'column'}/>
            <Navigation/>
        </div>
    );
};

