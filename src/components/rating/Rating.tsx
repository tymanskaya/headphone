import React from 'react';
import {Icon} from "../icon/Icon";
import {S} from "../rating/Rating_Styles"

const starsData =[
    {
        iconId: 'star',
        width: '31px',
        height: '31px',
        viewBox: "0 0 31 31"
    },
    {
        iconId: 'star',
        width: '31px',
        height: '31px',
        viewBox: "0 0 31 31"
    },
    {
        iconId: 'star',
        width: '31px',
        height: '31px',
        viewBox: "0 0 31 31"
    },
    {
        iconId: 'star',
        width: '31px',
        height: '31px',
        viewBox: "0 0 31 31"
    },
    {
        iconId: 'star',
        width: '31px',
        height: '31px',
        viewBox: "0 0 31 31"
    }
]
export const Rating: React.FC = () => {
    return (
        <S.Rating>
            <S.Stars aria-label="Rating is 4.5 out of 5">
                {starsData.map((s, index) => {
                    return <Icon iconId={s.iconId} key={index}
                                 width={s.width}
                                 height={s.height}
                                 viewBox={s.viewBox}/>
                })}
            </S.Stars>
            <span>4.50</span>
        </S.Rating>
    );
};

