import React from 'react';
import styled from "styled-components";
import {theme} from "../../Styles/Theme";
import {Icon} from "../icon/Icon";


export const Rating = () => {
    return (
        <StyledRating>
            <Stars aria-label="Rating is 4.5 out of 5">
                <Icon iconId={'star'}
                      width={'31px'}
                      height={'31px'}
                      viewBox={"0 0 31 31"}/>
                <Icon iconId={'star'}
                      width={'31px'}
                      height={'31px'}
                      viewBox={"0 0 31 31"}/>
                <Icon iconId={'star'}
                      width={'31px'}
                      height={'31px'}
                      viewBox={"0 0 31 31"}/>
                <Icon iconId={'star'}
                      width={'31px'}
                      height={'31px'}
                      viewBox={"0 0 31 31"}/>
                <Icon iconId={'star'}
                      width={'31px'}
                      height={'31px'}
                      viewBox={"0 0 31 31"}/>
            </Stars>
            <span>4.50</span>
        </StyledRating>
    );
};

const StyledRating = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    
    span {
        color: ${theme.colors.fontTitle};
        font-family: 'Rubik', sans-serif;
        font-size: 16px;
        font-weight: 500;
        line-height: 150%;
        text-align: center;


    }
    
    
`
const Stars = styled.p`
    width: 192px;
    height: 30px;
    color: rgb(253, 174, 56);
    white-space: nowrap;

    
`