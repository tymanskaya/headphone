import React, {ElementRef, useRef} from 'react';
import {SectionTitle} from "../../../components/SectionTitle";
import {Button} from "../../../components/Button";
import {ContainerMax} from "../../../components/ContainerMax";
import {S} from "../contact/Contact_Style";
import emailjs from '@emailjs/browser';

export const Contact: React.FC = () => {
    const form = useRef<ElementRef<'form'>>(null);

    const sendEmail = (e: any) => {
        e.preventDefault();

        if(!form.current) return

        emailjs
            .sendForm('service_lbq15le', 'template_2k6mr29', form.current, {
                publicKey: 'AG4ghjI5umpdBiqJF',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
        e.target.reset()
    };
    return (
        <S.Contact>
            <ContainerMax>
                <S.BackgroundWrapper>
                    <S.Contacts>
                        <S.Inform>
                            <SectionTitle>Subscribe</SectionTitle>
                            <S.Text>Lorem ipsum dolor sit amet, consectetur </S.Text>
                            <S.MailDetails ref={form} onSubmit={sendEmail}>
                                <S.Email required type='email' name='message' placeholder='Enter Your email address'/>
                                <Button type={"submit"}>Subscribe</Button>
                            </S.MailDetails>
                        </S.Inform>
                    </S.Contacts>
                </S.BackgroundWrapper>

            </ContainerMax>

        </S.Contact>


    );
};

