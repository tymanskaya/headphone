import React from 'react';
import {SectionTitle} from "../../../components/SectionTitle";
import {Specification} from "./specification/Specification";
import image6 from "../../../assets/images/image-6.webp";
import {Container} from "../../../components/Container";
import {S} from "../specifications/Specification_Styles"

const specificationData =[
    {
        icon: 'battery',
        title: 'Battery',
        text: 'Battery 6.2V-AAC codec'
    },
    {
        icon: 'bluetooth',
        title: 'Bluetooth',
        text: 'Battery 6.2V-AAC codec'
    },
    {
        icon: 'microphone',
        title: 'Microphone',
        text: 'Battery 6.2V-AAC codec'
    }
]
export const Specifications: React.FC = () => {
    return (
        <S.Specifications>
            <Container>
                <S.GridWrapper>
                        <SectionTitle width={'460px'}
                                      textAlign={'left'}>Good headphones and loud music is all you need</SectionTitle>
                        <S.SpecificationWrapper>
                            {specificationData.map((spec,index) => {
                                return <Specification icon={spec.icon} key={index}
                                                      title={spec.title}
                                                      text={spec.text}/>
                            })}
                        </S.SpecificationWrapper>
                <S.PhotoWrapper>
                    <S.Photo src={image6}/>
                </S.PhotoWrapper>
                </S.GridWrapper>
            </Container>
       </S.Specifications>
    );
};

