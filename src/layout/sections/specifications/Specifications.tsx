import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SectionTitle} from "../../../components/SectionTitle";
import {Specification} from "./specification/Specification";
import image6 from "../../../assets/images/image-6.webp";
import {Container} from "../../../components/Container";
import notes from "../../../assets/images/freepik-Notes-inject-2.webp";
import group53 from "../../../assets/images/Group-53.webp";
import group54 from "../../../assets/images/Group-54.webp";
import {theme} from "../../../Styles/Theme";

export const Specifications = () => {
    return (
        <StyledSpecifications>
            <Container>
                <GridWrapper>
                        <SectionTitle width={'460px'}
                                      textAlign={'left'}>Good headphones and loud music is all you need</SectionTitle>
                        <SpecificationWrapper>
                            <Specification icon={'battery'} title={'Battery'} text={'Battery 6.2V-AAC codec'}/>
                            <Specification icon={'bluetooth'} title={'Bluetooth'}  text={'Battery 6.2V-AAC codec'} />
                            <Specification icon={'microphone'} title={'Microphone'} text={'Battery 6.2V-AAC codec'}/>
                        </SpecificationWrapper>

                <PhotoWrapper>
                    <Photo src={image6}/>
                </PhotoWrapper>
                </GridWrapper>
            </Container>
       </StyledSpecifications>
    );
};

const StyledSpecifications = styled.section`
    
`
const GridWrapper = styled.div`
    display: grid;
    grid-template-columns: 460px 1fr;
    grid-template-rows: 1fr 1fr;
   
    
    @media ${theme.media.tablet}{
        grid-template-columns: 1fr;
        grid-template-rows: 150px 1fr 100%; 
        gap: 30px;
        justify-items: center;
        
        ${SectionTitle} {
            text-align: center;
        }
    }

    `
const SpecificationWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 42px;
    grid-column: 1;
    grid-row: 2;

    @media ${theme.media.tablet} {
        background-image: none;
        grid-row: 3;
        grid-column: 1;
        justify-self: left;
    }

    

    
`
const PhotoWrapper = styled.div`
    grid-column: 2;
    grid-row: 1/4;
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 570px;
    width: 100%;
    //min-height: 605px;
    background-image: url(${notes}), url(${group53}), url(${group54});
    background-repeat: no-repeat;
    background-position: 100% 0, 0 100%, 120% 100%;
    
    
    @media ${theme.media.tablet} {
        order: 2;
        background-image: none;
        grid-row: 2;
        grid-column: 1;
        
        
    }
    
`
const Photo = styled.img`
    max-width: 332px;
    width: 100%;
    
    @media ${theme.media.mobile}{
        max-width: 260px;
        width: 100%;
        
    }

`