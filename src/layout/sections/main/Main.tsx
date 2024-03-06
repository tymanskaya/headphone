import React from 'react';
import immage from '../../../assets/images/Immage.webp'
import music from '../../../assets/images/freepik-Music-inject-4_1.webp'
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import {theme} from "../../../Styles/Theme";
import {Button} from "../../../components/Button";
import {ContainerMax} from "../../../components/ContainerMax";


export const Main = () => {
    return (
        <StyledMain>
              <ContainerMax>
                  <FlexWrapper  align={'center'}>
                      <PhotoWrapper>
                          <img src={immage}/>
                      </PhotoWrapper>
                      <StyledInfo>
                          <TextInfo>
                              <SmallText>Hear it. Feel it</SmallText>
                              <Text>Move with the music</Text>
                          </TextInfo>
                          <Price>
                              <NewPrice>$ 435</NewPrice>
                              <OldPrice>$ 465</OldPrice>
                          </Price>
                          <Button>BUY NOW</Button>
                      </StyledInfo>
                  </FlexWrapper>

              </ContainerMax>


        </StyledMain>

    )
        ;
};

const StyledMain = styled.section`
    height: 100vh;
    background: linear-gradient(45.89deg, rgb(255, 146, 146) -7.333%, rgb(222, 81, 80) 90.222%);
    display: flex;



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
    
`
const StyledInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;

`
const TextInfo = styled.div`
    display: flex;
    flex-direction: column;
`

const SmallText = styled.span`
    color: ${theme.colors.iconBG};
    font-family: 'Rubik', sans-serif;
    font-size: 22px;
    font-weight: 500;
    line-height: 140%;
    letter-spacing: 2px;
    text-transform: uppercase;

`
const Text = styled.h1`
    color: rgb(255, 255, 255);
    font-family: 'Rubik', sans-serif;
    display: inline-block;
    max-width: 517px;
    width: 100%;
    font-size: 99.17px;
    font-weight: 700;
    line-height: 100%;
    text-transform: uppercase;
`

const Price = styled.div`
    display: flex;
    gap: 60px;
    
`
const NewPrice = styled.span`
    color: ${theme.colors.iconBG};
    font-family: 'Rubik', sans-serif;
    font-size: 44px;
    font-weight: 700;
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