import React from 'react';
import {Icon} from "../icon/Icon";
import styled from "styled-components";
import {theme} from "../../styles/Theme";

type SocialIconsPropsType = {
    isShouldDisappear?: boolean
}

type StyledSocialIconsPropsType = {
    isShouldDisappear?: boolean
}

export const SocialIcons = (props: SocialIconsPropsType) => {
    return (
        <StyledSocialIcons isShouldDisappear={props.isShouldDisappear}>
            <SocialLink href={"#"}>
                <Icon iconId={"github"} viewBox={"0 0 32 32"} height={"32"} width={"32"}/>
            </SocialLink>
            <SocialLink href={"#"}>
                <Icon iconId={"linkedin"} viewBox={"0 0 32 32"} height={"32"} width={"32"}/>
            </SocialLink>
            <SocialLink href={"#"}>
                <Icon iconId={"telegram"} viewBox={"0 0 35 30"} height={"30"} width={"35"}/>
            </SocialLink>
        </StyledSocialIcons>
    );
};

const StyledSocialIcons = styled.div<StyledSocialIconsPropsType>`
    
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 25px;
    
    @media ${theme.media.desktop} {
        //display: ${props => props.isShouldDisappear ? "none" : "flex"};
        display: none;
    }

`

const SocialLink = styled.a`

`