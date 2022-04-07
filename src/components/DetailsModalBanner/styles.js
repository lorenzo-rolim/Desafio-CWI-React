import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    height: 75vh;
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
  `}
`;

export const ModalBanner = styled.img`
  ${({ theme }) => css`
    border-radius: 20px;
    object-fit: cover;
    height: 100%;
  `}
`;
