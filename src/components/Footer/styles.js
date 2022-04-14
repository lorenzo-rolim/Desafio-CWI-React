import styled, { css } from 'styled-components';
import { device } from '../../constants/breakpoints';

export const Container = styled.footer`
  ${({ theme, position = false }) => css`
    height: 6vh;
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    overflow: hidden;

    background-color: black;

    position: ${position ? 'absolute' : ''};
    bottom: ${position ? '0' : ''};
  `}
`;

export const FooterContent = styled.div`
  ${({ theme }) => css`
    height: 100%;
    background-color: ${theme.colors.red};
    width: 30vw;
    display: flex;
    justify-content: space-around;
    align-items: center;

    @media ${device.laptopL} {
      width: 45vw;
    }
    @media ${device.laptop} {
      width: 50vw;
    }
    @media ${device.tablet} {
      width: 80vw;
    }
    @media (max-width: 500px) {
      width: 96vw;
    }
  `}
`;

export const FooterAuthor = styled.h1`
  ${({ theme }) => css`
    color: white;

    font-size: 2rem;

    font-family: ${theme.font.family.secondFont};
    font-weight: 700;
    font-style: italic;
    text-transform: uppercase;

    cursor: pointer;
    user-select: none;

    display: flex;
    align-items: center;
    justify-content: center;

    transition: all 0.2s ease-in-out;

    &:hover {
      transform: scale(1.07);
    }

    & > svg {
      margin-left: 1rem;
      font-size: 2rem;
    }

    @media ${device.mobileL} {
      font-size: 1.5rem;

      & > svg {
        font-size: 1.5rem;
      }
    }
  `}
`;

export const FooterIcons = styled.div`
  ${({ theme }) => css`
    display: flex;
    width: 30%;
    align-items: center;
    justify-content: space-around;

    * {
      color: white;
      font-size: 3rem;

      display: flex;
      justify-content: center;
      align-items: center;

      cursor: pointer;

      transition: all 0.2s ease-in-out;

      &:hover {
        transform: scale(1.07);
      }

      @media ${device.mobileL} {
        font-size: 2.5rem;
      }
      @media ${device.mobileS} {
        font-size: 2rem;
      }
    }
  `}
`;
