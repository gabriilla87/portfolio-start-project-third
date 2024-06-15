import React from 'react';
import styled from "styled-components";
import CardPicture from "../../assets/projectImg.png"
import {theme} from "../../styles/Theme";
import {StyledLink} from "../StyledLink";
import {font} from "../../styles/Common";

type ProjectCardPropsType = {
    title?: string
}

export const ProjectCard = (props: ProjectCardPropsType) => {
    return (
        <StyledProjectCard>
            <StyledPicture src={CardPicture} alt={"Project"}/>
            <CardTitle>{props.title}</CardTitle>
            <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</CardText>
            <StyledLink name={"Look It Up"} linkWidth={"200px"}/>
        </StyledProjectCard>
    );
};

const StyledProjectCard = styled.div`
    //max-width: 550px;
    //width: 100%;
    width: 370px;
    flex-grow: 1;
    height: 670px;
    padding: 25px 25px 40px;
    border-radius: 50px 0;
    border: 1px solid #A39D9D;
    background-color: ${theme.colors.primaryBg};
    display: flex;
    flex-direction: column;

    //&:nth-child(n + 3) {
    //    margin-top: 60px;
    //}
    
`

const CardTitle = styled.h3`
    ${font({weight: 600, lineHeight: "88.5%", Fmax: 30, Fmin: 24})}
    text-align: center;
    margin: 40px 0 67px;
    text-transform: uppercase;
    position: relative;
    display: inline-block;
    
    &::before {
        content: "";
        width: 60%;
        height: 4px;
        background: ${theme.colors.gradient};
        
        position: absolute;
        left: 50%;
        bottom: -27px;
        transform: translateX(-50%);
    }
`

const CardText = styled.p`
    margin-bottom: 50px;
    font-size: 18px;
    font-weight: 500;
    line-height: 1.4;
`

const StyledPicture = styled.img`
    max-width: 500px;
    width: 100%;
    height: 280px;
    object-fit: cover  ;
    border-radius: 24px 8px 8px 8px;
    align-self: center;
`