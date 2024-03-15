import React from 'react';
import styled from "styled-components";
import {Slider} from "../../../components/slider/Slider";
import {SectionTitle} from "../../../components/SectionTitle";
import {Container} from "../../../components/Container";
import {FlexWrapper} from "../../../components/FlexWrapper";

export const LastCollection: React.FC = () => {
    return (
        <StyledLastCollection id={"latestCollection"}>
            <Container>
                <FlexWrapper direction={'column'} align={'center'} gap={'70px'}>
                    <SectionTitle width={'470px'}
                                  textAlign={'center'} >Our Latest colour collection 2021</SectionTitle>
                    <Slider/>
                </FlexWrapper>

            </Container>

        </StyledLastCollection>
    );
};

const StyledLastCollection = styled.section`

    display: flex;
    flex-direction: column;
    align-items: center;

`