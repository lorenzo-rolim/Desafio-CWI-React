import styled, { css } from 'styled-components';
import { device } from '../../constants/breakpoints';
import { keyframes } from 'styled-components';

const IntroModal = () => keyframes`
  0% {
    transform: scale(0);
  }
`;

export const Container = styled.div`
  ${({ theme, ScaleFlag = '' }) => css`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 5;

    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(7px);
    -webkit-backdrop-filter: blur(7px);
    transition: all 0.3s ease-in-out;

    display: flex;
    justify-content: center;
    align-items: center;

    transform: ${ScaleFlag ? 'scale(1)' : 'scale(0)'};
    ${ScaleFlag && IntroModal()}
  `}
`;

export const ModalContainer = styled.div`
  ${({ theme }) => css`
    margin-top: 7.5vh;
    height: 80vh;
    width: 70vw;

    display: flex;
    justify-content: center;
    align-items: center;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));

    border-radius: 20px;
    background-color: #333;

    @media ${device.mobileL} {
      flex-direction: column;
      width: 90vw;
    }
  `}
`;
