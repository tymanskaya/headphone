import React from 'react';
import {Logo} from "../../components/logo/Logo";
import {DesctopMenu} from "./headerMenu/DesctopMenu/DesctopMenu";
import {Container} from "../../components/Container";
import {FlexWrapper} from "../../components/FlexWrapper";
import {Navigation} from "./navigation/Navigation";
import {MobileMenu} from "./headerMenu/mobileMenu/MobileMenu";
import {S} from "../header/Header_Styles"

const items= ["Home", "About", "Product", ]

export const Header: React.FC = () => {
    const [width, setWidth] = React.useState(window.innerWidth);
    const breakpoint = 576;

    React.useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth)
        window.addEventListener("resize", handleWindowResize);

        return () => window.removeEventListener("resize", handleWindowResize);
    }, []);
    return (

        <S.Header>
            <Container>
                <FlexWrapper justify={'space-between'} align={'center'}>
                    <Logo/>
                    <Navigation/>
                    {width < breakpoint ? <MobileMenu menuItems={items}/>
                                        : <DesctopMenu menuItems={items}/>}


                </FlexWrapper>
            </Container>
        </S.Header>
    )
};
