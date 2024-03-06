import React, {useState} from 'react';
import styled, {css} from "styled-components";

export const BurgerMenu = () => {

    return (
        <StyledBurgerMenu>
            <span></span>
            <span></span>

        </StyledBurgerMenu>
    );
};

const StyledBurgerMenu = styled.button `
    width: 38px;
    height: 25px;
    cursor: pointer;
    z-index: 99999999;
    background-color: transparent;
    border: none;
    display: flex;
    flex-direction: column;
    gap: 3px;
    position: relative;
    span {
        display: block;
        width: 38px;
        height: 3px;
        background-color: rgb(255, 255, 255);
        position: absolute;
        top: 15px;
        

    }
    span:first-child {
        top: 0px;
    }
    &::before {
        content: "";
        display: block;
        width: 29px;
        height: 3px;
        background-color: rgb(255, 255, 255);
        position: absolute;
        top: 8px;
        right: 0px;
    }
    &::after {
        content: "";
        display: block;
        width: 29px;
        height: 3px;
        background-color: rgb(255, 255, 255);
        position: absolute;
        bottom: 0px;
        right: 0px;
        
    }
`