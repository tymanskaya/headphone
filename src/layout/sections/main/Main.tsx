import React from 'react';
import immage from '../../../assets/images/Immage.webp'
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Button} from "../../../components/Button";
import {ContainerMax} from "../../../components/ContainerMax";
import {S} from "../main/Main_Styles"


export const Main: React.FC = () => {
    return (
        <S.Main id={"home"}>
              <ContainerMax>
                  <FlexWrapper  align={'center'} wrap={'wrap'} justify={'space-around'}>
                      <S.PhotoWrapper>
                          <img src={immage}/>
                      </S.PhotoWrapper>
                      <S.StyledInfo>
                          <S.TextInfo>
                              <S.SmallText>Hear it. Feel it</S.SmallText>
                              <S.Text>Move with the music</S.Text>
                          </S.TextInfo>
                          <S.Price>
                              <S.NewPrice>$ 435</S.NewPrice>
                              <S.OldPrice>$ 465</S.OldPrice>
                          </S.Price>
                          <Button>BUY NOW</Button>
                      </S.StyledInfo>
                  </FlexWrapper>
              </ContainerMax>
        </S.Main>
    )
        ;
};

