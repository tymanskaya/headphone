import React from 'react';
import styled from "styled-components";
import {Logo} from "../../components/logo/Logo";
import {HeaderMenu} from "./burgerMenu/HeaderMenu";
import {Container} from "../../components/Container";
import {FlexWrapper} from "../../components/FlexWrapper";
import {Navigation} from "./navigation/Navigation";


export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <FlexWrapper justify={'space-between'} align={'center'}>
                <Logo/>
                <Navigation/>
                <HeaderMenu/>
                </FlexWrapper>
            </Container>

        </StyledHeader>

    )

};

const StyledHeader = styled.header`
    padding: 20px 0;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 9999;

`
