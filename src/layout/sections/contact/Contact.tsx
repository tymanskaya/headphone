import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Button} from "../../../components/Button";
import {ContainerMax} from "../../../components/ContainerMax";
import notes from "../../../assets/images/freepik-background-complete-inject-3_1.webp"
import {theme} from "../../../Styles/Theme";

export const Contact = () => {
    return (
        <StyleContact>
            <ContainerMax>
                <BackgroundWrapper>
                    <Contacts>
                        <Inform>
                            <SectionTitle>Subscribe</SectionTitle>
                            <Text>Lorem ipsum dolor sit amet, consectetur </Text>
                            <MailDetails>
                                <Email type='email' name='email' placeholder='Enter Your email address'/>
                                <Button>Subscribe</Button>
                            </MailDetails>

                        </Inform>

                    </Contacts>
                </BackgroundWrapper>

            </ContainerMax>

        </StyleContact>


    );
};

const StyleContact = styled.section`
    
`
const Contacts = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 712px;
    width: 100%;
    height: 291px;
    border-radius: 20px;
    background: rgb(255, 244, 244);
`
const BackgroundWrapper = styled.div`
    background-image: url(${notes});
    //width: 100%;
    display: flex;
    justify-content: center;
    
`
const Inform = styled.div`
  display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 504px;
    width: 100%;
    gap: 6px;
    
`

const Text = styled.p`
    color: ${theme.colors.fontTitle};
    opacity: 0.7;
    font-family: 'Rubik', sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 150%;
    text-align: center;


`
const MailDetails = styled.div`
padding: 17px 30px;
    margin-top: 30px;
    width: 100%;
    min-height: 61px;
    border-radius: 73px;
    background-color: ${theme.colors.iconBG};
    position: relative;
    display: flex;
    
    Button{
        position: absolute;
        background-color: ${theme.colors.accent};
        color: ${theme.colors.iconBG};
        top: 0;
        right: 0;
    }

`
const Email = styled.input`
    max-width: 250px;
    width: 100%;
    border: none;
    outline: none;
    color: ${theme.colors.fontTitle};
    font-family: 'Rubik', sans-serif;
    font-size: 18px;
    font-weight: 400;
    line-height: 150%;
    text-align: left;




`