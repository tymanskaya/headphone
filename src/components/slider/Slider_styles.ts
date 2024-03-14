import styled from "styled-components";

const Slide = styled.div`
    max-width: 323px;
   height: 303px;
    width: 90%;
    margin: 0 auto;
    outline: 1px solid green;
    border-radius: 30px;
    //box-shadow: 0px 21px 60px 0px rgba(126, 118, 118, 0.2);
    img{
        max-width: 323px;
        width: 100%;
        max-height: 302px;
        object-fit: scale-down;
        border-radius: 30px;
        //box-shadow: 0px 21px 60px 0px rgba(126, 118, 118, 0.2);
        
    }
    `
const SliderContainer = styled.div`
    width: 100%;
    //outline: solid 1px rgba(126, 118, 118, 0.2);
`
export const S ={
    Slide,
    SliderContainer
}