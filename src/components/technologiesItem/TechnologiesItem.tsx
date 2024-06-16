import React from 'react';
import styled from "styled-components";
import {theme} from "../../styles/Theme";

type TechnologiesItemPropsType = {
    name?: string
    percents?: string
}

type StyledPartOfLinePropsType = {
    percents?: string
}

export const TechnologiesItem = (props: TechnologiesItemPropsType) => {
    return (
        <StyledTechnologiesItem>
            <TechnologiesName>{props.name || "Item"}</TechnologiesName>
            <TechnologyLine>
                <PartOfLine percents={props.percents}/>
            </TechnologyLine>

        </StyledTechnologiesItem>
    );
};

const StyledTechnologiesItem = styled.div`
    width: 100%;

    &:nth-child(n + 2) {
        margin-top: 25px;
    }
`
//
const TechnologiesName = styled.h3`
    margin-left: 25px;
    font-size: 24px;
    font-weight: 600;
`

const TechnologyLine = styled.div`
    max-width: 900px;
    width: 100%;
    height: 18px;
    background-color: #162950;
    border-radius: 83px;
`

const PartOfLine = styled.div<StyledPartOfLinePropsType>`
    height: 18px;
    width: 100%;
    border-radius: 83px;
    background: ${theme.colors.gradient};
    clip-path: inset(0 calc(100% - ${props => props.percents || "10%"}) 0 0 round 83px);

`
