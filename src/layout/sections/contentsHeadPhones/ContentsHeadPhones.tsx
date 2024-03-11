import React from 'react';
import styled from "styled-components";
import photoP from "../../../assets/images/Rectangle-72.webp"
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SectionTitle} from "../../../components/SectionTitle";
import {Content} from "./content/Content";
import {Container} from "../../../components/Container";
import {theme} from "../../../Styles/Theme";

export const ContentsHeadPhones = () => {
    return (
        <StyleContentsHeadPhones>
            <Container>
                <GridWrapperContents>
                <PhotoWrapper>
                    <PhotoProduct src={photoP}/>
                </PhotoWrapper>
                        <SectionTitle width={"390px"}
                                      textAlign={"left"}>Whatever you get in the box</SectionTitle>
                        {/* eslint-disable-next-line react/jsx-no-undef */}
                        <ListContent>
                            <Content text={'5A Charger'}/>
                            <Content text={'Extra battery'}/>
                            <Content text={'Sophisticated bag'}/>
                            <Content text={'User manual guide'}/>
                        </ListContent>

                </GridWrapperContents>
            </Container>


        </StyleContentsHeadPhones>
    );
};

const StyleContentsHeadPhones = styled.section`
    
   
`
const GridWrapperContents = styled.div`
    display: grid;
    grid-template-columns: 1fr 407px;
    grid-template-rows: 1fr 350px;
    gap: 48px;
 

    
    ${SectionTitle} {
        align-self: end;
    }


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
const PhotoWrapper = styled.div`
    max-width: 662px;
    width: 100%;
    grid-column: 1;
    grid-row: 1/3;
    align-items: center;
    align-self: center;
    justify-content: center;

    @media ${theme.media.tablet} {

        grid-row: 2;
        grid-column: 1;
    }
`
const PhotoProduct = styled.img`
    width: 100%;
    
`
const ListContent = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 40px;
    grid-column: 2;
    grid-row: 2/3;
    align-self: start;

    @media ${theme.media.tablet} {

        grid-row: 3;
        grid-column: 1;
        justify-self: left;
    }

`