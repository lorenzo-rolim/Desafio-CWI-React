import styled, { css } from 'styled-components';
import { keyframes } from 'styled-components';
import { device } from '../../constants/breakpoints';

const IntroError = () => keyframes`
  0% {
    transform: scale(0);
  }
`;

export const Container = styled.div`
  ${({ theme, error }) => css`
    position: fixed;

    border-radius: 20px;
    width: 20vw;
    height: 15vh;
    background: ${error ? `${theme.colors.gradient}` : '#92d18b'};

    animation: ${IntroError} 0.3s ease-in-out;

    z-index: 5;
    top: 9.5vh;
    right: 2vw;

    display: flex;
    justify-content: stretch;
    align-items: center;
    flex-direction: column;

    border: 1px solid white;

    @media ${device.tablet} {
      width: 40vw;
    }
    @media ${device.mobileL} {
      width: 50vw;
    }
    @media ${device.mobileM} {
      height: 45vw;
    }
  `}
`;

export const Title = styled.h1`
  ${({ theme }) => css`
    margin-top: 15px;
    font-size: 20px;

    text-align: center;

    color: white;

    font-family: ${theme.font.family.secondFont};
    text-transform: uppercase;
    font-style: italic;
    font-weight: 700;

    @media ${device.desktop} {
      font-size: 18px;
    }
    @media ${device.laptopL} {
      margin-top: 18px;
      font-size: 14px;
    }
    @media ${device.laptop} {
      margin-top: 18px;
      font-size: 12px;
    }
    @media ${device.laptop} {
      margin-top: 18px;
      font-size: 15px;
    }
  `}
`;

export const Button = styled.button`
  ${({ theme }) => css`
    padding: 3px 10px;
    margin: 10px;

    border: none;
    background-color: black;
    color: white;

    font-family: ${theme.font.family.secondFont};
    text-transform: uppercase;
    font-style: italic;
    font-weight: 700;

    transition: all 0.2s ease-in-out;

    cursor: pointer;

    border-radius: 5px;

    &:hover {
      box-shadow: 3px 3px 5px 0px rgba(0, 0, 0, 0.9);
    }
  `}
`;
