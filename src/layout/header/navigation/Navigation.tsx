import React from 'react';
import {Icon} from "../../../components/icon/Icon";
import {S} from "../Header_Styles"


const navigationData =[
    {
        iconId: 'search',
        width: '20px',
        height: '20px',
        viewBox: '0 0 22 22'
    },
    {
        iconId: 'card',
        width: '20px',
        height:'22px',
        viewBox: '0 0 22 24'
    },
    {
        iconId: 'person',
        width: '16px',
        height: '18px',
        viewBox:'0 0 18 20'
    }
]
export const Navigation: React.FC = () => {
    return (
        <S.NavigationlList>
                {navigationData.map((s, index) => {
                    return (
                        <S.NavigationItem key={index}>
                            <S.NavigationlLink href=''>
                                {/* eslint-disable-next-line react/jsx-no-undef */}
                                <Icon iconId={s.iconId}
                                      width={s.width}
                                      height={s.height}
                                      viewBox={s.viewBox}/>
                            </S.NavigationlLink>
                        </S.NavigationItem>
                    )
                })}
        </S.NavigationlList>
    );
};


