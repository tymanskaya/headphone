import React from 'react';
import {Icon} from "../../../components/icon/Icon";
import styled from "styled-components";
import {theme} from "../../../Styles/Theme";

export const Navigation = () => {
    return (
        <NavigationlList>
            <NavigationItem>
                <NavigationlLink href=''>
                    {/* eslint-disable-next-line react/jsx-no-undef */}
                    <Icon iconId={'search'} width={'20px'} height={'20px'} viewBox={'0 0 22 22'}/>
                </NavigationlLink>
            </NavigationItem>
            <NavigationItem>
                <NavigationlLink href=''>
                    {/* eslint-disable-next-line react/jsx-no-undef */}
                    <Icon iconId={'card'} width={'20px'} height={'22px'} viewBox={'0 0 22 24'}/>
                </NavigationlLink>
            </NavigationItem>
            <NavigationItem>
                <NavigationlLink href=''>
                    {/* eslint-disable-next-line react/jsx-no-undef */}
                    <Icon iconId={'person'} width={'16px'} height={'18px'} viewBox={'0 0 18 20'}/>
                </NavigationlLink>
            </NavigationItem>
        </NavigationlList>
    );
};

const NavigationlList = styled.ul`
 display: flex;
    gap: 60px;
    @media ${theme.media.mobile}{
        display: none;
    }
        
`
const NavigationItem = styled.li`
    position: relative;
    &:not(:last-child)::before{
        content: '';
        width: 2px;
        height: 47px;
        background-color: ${theme.colors.iconBG};
        opacity: 0.5;
        display: block;
        position: absolute;
        right: -30px;
    }

`
const NavigationlLink = styled.a`
    background-color: ${theme.colors.iconBG};
    border-radius: 50%;
    width: 50px;
    height: 50px;

    display: flex;
    justify-content: center;
    align-items: center;

    color: ${theme.colors.accent};

    &:hover {
       transform: translateY(-4px);
        
       
       `
