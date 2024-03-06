import React from 'react';
import styled from "styled-components";
import {Icon} from "../../../../components/icon/Icon";

type ContentPropsType = {
    text: string;
}
export const Content = (props:ContentPropsType) => {
    return (
        <StyledContent>
           <Icon iconId={'arrowOne'}/>
            <Text>{props.text}</Text>
        </StyledContent>
    );
};

const StyledContent = styled.li`
    display: flex;
    position: relative;
    max-width: 292px;
    width: 100%;
    padding-left: 20px;
    &:not(:last-child)::before {
        content: '';
        width: 100%;
        height: 1px;
        background-color: rgb(0, 0, 0);
        opacity: 0.1;
        position: absolute;
        bottom: -20px;
        left: 0;
        



    }
`
const Text = styled.span`
    color: rgb(0, 0, 0);
    opacity: 0.7;
    font-family: 'Rubik', sans-serif;
    font-size: 22px;
    font-weight: 400;
    line-height: 140%;
    text-align: left;



`