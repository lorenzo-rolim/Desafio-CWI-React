import styled, { css } from 'styled-components';
import { device } from '../../constants/breakpoints';

export const Container = styled.div`
  ${({ theme }) => css`
    height: 75vh;
    margin: auto;
    width: 50%;

    display: flex;
    justify-content: center;
    align-items: center;

    @media ${device.mobileL} {
      width: 60%;
    }
  `}
`;

export const ModalBanner = styled.img`
  ${({ theme }) => css`
    border-radius: 20px;
    object-fit: cover;
    height: 100%;
    max-height: 100%;

    @media ${device.laptopL} {
      height: auto;
      width: 100%;
    }
  `}
`;
