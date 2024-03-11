import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Product} from "./product/Product";
import bluephones from "../../../assets/images/pngwing-4.webp"
import rousephones from "../../../assets/images/pngwing-5.webp"
import greenphones from "../../../assets/images/pngwing-6.webp"
import {Container} from "../../../components/Container";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {theme} from "../../../Styles/Theme";

export const LatestProduct = () => {
    return (
        <StyleLatestProduct>
            <Container>
                <FlexWrapper direction={'column'} align={'center'} gap={'25px'} wrap={'wrap'}>
                    <SectionTitle>Our Latest Product</SectionTitle>
                    <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas facilisis nunc ipsum aliquam, ante. </Text>
                    <Products>
                        <Product src={rousephones}
                                 name={"Read Headphone"}
                                 price={"256"}
                                 color={'#FFE6EE'}/>
                        <Product src={bluephones}
                                 name={"Blue Headphone"}
                                 price={"235"}
                                 color={'#E6F1FF'}/>
                        <Product src={greenphones}
                                 name={"Green Headphone"}
                                 price={"245"}
                                 color={'#E6FFFB'}/>
                    </Products>
                </FlexWrapper>

            </Container>

        </StyleLatestProduct>
    );
};

const StyleLatestProduct = styled.section`
  
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Text = styled.p`
    max-width: 557px;
    width: 100%;
    text-align: center;
    color: ${theme.colors.fontTitle};
    opacity: 0.7;
    font-family: 'Rubik', sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 150%;
    text-align: center;


`
const Products = styled.div`
 display: flex;
    justify-content: space-around;
    padding-right: 20px;
    width: 100%;
    flex-wrap: wrap;
    gap: 30px;
`