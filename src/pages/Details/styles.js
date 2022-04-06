import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    height: 100vw;
    width: 100vw;
    background-color: #333;
  `}
`;
