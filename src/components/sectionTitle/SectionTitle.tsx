import styled from "styled-components";

type SectionTitlePropsType = {
    align?: string
}

export const SectionTitle = styled.h2<SectionTitlePropsType>`
    text-align: ${props => props.align || "start"};
    font-size: 46px;
    font-weight: 600;
    margin-bottom: 70px;
`