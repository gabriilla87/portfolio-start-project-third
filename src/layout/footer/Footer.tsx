import React from 'react';
import styled from "styled-components";
import {SocialIcons} from "../../components/socialIcons/SocialIcons";
import {Container} from "../../components/Container";
import {theme} from "../../styles/Theme";
import {FlexWrapper} from "../../components/FlexWrapper";

export const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <FlexWrapper justify={"space-between"}>
                    <TextWrapper>
                        <Text>Call me:<br/>
                            123-456-789</Text>
                        <Text>Email:<br/>
                            xxx@xyz.com</Text>
                    </TextWrapper>
                    <SocialIcons/>
                </FlexWrapper>
            </Container>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    background-color: ${theme.colors.primaryBg};
    padding: 42px 0;
`

const Text = styled.span`
    font-size: 22px;
    font-weight: 600;
    line-height: 1.4;
    display: inline-block;
`

const TextWrapper = styled.div`
    ${Text}:first-child {
        margin-right: 163px;
    }
`