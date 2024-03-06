import React from 'react';
import styled from "styled-components";


export const MenuFooter = () => {
    return (
        <StyleMenuFooter>
                <ul>
                    <li>
                        <a href=""> </a></li>
                    <li>
                        <a href="">About</a></li>
                    <li>
                        <a href="">Product</a></li>
                </ul>
        </StyleMenuFooter>
    );
};

const StyleMenuFooter = styled.nav`
    display: flex;
    max-width: 278px;
    width: 100%;
    border: 2px solid green;
    
    ul {
        display: flex;
        justify-content: space-between;
        gap: 30px;
    }

`
