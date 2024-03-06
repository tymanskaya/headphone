import React from 'react';
import styled from "styled-components";
import rectangle from '../../assets/images/Rectangle-76-3-2.webp'

export const Slider = () => {
    return (
        <Slide>
            <img src={rectangle}/>
        </Slide>
    );
};

const Slide = styled.div`
    max-width: 500px;
    outline: 1px solid #e78fbf;

`