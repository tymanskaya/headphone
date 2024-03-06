import styled from "styled-components";
import {theme} from "../Styles/Theme";

type SectionTitlePropsStyle = {
    width?:string
    textAlign?:string

}

export const SectionTitle = styled.h2<SectionTitlePropsStyle>`

    color: ${theme.colors.fontTitle};
    //font-family: 'Rubic', sans-serif;
    font-size: 44px;
    font-weight: 700;
    line-height: 130%;
    text-align: ${props =>props.textAlign || "center"};
    max-width: ${props => props.width};
    width: 100%;



`