import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../components/FlexWrapper";
import {Menu} from "../../components/menu/Menu";
import {SocialIcons} from "../../components/socialIcons/SocialIcons";
import {Icon} from "../../components/icon/Icon";
import {theme} from "../../styles/Theme";
import {Container} from "../../components/Container";

const LinksList = ["Projects", "Technologies", "About me"]

export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <FlexWrapper justify={"space-between"} align={"center"}>
                    <Icon iconId={"brand"} width="185" height="48" viewBox="0 0 185 48"/>
                    <Menu menuItems={LinksList}/>
                    <SocialIcons/>
                </FlexWrapper>
            </Container>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    background-color: ${theme.colors.primaryBg};
    border: 1px solid #000000;
    position: sticky;
    top: 0;
    left: 0;
    right: 0;
    padding: 26px 0;
    z-index: 99999;
`