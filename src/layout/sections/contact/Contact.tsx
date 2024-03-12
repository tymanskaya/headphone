import React from 'react';
import {SectionTitle} from "../../../components/SectionTitle";
import {Button} from "../../../components/Button";
import {ContainerMax} from "../../../components/ContainerMax";
import {S} from "../contact/Contact_Style"

export const Contact: React.FC = () => {
    return (
        <S.Contact>
            <ContainerMax>
                <S.BackgroundWrapper>
                    <S.Contacts>
                        <S.Inform>
                            <SectionTitle>Subscribe</SectionTitle>
                            <S.Text>Lorem ipsum dolor sit amet, consectetur </S.Text>
                            <S.MailDetails>
                                <S.Email type='email' name='email' placeholder='Enter Your email address'/>
                                <Button>Subscribe</Button>
                            </S.MailDetails>
                        </S.Inform>
                    </S.Contacts>
                </S.BackgroundWrapper>

            </ContainerMax>

        </S.Contact>


    );
};

