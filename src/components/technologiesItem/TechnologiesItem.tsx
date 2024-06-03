import React from 'react';
import styled from "styled-components";
import {theme} from "../../styles/Theme";

type TechnologiesItemPropsType = {
    name?: string
    percents?: string
}

type StyledPartOfLine = {
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
    width: 900px;

    &:nth-child(n + 2) {
        margin-top: 25px;
    }
`

const TechnologiesName = styled.h3`
    margin-left: 25px;
    font-size: 24px;
    font-weight: 600;
`

const TechnologyLine = styled.div`
    width: 100%;
    height: 18px;
    background-color: #162950;
    border-radius: 83px;
`

const PartOfLine = styled.div<StyledPartOfLine>`
    width: ${props => props.percents || "10%"};
    height: 100%;
    background: ${theme.colors.gradient};
    border-radius: 83px;
`