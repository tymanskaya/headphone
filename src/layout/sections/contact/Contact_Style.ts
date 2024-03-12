import {theme} from "../../../Styles/Theme";
import {font} from "../../../Styles/Common";
import styled from "styled-components";
import {Button} from "../../../components/Button";
import notes from "../../../assets/images/freepik-background-complete-inject-3_1.webp"

const Contact = styled.section`
    
`
const Contacts = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 712px;
    width: 100%;
    height: 292px;
    border-radius: 20px;
    background: rgb(255, 244, 244);
`
const BackgroundWrapper = styled.div`
    background-image: url(${notes});
    display: flex;
    justify-content: center;
    
    @media ${theme.media.tablet} {
        background-image: none;
        
    }
    
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
    ${font({family:"'Rubik', sans-serif", weight: 400, Fmax: 16, Fmin: 16  })};
    color: ${theme.colors.fontTitle};
    opacity: 0.7;
    line-height: 150%;
    text-align: center;


`
const MailDetails = styled.div`
padding: 17px 30px;
    margin-top: 30px;
    width: 100%;
    min-height: 61px;
    height: 100%;
    border-radius: 73px;
    background-color: ${theme.colors.iconBG};
    position: relative;
    display: flex;
    
    ${Button}{
        position: absolute;
        background-color: ${theme.colors.accent};
        color: ${theme.colors.iconBG};
        top: 0;
        right: 0;
        bottom: 0;
        @media ${theme.media.mobile}{
            width: 100px;

        }
        
    }


`
const Email = styled.input`
    
    max-width: 250px;
    width: 100%;
    border: none;
    outline: none;
    ${font({family:"'Rubik', sans-serif", weight: 400, Fmax: 18, Fmin: 14  })};
    color: ${theme.colors.fontTitle};
    line-height: 150%;
    text-align: left;
`

export const S ={
    Contact,
    Contacts,
    BackgroundWrapper,
    Inform,
    Text,
    MailDetails,
    Email
}