import styled, { css } from 'styled-components';

export const Container = styled.section`
  ${({ theme }) => css`
    width: 80vw;
    height: 80vh;
    margin-top: 7.5vh;
    border-radius: 20px;

    background: linear-gradient(to right, #a73737, #7a2828);
  `}
`;
