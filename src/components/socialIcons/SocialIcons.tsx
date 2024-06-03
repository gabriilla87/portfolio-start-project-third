import React from 'react';
import {Icon} from "../icon/Icon";
import styled from "styled-components";

export const SocialIcons = () => {
    return (
        <StyledSocialIcons>
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

const StyledSocialIcons = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 25px;
`

const SocialLink = styled.a`

`