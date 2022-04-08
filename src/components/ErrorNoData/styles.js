import styled, { css } from 'styled-components';
import { keyframes } from 'styled-components';

const SadFaceRotate = () => keyframes`
  0% {
    transform: rotate(0deg);
  }
  100%{
      transform: rotate(360deg);
  }
`;

export const Container = styled.div`
  ${({ theme }) => css`
    width: 90%;
    height: 30vh;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;

    & > svg {
      animation: ${SadFaceRotate} 2s ease-in-out infinite;

      color: #a73737;
      width: 7rem;
      height: 7rem;
    }
  `}
`;

export const NoDataTitle = styled.h1`
  ${({ theme }) => css`
    font-family: ${theme.font.family.secondFont};
    text-transform: uppercase;
    font-style: italic;
    font-weight: 700;
    text-align: center;

    color: ${theme.colors.primaryColor};
    margin-top: 10vh;
  `}
`;
