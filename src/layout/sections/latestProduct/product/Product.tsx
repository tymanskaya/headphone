import React from 'react';
import styled from "styled-components";
import {Rating} from "../../../../components/rating/Rating";
import {FlexWrapper} from "../../../../components/FlexWrapper";
import {theme} from "../../../../Styles/Theme";
import cart from "../../../../assets/images/Vector-10.svg"
import {Icon} from "../../../../components/icon/Icon";

type ProductPropsStyle = {
    src: string
    name: string
    price: string
    color: string
}
export const Product = (props:ProductPropsStyle) => {
    return (
        <StyledProduct>
        <PhotoWrapper color={props.color}>
            <PhotoHeadPhones src={props.src}/>
            <LinkCard href='' color={props.color}>
                <Icon iconId={'card1'}/>
            </LinkCard>

        </PhotoWrapper>
        <Rating/>
        <FlexWrapper justify={"space-between"}>
            <NameHeadPhones>{props.name}</NameHeadPhones>
            <Price>${props.price}</Price>
        </FlexWrapper>
    </StyledProduct>
    )
};

const StyledProduct = styled.div`
display: flex;

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
    
 

`

const PhotoHeadPhones = styled.img`
    position: absolute;
    top: -54px;
    left: 24px;
    //max-width: 255px;
    width: 100%;
 
`
const NameHeadPhones = styled.span`
    color: ${theme.colors.fontTitle};
    font-family: 'Rubik', sans-serif;
    font-size: 22px;
    font-weight: 400;
    line-height: 140%;
    text-align: left;



`
const Price = styled.span`
    color: ${theme.colors.fontTitle};
    font-family: 'Rubik', sans-serif;
    font-size: 22px;
    font-weight: 500;
    line-height: 140%
    text-align: center;


`