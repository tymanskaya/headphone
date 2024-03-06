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

export const Specifications = () => {
    return (
        <StyledSpecifications>
            <Container>
                <FlexWrapper justify={'space-between'}>
                    <TextWrapper>
                        <SectionTitle width={'460px'}
                                      textAlign={'left'}>Good headphones and loud music is all you need</SectionTitle>
                        <SpecificationWrapper>
                            <Specification icon={'battery'} title={'Battery'} text={'Battery 6.2V-AAC codec'}/>
                            <Specification icon={'bluetooth'} title={'Bluetooth'}  text={'Battery 6.2V-AAC codec'} />
                            <Specification icon={'microphone'} title={'Microphone'} text={'Battery 6.2V-AAC codec'}/>
                        </SpecificationWrapper>
                    </TextWrapper>

                <PhotoWrapper>
                    <Photo src={image6}/>
                </PhotoWrapper>
                </FlexWrapper>
            </Container>
       </StyledSpecifications>
    );
};

const StyledSpecifications = styled.section`
    
`
const TextWrapper = styled.div `
    display: flex;
    gap: 61px;
    flex-direction: column;
`
const SpecificationWrapper = styled.div`
display: flex;
    flex-direction: column;
    gap: 42px;
`
const PhotoWrapper = styled.div`
  display: flex;
    align-items: center;
    justify-content: center;
    max-width: 570px;
    width: 100%;
    min-height: 605px;
    outline: 2px solid green;
    background-image: url(${notes}), url(${group53}), url(${group54});
    background-repeat: no-repeat;
    background-position: 100% 0%, 0 100%, 120% 100%;
    
`
const Photo = styled.img`
    max-width: 332px;
    width: 100%;
    outline: 1px solid blue;

`