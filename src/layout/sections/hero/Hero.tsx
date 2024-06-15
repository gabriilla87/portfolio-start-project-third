import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import Portrait from "../../../assets/portrait.jpg";
import BgImage from "../../../assets/bgImage.png";
import {Container} from "../../../components/Container";
import {StyledLink} from "../../../components/StyledLink";
import {theme} from "../../../styles/Theme";
import {font} from "../../../styles/Common";

export const Hero = () => {
    return (
        <StyledHero>
            <Container>
                <FlexWrapper justify={"space-between"} align={"center"} wrap={"wrap"}>
                    <HeroInfo>
                        <FlexWrapper direction={"column"}>
                            <Name>Lorem ipsum dolor amet</Name>
                            <Text>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                labore
                                et dolore magna aliqua.
                            </Text>
                            <StyledLink isShouldDisappear={false} name={"Let's Begin"}/>
                        </FlexWrapper>
                    </HeroInfo>

                    <ImageWrapper>
                        <ImageBorder>
                            <StyledPortrait src={Portrait} alt={"It's me!!!"}/>
                        </ImageBorder>
                    </ImageWrapper>
                </FlexWrapper>
            </Container>
        </StyledHero>
    );
};


const StyledHero = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    overflow-x: clip;
    padding-top: 125px;
    
    ${Container} > ${FlexWrapper} {
        @media ${theme.media.desktop} {
            justify-content: center;
            flex-direction: column-reverse;
            
        }
    }
`

const StyledPortrait = styled.img`
    max-width: 380px;
    width: 100%;
    height: 450px;
    object-fit: cover;
    border-radius: 50px 0;
    
    @media ${theme.media.mobile} {
        max-width: 320px;
        width: 100%;
        height: 380px;
    }
`

const ImageWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 390px;
    width: 100%;
    height: 460px;
    
    position: relative;
    z-index: 0;
    
    &::after {
        content: url(${BgImage});
        max-width: 666px;
        width: 100%;
        max-height: 666px;
        height: 100%;
        
        position: absolute;
        z-index: -1;
        top: 66px;
        left: -9px;
    }

    @media ${theme.media.mobile} {
        max-width: 330px;
        width: 100%;
        height: 390px;
        
        &::after {
            display: none;
        }
    }
`

const ImageBorder = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 50px 0;
    background: ${theme.colors.gradient};
    display: flex;
    align-items: center;
    justify-content: center;
`

const HeroInfo = styled.div`
    
`

const Name = styled.h1`
    ${font({weight: 600, Fmax: 54, Fmin: 54})}
`

const Text = styled.span`
    color: #BCBCBC;
    font-size: 18px;
    font-weight: 500;
    display: inline-block;
    max-width: 482px;
    width: 100%;
    margin: 15px 0 60px;
`