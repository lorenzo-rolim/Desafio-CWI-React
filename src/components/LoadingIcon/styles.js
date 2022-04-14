import styled, { css } from 'styled-components';
import { keyframes } from 'styled-components';

const rotate = () => keyframes`
  0% {
    transform: translate(-50%, -50%) rotate(0deg);
    border-left: 0.5rem solid #f12711;
    border-top: 0.5rem solid #f12711;
  }

  50% {
    transform: translate(-50%, -50%) rotate(180deg);
    border-left: 0.5rem solid #f5af19;
    border-top: 0.5rem solid #f5af19;
  }

  100% {
    transform: translate(-50%, -50%) rotate(360deg);
    border-left: 0.5rem solid #f12711;
    border-top: 0.5rem solid #f12711;
  }
`;

export const Container = styled.div`
  ${({ theme }) => css`
    height: 50vh;

    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(2.5px);
    -webkit-backdrop-filter: blur(2.5px);
    border-radius: 10px;
    z-index: 15;

    &:after {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      border-width: 0.5rem;
      border-color: transparent;
      border-style: solid;
      border-radius: 50%;
    }

    &:after {
      width: 5rem;
      height: 5rem;
      border-left: 0.5rem solid #f12711;
      border-top: 0.5rem solid #f12711;
      animation: ${rotate()} 0.8s linear infinite;
    }
  `}
`;
