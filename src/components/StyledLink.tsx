import styled from "styled-components";
import {theme} from "../styles/Theme";
import React from 'react';

type StyledLinkPropsType = {
    name: string
    linkWidth?: string
    linkHeight?: string
}

type StyledLinkBoxPropsType = {
    boxWidth?: string
    boxHeight?: string
}

export const StyledLink = (props: StyledLinkPropsType) => {
    return (
        <StyledLinkBox boxWidth={props.linkWidth || "240px"} boxHeight={props.linkHeight || "60px"}>
            <Link>{props.name}</Link>
        </StyledLinkBox>
    );
};

const Link = styled.a`
    margin: auto auto;
    font-size: 20px;
    font-weight: 600;
`

const StyledLinkBox = styled.div<StyledLinkBoxPropsType>`
    width: ${props => props.boxWidth};
    height: ${props => props.boxHeight};
    border-radius: 83px;
    background: ${theme.colors.gradient};
    display: flex;
`