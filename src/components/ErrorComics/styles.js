import styled, { css } from 'styled-components';
import { keyframes } from 'styled-components';
import { device } from '../../constants/breakpoints';

const ErrorEffect = () => keyframes`
  0% {
    transform: rotate(0deg);
  }
  100%{
      transform: rotate(360deg);
  }
`;

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 40vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    @media ${device.tablet} {
      height: 30vh;
    }

    @media ${device.mobileL} {
      height: 35vh;
    }

    & > svg {
      height: 100px;
      width: 100px;

      color: #a73737;
      animation: ${ErrorEffect} 2s ease-in-out infinite;

      @media ${device.tablet} {
        height: 200px;
        width: 200px;
      }
      @media ${device.mobileL} {
        height: 80px;
        width: 80px;
      }
    }
  `}
`;

export const ErrorTitle = styled.h1`
  ${({ theme }) => css`
    color: #a73737;
    font-family: ${theme.font.family.default};
    font-weight: 400;
    margin-top: 2rem;
    font-size: 200px;
    height: 5rem;

    @media ${device.tablet} {
      margin-top: 2rem;
      font-size: 3.5rem;
    }
    @media ${device.mobileL} {
      font-size: 3.2rem;
    }
    @media ${device.mobilem} {
      font-size: 3rem;
    }
  `}
`;
