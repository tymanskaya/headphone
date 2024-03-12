import styled from "styled-components";
import {theme} from "../../../Styles/Theme";


const LatestProduct = styled.section`
  
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

export const S ={
    LatestProduct,
    Text,
    Products
}