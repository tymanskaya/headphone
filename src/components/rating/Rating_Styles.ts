import {theme} from "../../Styles/Theme";
import styled from "styled-components";

const Rating = styled.div`
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
export const S ={
    Rating,
    Stars
}