import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../components/FlexWrapper";
import {HeaderMenu} from "./headerMenu/HeaderMenu";
import {SocialIcons} from "../../components/socialIcons/SocialIcons";
import {Icon} from "../../components/icon/Icon";
import {theme} from "../../styles/Theme";
import {Container} from "../../components/Container";
import {MobileMenu} from "./mobileMenu/MobileMenu";

const LinksList = ["Projects", "Technologies", "About me"]

export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <FlexWrapper justify={"space-between"} align={"center"}>
                    <Icon iconId={"brand"} width="185" height="48" viewBox="0 0 185 48"/>
                    <HeaderMenu menuItems={LinksList}/>
                    <MobileMenu menuItems={LinksList}/>
                    <SocialIcons isShouldDisappear={true}/>
                </FlexWrapper>
            </Container>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    background-color: ${theme.colors.primaryBg};
    border: 1px solid #000000;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    padding: 26px 0;
    z-index: 99999;
    
    
`