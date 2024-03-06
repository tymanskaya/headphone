import React from 'react';
import styled from "styled-components";
import {Logo} from "../../components/logo/Logo";
import {Menu} from "../../components/menu/Menu";
import {BurgerMenu} from "./burgerMenu/BurgerMenu";
import {Icon} from "../../components/icon/Icon";
import {Container} from "../../components/Container";
import {FlexWrapper} from "../../components/FlexWrapper";
import {theme} from "../../Styles/Theme";


export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <FlexWrapper justify={'space-between'} align={'center'}>
                <Logo/>
                <SocialList>
                    <SocialItem>
                        <SocialLink href=''>
                            {/* eslint-disable-next-line react/jsx-no-undef */}
                            <Icon iconId={'search'} width={'20px'} height={'20px'} viewBox={'0 0 22 22'}/>
                        </SocialLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialLink href=''>
                            {/* eslint-disable-next-line react/jsx-no-undef */}
                            <Icon iconId={'card'} width={'20px'} height={'22px'} viewBox={'0 0 22 24'}/>
                        </SocialLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialLink href=''>
                            {/* eslint-disable-next-line react/jsx-no-undef */}
                            <Icon iconId={'person'} width={'16px'} height={'18px'} viewBox={'0 0 18 20'}/>
                        </SocialLink>
                    </SocialItem>
                </SocialList>
                <BurgerMenu/>
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
const SocialList = styled.ul`
 display: flex;
    gap: 60px;
`
const SocialItem = styled.li`
    position: relative;
    &:not(:last-child)::before{
        content: '';
        width: 2px;
        height: 47px;
        background-color: ${theme.colors.iconBG};
        opacity: 0.5;
        display: block;
        position: absolute;
        right: -30px;
    }

`
const SocialLink = styled.a`
    background-color: ${theme.colors.iconBG};
    border-radius: 50%;
    width: 50px;
    height: 50px;

    display: flex;
    justify-content: center;
    align-items: center;

    color: ${theme.colors.accent};

    &:hover {
       transform: translateY(-4px);
        
       
       `
