import React from 'react';
import styled from "styled-components";
import photoP from "../../../assets/images/Rectangle-72.webp"
import {SectionTitle} from "../../../components/SectionTitle";
import {Content} from "./content/Content";
import {Container} from "../../../components/Container";
import {theme} from "../../../Styles/Theme";
import {S} from "../contentsHeadPhones/ContentsHeadPhones_Style"

const contentData =[
    {
        text:'5A Charger'
    },
    {
        text:'Extra battery'
    },
    {
        text:'Sophisticated bag'
    },
    {
        text:'User manual guide'
    }


]
export const ContentsHeadPhones = () => {
    return (
        <S.ContentsHeadPhones>
            <Container>
                <S.GridWrapperContents>
                <S.PhotoWrapper>
                    <S.PhotoProduct src={photoP}/>
                </S.PhotoWrapper>
                        <SectionTitle width={"390px"}
                                      textAlign={"left"}>Whatever you get in the box</SectionTitle>
                        {/* eslint-disable-next-line react/jsx-no-undef */}
                        <S.ListContent>
                            {contentData.map((s, index) => {
                                return  <Content text={s.text} key={index}/>
                            })}
                        </S.ListContent>

                </S.GridWrapperContents>
            </Container>


        </S.ContentsHeadPhones>
    );
};

