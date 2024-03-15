import React from 'react';
import {Rating} from "../../../../components/rating/Rating";
import {FlexWrapper} from "../../../../components/FlexWrapper";
import {Icon} from "../../../../components/icon/Icon";
import {S} from "../product/Product_Styles"

type ProductPropsStyle = {
    src: string
    name: string
    price: string
    color: string
}
export const Product: React.FC<ProductPropsStyle> = (props:ProductPropsStyle) => {
    return (
        <S.Product>
        <S.PhotoWrapper color={props.color}>
            <S.PhotoHeadPhones src={props.src}/>
            <S.LinkCard href='' color={props.color} title={'Add to Basket'}>
                <Icon iconId={'card1'}/>
            </S.LinkCard>
        </S.PhotoWrapper>
        <Rating/>
        <FlexWrapper justify={"space-between"}>
            <S.NameHeadPhones>{props.name}</S.NameHeadPhones>
            <S.Price>${props.price}</S.Price>
        </FlexWrapper>
    </S.Product>
    )
};

