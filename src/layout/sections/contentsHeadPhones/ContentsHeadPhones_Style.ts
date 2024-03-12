import {theme} from "../../../Styles/Theme";
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";

const ContentsHeadPhones = styled.section`
    
   
`
const GridWrapperContents = styled.div`
    display: grid;
    grid-template-columns: 1fr 407px;
    grid-template-rows: 1fr 350px;
    gap: 48px;
 

    
    ${SectionTitle} {
        align-self: end;
    }


    @media ${theme.media.tablet}{
        grid-template-columns: 1fr;
        grid-template-rows: 150px 1fr 100%;
        gap: 30px;
        justify-items: center;

        ${SectionTitle} {
            text-align: center;
        }
    }
`
const PhotoWrapper = styled.div`
    max-width: 662px;
    width: 100%;
    grid-column: 1;
    grid-row: 1/3;
    align-items: center;
    align-self: center;
    justify-content: center;

    @media ${theme.media.tablet} {

        grid-row: 2;
        grid-column: 1;
    }
`
const PhotoProduct = styled.img`
    width: 100%;
    
`
const ListContent = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 40px;
    grid-column: 2;
    grid-row: 2/3;
    align-self: start;

    @media ${theme.media.tablet} {

        grid-row: 3;
        grid-column: 1;
        justify-self: left;
    }

`

export const S ={
    ContentsHeadPhones,
    GridWrapperContents,
    PhotoWrapper,
    PhotoProduct,
    ListContent
}