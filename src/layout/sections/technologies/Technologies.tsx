import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/sectionTitle/SectionTitle";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Icon} from "../../../components/icon/Icon";
import {TechnologiesItem} from "../../../components/technologiesItem/TechnologiesItem";
import {Container} from "../../../components/Container";

export const Technologies = () => {
    return (
        <StyledTechnologies>
            <Container>
                <SectionTitle>Technologies</SectionTitle>
                <TechItemsWrapper>
                    <TechnologiesItem name={"Html"} percents={"55%"}/>
                    <TechnologiesItem name={"Css, Sass"}/>
                    <TechnologiesItem name={"React"}/>
                    <TechnologiesItem name={"Styled components"}/>
                </TechItemsWrapper>

                <SectionTitle align={"center"}>Additional technologies and skills</SectionTitle>
                <FlexWrapper gap={"50px"} justify={"center"}>
                    <Icon width="100" height="100" viewBox="0 0 100 100" iconId={"gitTechnologies"}/>
                    <Icon width="100" height="100" viewBox="0 0 100 100" iconId={"githubTechnologies"}/>
                    <Icon width="100" height="100" viewBox="0 0 100 100" iconId={"figmaTechnologies"}/>
                </FlexWrapper>
            </Container>
        </StyledTechnologies>
    );
};

const StyledTechnologies = styled.section`
    ${SectionTitle}:nth-of-type(2) {
        margin: 120px 0 70px;
    }
`

const TechItemsWrapper = styled.div`
    width: 60%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    

`