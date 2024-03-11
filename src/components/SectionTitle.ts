import styled from "styled-components";
import {theme} from "../Styles/Theme";
import {font} from "../Styles/Common";

type SectionTitlePropsStyle = {
    width?:string
    textAlign?:string


}

export const SectionTitle = styled.h2<SectionTitlePropsStyle>`
    ${font({family:"'Rubik', sans-serif", weight: 700, Fmax: 44, Fmin: 30  })};
    color: ${theme.colors.fontTitle};
    line-height: 130%;
    text-align: ${props =>props.textAlign || "center"};
    max-width: ${props => props.width};
    width: 100%;



`