import styled, { css } from "styled-components";
import bannerBang from "../../assets/banners/fundo-full-banner.jpg";

export const Container = styled.div`
  ${({ theme }) => css`
    margin-top: 7.5vh;
    width: 100%;
    height: 70vh;

    box-sizing: border-box;
    position: relative;
    overflow: hidden;
    background-color: black;

    & > img {
      right: 0;
    }
  `}
`;

export const ContainerImg = styled.div`
  ${({ theme }) => css`
    margin: auto;
    height: 100%;
    width: 80%;
    display: flex;
    justify-content: center;
    box-sizing: border-box;
    position: relative;
    z-index: 4;
  `}
`;

export const FullBanner = styled.img`
  ${({ theme }) => css`
    margin: auto;
    width: 100%;
    height: 100%;
    object-fit: cover;
  `}
`;

export const BangBackground = styled.img`
  ${({ theme, right = "", left = "" }) => css`
    position: absolute;
    right: ${right};
    top: 0;
    left: ${left};
    background-repeat: repeat-x;
    background-image: ${bannerBang};

    height: 100%;
  `}
`;

export const Title = styled.h1`
  ${({ theme }) => css``}
`;

export const BlurContainer = styled.div`
  ${({ theme }) => css`
    margin: auto;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    box-sizing: border-box;
    position: relative;
    z-index: 4;

    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(7px);
    -webkit-backdrop-filter: blur(7px);
  `}
`;
