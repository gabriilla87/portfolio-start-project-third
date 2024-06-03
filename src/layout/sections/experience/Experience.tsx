import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/sectionTitle/SectionTitle";
import {Container} from "../../../components/Container";


export const Experience = () => {
    return (
        <StyledExperience>
            <Container>
                <SectionTitle>Experience</SectionTitle>
                <YearsList>
                    <ul>
                        <ExperienceItem>
                            <Year>2017</Year>
                            <TimeSpot/>
                            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor t ut labore et dolore magna aliqua.</Text>
                        </ExperienceItem>
                        <ExperienceItem>
                            <Year>2019</Year>
                            <TimeSpot/>
                            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor t ut labore et dolore magna aliqua.</Text>
                        </ExperienceItem>
                        <ExperienceItem>
                            <Year>2021</Year>
                            <TimeSpot/>
                            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor t ut labore et dolore magna aliqua.</Text>
                        </ExperienceItem>
                        <ExperienceItem>
                            <Year>2023</Year>
                            <TimeSpot/>
                            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor t ut labore et dolore magna aliqua.</Text>
                        </ExperienceItem>
                    </ul>
                </YearsList>
            </Container>
        </StyledExperience>
    );
};

const StyledExperience = styled.section``

const TimeSpot = styled.div`
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background-color: white;
    position: relative;
    z-index: 3;
    margin: 0 auto;
`

const ExperienceItem = styled.li`
    text-align: center;
`
const Year = styled.span`
    font-size: 26px;
    font-weight: 600;
`

const Text = styled.p`
    text-align: center;
    font-size: 18px;
    font-weight: 500;
    line-height: 1.4;
    
    margin-top: 20px;
`

const YearsList = styled.div`
    position: relative;
    //outline: 1px solid yellow;
    
    ul{
        display: flex;
        gap: 30px;
    }

    &::after {
        top: 39px;
        content: "";
        width: calc(100% - 260px);
        height: 10px;
        left: 120px;
        position: absolute;
        border-radius: 83px;
        background: linear-gradient(270deg, #13ADC7 0%, #6978D1 66.67%, #945DD6 100%);
        z-index: 2;
    }
`






















// const TimeLineWrapper = styled.div`
//     width: 50%;
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     height: 25px;
//     background-color: gray;
//     margin: 0 auto;
// `
//
// const TimeLine = styled.div`
//     width: 100%;
//     height: 8px;
//     border-radius: 83px;
//     background: linear-gradient(270deg, #13ADC7 0%, #6978D1 66.67%, #945DD6 100%);
// `
//

//
// const TimeSpotText = styled.p`
//
// `