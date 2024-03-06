import React from 'react';
import styled from "styled-components";
import photoP from "../../../assets/images/Rectangle-72.webp"
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SectionTitle} from "../../../components/SectionTitle";
import {Content} from "./content/Content";
import {Container} from "../../../components/Container";

export const ContentsHeadPhones = () => {
    return (
        <StyleContentsHeadPhones>
            <Container>
                <FlexWrapper gap={'17px'}>
                <PhotoWrapper>
                    <PhotoProduct src={photoP}/>
                </PhotoWrapper>
                    <ContentWrapper>
                        <SectionTitle width={"390px"}
                                      textAlign={"left"}>Whatever you get in the box</SectionTitle>
                        {/* eslint-disable-next-line react/jsx-no-undef */}
                        <ListContent>
                            <Content text={'5A Charger'}/>
                            <Content text={'Extra battery'}/>
                            <Content text={'Sophisticated bag'}/>
                            <Content text={'User manual guide'}/>
                        </ListContent>
                    </ContentWrapper>

                </FlexWrapper>
            </Container>


        </StyleContentsHeadPhones>
    );
};

const StyleContentsHeadPhones = styled.section`
    
   
`
const PhotoWrapper = styled.div`
    max-width: 662px;
    width: 100%;
`
const PhotoProduct = styled.img`
    width: 100%;
    
`
const ContentWrapper = styled.div`
 display: flex;
    flex-direction: column;
    gap: 48px;
`
const ListContent = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 40px;

`