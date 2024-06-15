import React from 'react';
import iconsSprite from "../../assets/sprite.svg"
import styled from "styled-components";

type IconPropsType = {
    iconId: string
    width?: string
    height?: string
    viewBox?: string
}

export const Icon = (props: IconPropsType) => {
    return (
        <StyledSvg width={props.width || "50px"}
             height={props.height || "50px"} viewBox={props.viewBox || "0 0 50 50"}
             fill="none" xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref={`${iconsSprite}#${props.iconId}`}/>
        </StyledSvg>
    );
};

const StyledSvg = styled.svg`
    
`
