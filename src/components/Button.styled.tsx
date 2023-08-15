import { css } from "styled-components";
import { styled } from "styled-components";
import { globalTheme } from "../styles/Theme.styled";

type StyledButtonPropsType = {
    color?: string
    fontSize?: string
    disabled?: boolean
    border?: "angle" | "rounded"
}

export const StyledButtonFilled = styled.button<StyledButtonPropsType>`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 86px;
    height: 30px;

    border-radius: 5px; 
    border: none;
    /* background-color: #4E71FE; */
    background-color: ${props => props.color || "#4E71FE"};

    font-family: Inter;
    /* font-size: 10px; */
    font-size: ${props => props.fontSize || "10px"};
    font-weight: 700;
    line-height: 20px;
    letter-spacing: 0em;
    color: #FFFFFF;

    cursor: pointer;

    ${props => props.disabled && css<StyledButtonPropsType>`
        background-color: gray;
    `}

    ${props => props.border === "angle" && css<StyledButtonPropsType>`
        border-radius: 0; 
    `}

    &:hover {
        border: 2px solid #4E71FE;
        background-color: #FFFFFF;

        color: #4E71FE;
    }
`

export const StyledButtonBordered = styled(StyledButtonFilled)`
    border: 2px solid ${globalTheme.colors.accent};
    background-color: ${globalTheme.colors.background};

    color: #4E71FE;

    &:hover {
        border: 2px solid ${globalTheme.colors.accent};
        background-color: ${globalTheme.colors.accent};

        color: ${globalTheme.colors.background};
    }
`