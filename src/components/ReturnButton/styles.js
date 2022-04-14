import styled, { css } from 'styled-components';
import { device } from '../../constants/breakpoints';

export const Container = styled.div`
  ${({ theme, ScaleFlag = true }) => css`
    position: fixed;
    top: 1.25vh;
    right: 1rem;

    width: 10rem;
    height: 5vh;

    border-radius: 5px;

    background: linear-gradient(to bottom, #e52d27, #b31217, #7a2828);
    z-index: 6;

    font-size: 3rem;
    font-family: ${theme.font.family.thirdFont};
    font-weight: 400;
    text-decoration: none;

    color: white;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    border: none;

    transform: ${ScaleFlag ? 'scale(1)' : 'scale(0)'};

    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
      border: 1px solid white;
    }

    @media ${device.mobileL} {
      font-size: 2.3rem;
      width: 7.5rem;
    }

    @media ${device.mobileM} {
      font-size: 2rem;
      width: 6rem;
    }

    @media ${device.mobileS} {
      font-size: 2rem;
      width: 4rem;
    }
  `}
`;
