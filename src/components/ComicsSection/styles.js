import styled, { css } from "styled-components";

export const Section = styled.section`
  ${({ theme }) => css`
    width: 100%;
    background-color: #333;

    padding-top: 10vh;
    padding-bottom: 10vh;
  `}
`;
