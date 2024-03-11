import React from 'react';
import {Icon} from "../../../../components/icon/Icon";
import styled from "styled-components";
import {theme} from "../../../../Styles/Theme";
import ellipse from "../../../../assets/images/Ellipse 23.svg"
import {font} from "../../../../Styles/Common";

type SpecificationPropsStyle = {
    icon: string
    title: string
    text: string

}
export const Specification = (props:SpecificationPropsStyle) => {
    return (
            <StyledWork>
                <IconWrapper>
                    <Icon iconId={props.icon}/>
                </IconWrapper>
                <SpecificationWrapper>
                    <Title>{props.title}</Title>
                    <Text>{props.text}</Text>
                    <a href="">Lern More</a>
                </SpecificationWrapper>
                </StyledWork>

    );
};
const StyledWork = styled.div`
    display: flex;
    align-items: center;
    gap: 38px;
    padding-left: 15px;
`
const IconWrapper = styled.div`
    content: '';
    width: 69px;
    height: 69px;
    border: 2px solid rgb(253, 216, 216);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    
    &::before {
        content: '';
        border-radius: 50%;
        width: 98px;
        height: 98px;
        border: 8px solid rgb(246, 128, 128);
        opacity: 0.5;
        position: absolute;
    }
    
    &::after {
        content: '';
        width: 98px;
        height: 98px;
        border: 8px solid red;
        border-left: 8px solid transparent;
        border-right: 8px solid ${theme.colors.accent};
        border-top: 8px solid transparent;
        border-bottom: 8px solid ${theme.colors.accent};
        border-radius: 50%;
        transform: rotate(45deg);
        position: absolute;
    }


`
const SpecificationWrapper = styled.div`
display: flex;
flex-direction: column;
    a{   
        ${font({family:"'Rubik', sans-serif", weight: 500, Fmax: 16, Fmin: 16  })};
        color: ${theme.colors.accent};
        line-height: 150%;
        letter-spacing: 0;
        text-align: left;
    }
`
const Title = styled.h3`
    ${font({family:"'Rubik', sans-serif", weight: 500, Fmax: 31, Fmin: 24  })};
    color: ${theme.colors.fontTitle};
    line-height: 140%;
    letter-spacing: 0;
    text-align: left;
`
const Text = styled.span`
    ${font({family:"'Rubik', sans-serif", weight: 400, Fmax: 16, Fmin: 16  })};
    color: ${theme.colors.fontTitle};
    opacity: 0.7;
    line-height: 150%;
    letter-spacing: 0%;
    text-align: left;
`
