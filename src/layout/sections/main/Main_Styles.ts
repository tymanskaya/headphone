import {theme} from "../../../Styles/Theme";
import {font} from "../../../Styles/Common";
import styled from "styled-components";
import music from '../../../assets/images/freepik-Music-inject-4_1.webp'
import {Button} from "../../../components/Button";

const Main = styled.section`
    min-height: 100vh;
    height: 100%;
    background: inherit;
    display: flex;
    margin-top: 108px;
    



`
const PhotoWrapper = styled.div`
    background-image: url(${music});
    background-repeat: space;
    background-size: cover;
    background-position: -140px -5px;
    max-width: 630px;
    width: 100%;
   
 
    img{
        max-width: 570px;
        width: 100%;
        
        
    }
    
    @media ${theme.media.tablet} {
        background-image: none;
    }
    
   
    
`
const StyledInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;

    ${Button}:hover {
        background-color: rgb(246, 245, 245);
  

    }

    ${Button}:active {

        background: rgb(255, 255, 255);
    }

`
const TextInfo = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 25px;
`
const SmallText = styled.span`
    ${font({family:"'Rubik', sans-serif", weight: 500, Fmax: 22, Fmin: 20  })};
    color: ${theme.colors.iconBG};
    line-height: 140%;
    letter-spacing: 2px;
    text-transform: uppercase;

`
const Text = styled.h1`
    ${font({family:"'Rubik', sans-serif", weight: 700, Fmax: 99, Fmin: 40  })};
    color: rgb(255, 255, 255);
    display: inline-block;
    max-width: 517px;
    width: 100%;
    line-height: 100%;
    text-transform: uppercase;
    
`
const Price = styled.div`
    display: flex;
    gap: 60px;
    white-space: nowrap;
    
`
const NewPrice = styled.span`
    ${font({family:"'Rubik', sans-serif", weight: 700, Fmax: 44, Fmin: 28  })};
    color: ${theme.colors.iconBG};
    line-height: 130%;
    text-align: left;
    position: relative;
    
    &::before{
        content: '';
        width: 2px;
        height: 57px;
        background-color: ${theme.colors.iconBG};
        display: block;
        position: absolute;
        right: -30px;
    }


`
const OldPrice = styled.span`
    ${font({family:"'Rubik', sans-serif", weight: 500, Fmax: 31, Fmin: 26  })};
    color: ${theme.colors.iconBG};
    opacity: 0.5;
    font-family: 'Rubik', sans-serif;
    font-size: 31px;
    font-weight: 500;
    line-height: 140%;
   
    text-decoration-line: line-through;
    display: flex;
    align-items: center;


`

export const S ={
    Main,
    PhotoWrapper,
    StyledInfo,
    TextInfo,
    SmallText,
    Text,
    Price,
    NewPrice,
    OldPrice
}