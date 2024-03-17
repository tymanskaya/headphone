import styled from "styled-components";

// type SlidePropsType={
//     boxShadow: string;
// }

const Slide = styled.div`
    max-width: 323px;
   min-height: 303px;
    height: 100%;
    width: 90%;
    margin: 0 auto;
    box-sizing: border-box;
    border: 1px solid rgba(125, 117, 117, 0.3);
    border-radius: 30px;
  
   

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
    height: 100%;

    
    
    
    
    
`
export const S ={
    Slide,
    SliderContainer
}