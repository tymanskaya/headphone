import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../components/FlexWrapper";
import {Logo} from "../../components/logo/Logo";
import {MenuFooter} from "./menuFooter/MenuFooter";
import {Icon} from "../../components/icon/Icon";
import {Menu} from "../../components/menu/Menu";
import {theme} from "../../Styles/Theme";
import {Container} from "../../components/Container";

const items= ["Home", "About", "Product"]
export const Footer = () => {
    return (
        <StyleFooter>
            <Container>
                <FlexWrapper justify={'space-between'} align={'center'}>
                    <Logo/>
                    <Menu menuItems={items} direction={'row'}/>
                    <SocialList>
                        <SocialItem>
                            <SocialLink href=''>
                                {/* eslint-disable-next-line react/jsx-no-undef */}
                                <Icon iconId={'inst'} width={'21px'} height={'21px'} viewBox={'0 0 23 23'}/>
                            </SocialLink>
                        </SocialItem>
                        <SocialItem>
                            <SocialLink href=''>
                                {/* eslint-disable-next-line react/jsx-no-undef */}
                                <Icon iconId={'twitter'} width={'23px'} height={'18px'} viewBox={'0 0 24 20'}/>
                            </SocialLink>
                        </SocialItem>
                        <SocialItem>
                            <SocialLink href=''>
                                {/* eslint-disable-next-line react/jsx-no-undef */}
                                <Icon iconId={'face'} width={'11px'} height={'20px'} viewBox={'0 0 13 22'}/>
                            </SocialLink>
                        </SocialItem>
                    </SocialList>
                </FlexWrapper>
            </Container>
        </StyleFooter>
    );
};

const StyleFooter = styled.footer`
    background: ${theme.colors.secondaryBG};
    padding: 62px 0 61px 0;
    
  
    
`
const SocialList = styled.ul`
 display: flex;
    gap: 35px;
`
const SocialItem = styled.li`

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
  

    }

`