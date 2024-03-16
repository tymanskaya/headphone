import React from 'react';
import {FlexWrapper} from "../../components/FlexWrapper";
import {Logo} from "../../components/logo/Logo";
import {Icon} from "../../components/icon/Icon";
import {Container} from "../../components/Container";
import {MenuFooter} from "./menuFooter/MenuFooter";
import {S} from "../footer/Footer_Styles"

const socialItemData =[
    {
    iconId: 'inst',
    width: '21px',
    height: '21px',
    viewBox: '0 0 23 23'
    },
    {
        iconId: 'twitter',
        width: '23px',
        height: '18px',
        viewBox: '0 0 24 20'
    },
    {
        iconId: 'face',
        width: '11px',
        height: '20px',
        viewBox: '0 0 13 22'
    }

]
export const Footer: React.FC = () => {
    return (
        <S.Footer>
            <Container>
                <FlexWrapper justify={'space-between'} align={'center'} wrap={'wrap'}>
                    <Logo/>
                    <MenuFooter/>
                    <S.SocialList>
                        {socialItemData.map((s, index) => {
                            return (
                                <S.SocialItem key={index}>
                                    <S.SocialLink href=''>
                                        {/* eslint-disable-next-line react/jsx-no-undef */}
                                        <Icon iconId={s.iconId}
                                              width={s.width}
                                              height={s.height}
                                              viewBox={s.viewBox}/>
                                    </S.SocialLink>
                                </S.SocialItem>
                            )
                        })}
                    </S.SocialList>
                </FlexWrapper>
            </Container>
        </S.Footer>
    );
};

