import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    margin-top: 7.5vh;
    width: 100%;
    height: 80vh;
  `}
`;

export const ContainerImg = styled.div`
  ${({ theme }) => css`
    margin: auto;
    height: 100%;
    width: 85%;
    display: flex;
    justify-content: center;
    overflow: hidden;
  `}
`;

export const FullBanner = styled.img`
  ${({ theme }) => css`
    margin: auto;
    overflow: hidden;
    width: 100%;
    height: 100vh;
  `}
`;

export const BangBackground = styled.img`
  ${({ theme }) => css``}
`;
