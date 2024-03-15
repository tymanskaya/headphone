import {theme} from "../../../../Styles/Theme";
import {font} from "../../../../Styles/Common";
import styled from "styled-components";

const Product = styled.div`
    display: flex;
    min-height: 500px;
    max-width: 332px;
    width: 100%;
    flex-direction: column;
    gap: 30px;
    

`
const PhotoWrapper = styled.div<{ color: string }>`
  max-width: 332px;
    width: 100%;
        min-height: 331px;
        border-radius: 30px;
    margin-top: 54px;
    position: relative;
    background: ${props => props.color};
    
`
const LinkCard = styled.a<{ color: string }>`
    width: 80px;
    height: 80px;
    border-radius: 50px;
    border: 6px solid ${theme.colors.iconBG};
    background: ${props => props.color};
    position: absolute;
    top: -23px;
    right: -30px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: ${theme.animations.transition};

    &:hover {
        transform: scale(1.2);
       

    }
`
const PhotoHeadPhones = styled.img`
    position: absolute;
    top: -54px;
    left: 24px;
    max-width: 255px;
    width: 100%;
 
`
const NameHeadPhones = styled.span`
    ${font({family:"'Rubik', sans-serif", weight: 400, Fmax: 22, Fmin: 18  })};
    color: ${theme.colors.fontTitle};
    line-height: 140%;
    text-align: left;



`
const Price = styled.span`
    ${font({family:"'Rubik', sans-serif", weight: 500, Fmax: 22, Fmin: 18  })};
    color: ${theme.colors.fontTitle};
    line-height: 140%;
    text-align: center;
    white-space: nowrap;


`
export const S ={
    Product,
    PhotoWrapper,
    LinkCard,
    PhotoHeadPhones,
    NameHeadPhones,
    Price
}