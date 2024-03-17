import React from 'react';
import rectangle from '../../assets/images/Rectangle-76-3-2.webp'
import rectanglee from '../../assets/images/Rectangle-75-3-2.webp'
import rectangle2 from '../../assets/images/Rectangle-74-2.webp'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import {S} from "../slider/Slider_styles"
import "../../Styles/slider.css"

const responsive = {
    0: { items: 1 },
    776: { items: 2 },
    1140: { items: 3,
        itemsCount: 3}
};

type SlidePropsType = {
    src: any,
}


const Slide = (props: SlidePropsType) => {
    return (
        <S.Slide>
         <img src={props.src}/>
        </S.Slide>
    )
}



const items = [
    <Slide src={rectangle}/>,
    <Slide src={rectangle2}/>,
    <Slide src={rectanglee}/>,
    <Slide src={rectangle2}/>,
    <Slide src={rectangle} />,
    <Slide src={rectangle2}/>
];

export const Slider = () => (
    <S.SliderContainer>
        <AliceCarousel
            mouseTracking
            items={items}
            responsive={responsive}
            autoHeight={true}

        />
    </S.SliderContainer>

);

