import React from "react";
import styled from "styled-components";
import image from "../images/image_card.jpg";
import { StyledButtonBordered, StyledButtonFilled } from "./Button.styled";
import { globalTheme } from "../styles/Theme.styled";

export function Card () {
    return (
        <StyledCard>
            <StyledImage>
                <img src={image} alt="card_image"/>
            </StyledImage>
            <StyledHeader>Headline</StyledHeader>
            <p>Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.</p>
            <StyledButtonFilled as="a" href="#" color="#2fc95d" fontSize="11px" border="angle" disabled>See more</StyledButtonFilled>
            <StyledButtonBordered>Save</StyledButtonBordered>
        </StyledCard>
    )
}

const StyledImage = styled.div`
    display: flex;
    width: 280px;
    height: 170px;

    margin-bottom: 20px;

    border-radius: 10px;
    object-fit: contain;
    box-sizing: border-box;
`

const StyledHeader = styled.h1`
    margin-bottom: 20px;

    font-family: Inter;
    font-size: 16px;
    font-weight: 700;
    line-height: 19px;
    letter-spacing: 0em;
    text-align: left;
    color:${globalTheme.colors.font.black};
`

const StyledCard = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    width: 300px;
    height: 350px;

    padding-left: 10px;
    padding-top: 10px;
    padding-bottom: 20px;

    box-shadow: 0px 4px 20px 5px #0000001A;
    border-radius: 15px;
    box-sizing: border-box;

    p {
        width: 260px;
        margin-left: 10px;
        margin-bottom: 20px;

        font-family: Inter;
        font-size: 12px;
        font-weight: 500;
        line-height: 20px;
        letter-spacing: 0em;
        text-align: left;
        color: ${globalTheme.colors.font.gray};
    }

    ${StyledHeader} {
        margin-left: 10px;
    }

    ${StyledButtonFilled} {
        margin-left: 10px;
    }

    ${StyledButtonBordered} {
        margin-left: 10px;
    }
`
