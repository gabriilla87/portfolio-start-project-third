import React from 'react';
import styled from "styled-components";
import {ProjectCard} from "../../../components/projectCard/ProjectCard";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SectionTitle} from "../../../components/sectionTitle/SectionTitle";
import {Container} from "../../../components/Container";

export const Projects = () => {
    return (
        <StyledProjects>
            <Container>
                <SectionTitle>Projects</SectionTitle>
                <FlexWrapper wrap={"wrap"} justify={"space-between"}>
                    <ProjectCard title={"Project 1"}/>
                    <ProjectCard title={"Project 2"}/>
                    <ProjectCard title={"Project 3"}/>
                    <ProjectCard title={"Project 4"}/>
                </FlexWrapper>
            </Container>
        </StyledProjects>
    );
};

const StyledProjects = styled.section``
