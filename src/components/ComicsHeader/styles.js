import styled, { css } from 'styled-components';
import { device } from '../../constants/breakpoints';

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
    width: 52vw;
    position: absolute;
    margin: auto;

    border-radius: 5px;

    transform: rotate(-6deg);

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: #b80f0a;

    @media ${device.laptopL} {
      width: 72vw;
    }
    @media ${device.laptop} {
      width: 78vw;
    }
    @media ${device.tablet} {
      height: 80px;
      width: 86vw;
    }
    @media (max-width: 540px) {
      width: 95vw;
    }
  `}
`;

export const Title = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-family: ${theme.font.family.default}
    font-size: 8rem;

    text-align: center;
    user-select: none;

    text-transform: uppercase;
    font-weight: 400;

    @media ${device.laptop}{
        font-size: 6.5rem;
    }
    @media ${device.tablet}{
        font-size: 5rem;
    }
    @media ${device.mobileL}{
        font-size: 4rem;
    }
    @media ${device.mobileM}{
        font-size: 3.5rem;
    }
  `}
`;
