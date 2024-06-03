import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import Portrait from "../../../assets/portrait.jpg";
import BgImage from "../../../assets/BgImage.svg";
import {Container} from "../../../components/Container";
import {StyledLink} from "../../../components/StyledLink";
import {theme} from "../../../styles/Theme";

export const Hero = () => {
    return (
        <StyledHero>
            <Container>
                <FlexWrapper justify={"space-between"} align={"center"}>
                    <HeroInfo>
                        <FlexWrapper direction={"column"}>
                            <Name>Lorem ipsum dolor amet</Name>
                            <Text>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                labore
                                et dolore magna aliqua.
                            </Text>
                            <StyledLink name={"Let's Begin"}/>
                        </FlexWrapper>
                    </HeroInfo>

                    <ImageWrapper>
                        <StyledPortrait src={Portrait} alt={"It's me!!!"}/>
                        {/*<StyledPortrait src={BgImage}/>*/}
                    </ImageWrapper>
                </FlexWrapper>
            </Container>
        </StyledHero>
    );
};

const StyledPortrait = styled.img`
    width: 380px;
    height: 450px;
    object-fit: cover;
    border-radius: 50px 0;
`

const StyledHero = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 0;
    
    & {
        padding-top: 125px;
    }
`

const ImageWrapper = styled.div`
    max-width: 390px;
    width: 100%;
    height: 460px;
    border-radius: 50px 0;
    background: ${theme.colors.gradient};
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: 0;

    // ${StyledPortrait} + ${StyledPortrait} {
    //     position: absolute;
    //     width: 666px;
    //     height: 666px;
    //     //bottom: -272px;
    //     //left: -140px;
    //     z-index: -1;
    }
`

const HeroInfo = styled.div`
    
`

const Name = styled.h1`
    font-size: 54px;
    font-weight: 600;
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