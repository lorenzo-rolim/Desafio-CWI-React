import styled, { css } from 'styled-components';
import { device } from '../../constants/breakpoints';

export const Container = styled.section`
  ${({ theme }) => css`
    width: 80vw;
    height: 80vh;

    border: 1px solid white;
    border-radius: 10px;

    justify-content: center;
    display: flex;
    align-items: center;
    margin-top: 8vh;

    @media ${device.mobileL} {
      flex-direction: column;
      overflow-y: auto;
    }
  `}
`;

export const ContainerIMG = styled.div`
  ${({ theme }) => css`
    height: 95%;
    width: 50%;

    display: flex;
    justify-content: center;
    align-items: center;

    @media ${device.mobileL} {
      height: 40%;
      width: 90%;
    }
  `}
`;

export const ComicBanner = styled.img`
  ${({ theme }) => css`
    height: 100%;
    border-radius: 10px;
    object-fit: contain;

    @media ${device.laptopL} {
      max-width: 90%;
      max-height: 80%;
      height: auto;
    }
  `}
`;

export const ContentContainer = styled.div`
  ${({ theme }) => css`
    width: 50%;
    height: 100%;

    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    border-left: 1px solid white;

    border-radius: 0px 10px 10px 0px;
    overflow-y: auto;

    &::-webkit-scrollbar {
      width: 2px;
    }

    &::-webkit-scrollbar-thumb {
      background: linear-gradient(to bottom, #e52d27, #b31217, #7a2828);
      border-radius: 20px;
    }

    @media ${device.mobileL} {
      width: 100%;
      border-radius: 0px;
      border-left: none;
      border-top: 1px solid white;
    }
  `}
`;

export const ContentTitle = styled.h1`
  ${({ theme }) => css`
    font-family: ${theme.font.family.thirdFont};

    text-align: center;

    width: 90%;

    margin: auto;
    margin-top: 3rem;

    font-size: 5rem;

    background-image: linear-gradient(to bottom, #e52d27, #b31217, #7a2828);
    color: black;
    background-clip: text;
    -webkit-background-clip: text;

    /* Adicionado: */
    -webkit-text-fill-color: transparent;

    @media ${device.laptop} {
      font-size: 4rem;
    }
    @media ${device.tablet} {
      font-size: 3.5rem;
    }
    @media (max-width: 550px) {
      font-size: 3rem;
    }
    @media ${device.mobileL} {
      margin-top: 20rem;
    }
  `}
`;

export const ContentSubTitle = styled.h2`
  ${({ theme }) => css`
    font-family: ${theme.font.family.thirdFont};

    text-align: center;

    margin-top: 2rem;
    font-size: 4.5rem;

    background-image: linear-gradient(to bottom, #e52d27, #b31217, #7a2828);
    color: black;
    background-clip: text;
    -webkit-background-clip: text;

    /* Adicionado: */
    -webkit-text-fill-color: transparent;

    @media ${device.laptop} {
      font-size: 3.5rem;
    }
    @media ${device.tablet} {
      font-size: 3rem;
    }
  `}
`;

export const ContentParagraph = styled.h2`
  ${({ theme, fontSize = '3.2rem', marginLeft = '' }) => css`
    font-family: ${theme.font.family.thirdFont};

    text-align: center;

    font-size: ${fontSize};
    font-weight: 400;
    font-style: italic;

    margin-left: ${marginLeft};

    flex-wrap: wrap;
    color: white;

    max-width: 100%;

    @media ${device.tablet} {
      font-size: 2.5rem;
    }
  `}
`;

export const CreatorsDiv = styled.div`
  ${({ theme }) => css`
    justify-content: space-around;
    display: flex;
    margin: auto;
    width: 90%;
    height: 8vh;
    overflow-y: auto;

    flex-wrap: wrap;

    &::-webkit-scrollbar {
      width: 5px;
    }

    &::-webkit-scrollbar-thumb {
      background: linear-gradient(to bottom, #e52d27, #b31217, #7a2828);
      border-radius: 20px;
    }

    @media ${device.mobileL} {
      min-height: 7vh;
    }
  `}
`;

export const DescriptionDiv = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    margin: auto;
    width: 90%;
    min-height: 20vh;
    overflow-y: auto;

    margin-bottom: 2rem;

    flex-wrap: wrap;

    &::-webkit-scrollbar {
      width: 5px;
    }

    &::-webkit-scrollbar-thumb {
      background: linear-gradient(
        to bottom,
        #e52d27,
        #b31217,
        #7a2828
      ); /* color of the scroll thumb */
      border-radius: 20px; /* roundness of the scroll thumb */
    }
  `}
`;
