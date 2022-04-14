import styled, { css } from 'styled-components';

export const Container = styled.header`
  ${({ theme }) => css`
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    height: 7.5vh;

    background-color: black;

    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 5;
  `}
`;

export const LogoContainer = styled.div`
  ${({ theme }) => css`
    height: 100%;

    background-color: ${theme.colors.red};
    padding-right: 1rem;
    padding-left: 1rem;

    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
  `}
`;

export const Logo = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-family: ${theme.font.family.default}
    font-size: 50px;

    cursor: pointer;
    user-select: none;

    text-transform: uppercase;
    font-weight: 400;

    @media (max-height: 660px){
        font-size: 30px;
    }
  `}
`;
