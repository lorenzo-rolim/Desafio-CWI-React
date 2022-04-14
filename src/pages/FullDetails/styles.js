import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100vw;
    height: 100vh;
    background-color: ${theme.colors.gray};

    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
  `}
`;
