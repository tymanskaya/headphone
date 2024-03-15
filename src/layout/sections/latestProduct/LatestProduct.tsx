import React from 'react';
import {SectionTitle} from "../../../components/SectionTitle";
import {Product} from "./product/Product";
import bluephones from "../../../assets/images/pngwing-4.webp"
import rousephones from "../../../assets/images/pngwing-5.webp"
import greenphones from "../../../assets/images/pngwing-6.webp"
import {Container} from "../../../components/Container";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {S} from "../latestProduct/LatestProduct_Styles"

const productData=[
    {
        src: rousephones,
        name: "Read Headphone",
        price: "256",
        color: '#FFE6EE'
    },
    {
        src: bluephones,
        name: "Blue Headphone",
        price: "235",
        color: '#E6F1FF'
    },
    {
        src: greenphones,
        name: "Green Headphone",
        price: "245",
        color: '#E6FFFB'
    }

]
export const LatestProduct: React.FC = () => {
    return (
        <S.LatestProduct id={'product'}>
            <Container>
                <FlexWrapper direction={'column'} align={'center'} gap={'25px'} wrap={'wrap'}>
                    <SectionTitle>Our Latest Product</SectionTitle>
                    <S.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas facilisis nunc ipsum aliquam, ante. </S.Text>
                    <S.Products>
                        {productData.map((p, index) => {
                            return <Product src={p.src} key={index}
                                            name={p.name}
                                            price={p.price}
                                            color={p.color}/>
                        })}
                    </S.Products>
                </FlexWrapper>
            </Container>
        </S.LatestProduct>
    );
};

