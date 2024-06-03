import React from 'react';
import {Icon} from "../icon/Icon";
import styled from "styled-components";
import {FlexWrapper} from "../FlexWrapper";

export const Brand = () => {
    return (
        <FlexWrapper align={"center"} gap={"13px"}>
            <Icon iconId={"briefcase"} viewBox="0 0 512 512" height={"47"} width={"47"}/>
            <BrandName>Portfolio</BrandName>
        </FlexWrapper>
    );
};

const BrandName = styled.span`
    color: white;
`