import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;

    height: 100px;
    width: 100%;
    background-color: black;
  `}
`;

export const TitleContainer = styled.div`
  ${({ theme }) => css`
    z-index: 4;
    height: 100px;
    width: 80vh;
    position: absolute;
    margin: auto;

    border-radius: 5px;

    transform: rotate(-6deg);

    background-color: red;
  `}
`;

export const Title = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-family: ${theme.font.family.default}
    font-size: 80px;
    
    text-align: center;
    user-select: none; 

    text-transform: uppercase;
    font-weight: 400;
  `}
`;
