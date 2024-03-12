import {theme} from "../../Styles/Theme";
import styled from "styled-components";
import {FlexWrapper} from "../../components/FlexWrapper";

const Footer = styled.footer`
    background: ${theme.colors.secondaryBG};
    padding: 62px 0 61px 0;
    
    @media ${theme.media.tablet}{
        ${FlexWrapper} {
            flex-direction: column;
            gap: 30px;
        }
    }
    
  
    
`
const SocialList = styled.ul`
 display: flex;
    gap: 35px;
`
const SocialItem = styled.li`

`
const SocialLink = styled.a`
    background-color: ${theme.colors.iconBG};
    border-radius: 50%;
    width: 50px;
    height: 50px;

    display: flex;
    justify-content: center;
    align-items: center;

    color: ${theme.colors.accent};

    &:hover {
       transform: translateY(-4px);
  

    }

`

export const S ={
        Footer,
        SocialList,
        SocialItem,
        SocialLink
}