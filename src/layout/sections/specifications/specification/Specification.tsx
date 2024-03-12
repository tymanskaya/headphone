import React from 'react';
import {Icon} from "../../../../components/icon/Icon";
import {S} from "../specification/Specification_Styles"

type SpecificationPropsStyle = {
    icon: string
    title: string
    text: string

}
export const Specification: React.FC<SpecificationPropsStyle> = (props:SpecificationPropsStyle) => {
    return (
            <S.Specification>
                <S.IconWrapper>
                    <Icon iconId={props.icon}/>
                </S.IconWrapper>
                <S.SpecificationWrapper>
                    <S.Title>{props.title}</S.Title>
                    <S.Text>{props.text}</S.Text>
                    <a href="">Lern More</a>
                </S.SpecificationWrapper>
                </S.Specification>

    );
};

