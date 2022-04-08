import styled, { css } from 'styled-components';
import { keyframes } from 'styled-components';

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

    & > svg {
      height: 100px;
      width: 100px;

      color: #a73737;
      animation: ${ErrorEffect} 2s ease-in-out infinite;
    }
  `}
`;

export const ErrorTitle = styled.h1`
  ${({ theme }) => css`
    color: #a73737;
    font-family: ${theme.font.family.default};
    font-weight: 400;

    font-size: 6rem;
  `}
`;
