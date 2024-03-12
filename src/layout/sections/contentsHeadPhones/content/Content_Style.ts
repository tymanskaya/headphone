import styled from "styled-components";
import {theme} from "../../../../Styles/Theme";

const Content = styled.li`
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
    
    @media ${theme.media.mobile}{
        max-width: 100%;
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

export const S ={
    Content,
    Text
}