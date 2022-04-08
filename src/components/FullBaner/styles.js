import styled, { css } from 'styled-components';
import { device } from '../../constants/breakpoints';

export const Container = styled.div`
  ${({ theme }) => css`
    margin-top: 7.5vh;
    width: 100%;
    height: 70vh;

    box-sizing: border-box;
    position: relative;
    overflow: hidden;
    background-color: black;

    & > img {
      right: 0;
    }
  `}
`;

export const ContainerImg = styled.div`
  ${({ theme }) => css`
    margin: auto;
    height: 100%;
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    position: relative;
    z-index: 4;

    @media ${device.laptopL} {
      width: 100%;
    }

    @media ${device.tablet} {
      width: 100%;
    }
  `}
`;

export const FullBanner = styled.img`
  ${({ theme }) => css`
    margin: auto;
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
  `}
`;

export const BangBackground = styled.img`
  ${({ theme, right = '', left = '' }) => css`
    position: absolute;
    right: ${right};
    top: 0;
    left: ${left};
    background-repeat: repeat-x;

    height: 100%;
  `}
`;

export const Title = styled.h1`
  ${({ theme }) => css`
    position: absolute;
    z-index: 4;

    border-radius: 10px;
    color: black;
    font-family: ${theme.font.family.default}
    font-size: 6.5rem;

    padding: 1rem;

    box-shadow: 4px 4px 1px 0px rgba(0, 0, 0, 0.9);
    background-color: ${theme.colors.white};
    width: 35vw;

    text-align: center;
    user-select: none;

    text-transform: uppercase;
    font-weight: 400;

    @media ${device.laptopL}{
        font-size: 5.5rem;
    }
    @media ${device.laptopL}{
        font-size: 4.5rem;
    }
    @media ${device.mobileL}{
        width: 55vw;
        font-size: 4rem;
    }

  `}
`;

export const BlurContainer = styled.div`
  ${({ theme }) => css`
    margin: auto;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    box-sizing: border-box;
    position: relative;
    z-index: 4;

    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(7px);
    -webkit-backdrop-filter: blur(7px);
  `}
`;
