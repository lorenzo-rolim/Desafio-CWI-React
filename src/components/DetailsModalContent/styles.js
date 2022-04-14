import styled, { css } from 'styled-components';
import { device } from '../../constants/breakpoints';

export const Container = styled.div`
  ${({ theme }) => css`
    background-color: #333;
    border: 1px solid white;
    border-radius: 10px;
    height: 95%;
    width: 45%;
    margin: auto;

    @media ${device.mobileL} {
      width: 90%;
      max-height: 45%;
      margin-bottom: 5%;
      overflow-y: auto;

      &::-webkit-scrollbar {
        width: 5px;
      }

      &::-webkit-scrollbar-thumb {
        background: linear-gradient(to bottom, #e52d27, #b31217, #7a2828);
        border-radius: 20px;
      }
    }
  `}
`;

export const Title = styled.h1`
  ${({ theme }) => css`
    text-align: center;
    margin-top: 3vh;

    font-size: 3.5rem;
    font-family: ${theme.font.family.thirdFont};
    text-transform: uppercase;
    font-weight: 800;

    background: linear-gradient(to right, #ed213a, #93291e);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    @media ${device.laptop} {
      font-size: 1.8rem;
      padding: 0 20px;
    }

    @media ${device.tablet} {
      font-size: 2rem;
    }
  `}
`;

export const ContainerDetails = styled.div`
  ${({ theme }) => css`
    width: 90%;
    height: 85%;

    display: flex;
    flex-direction: column;

    margin: auto;
    margin-top: 1%;
  `}
`;

export const DetailsTitle = styled.h2`
  ${({ theme }) => css`
    font-size: 23px;
    font-family: ${theme.font.family.secondFont};
    text-transform: uppercase;
    font-style: italic;
    font-weight: 800;

    margin-top: 5%;
    text-align: center;

    background: linear-gradient(to right, #ed213a, #93291e);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    @media ${device.laptop} {
      font-size: 1.8rem;
    }
    @media ${device.tablet} {
      font-size: 1.5rem;
    }
  `}
`;

export const DetailsTextContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

    &::-webkit-scrollbar {
      width: 5px;
    }

    &::-webkit-scrollbar-thumb {
      background: linear-gradient(to bottom, #e52d27, #b31217, #7a2828);
      border-radius: 20px;
    }
  `}
`;

export const DetailsText = styled.span`
  ${({ theme, fontSize = '20px', overflow = 'auto' }) => css`
    font-size: ${fontSize};
    font-family: ${theme.font.family.secondFont};
    text-transform: uppercase;
    font-weight: 600;
    text-align: center;
    min-height: 25px;
    overflow-x: hidden;

    padding-right: 10px;
    padding-left: 10px;

    overflow-y: ${overflow};

    &::-webkit-scrollbar {
      width: 5px;
    }

    &::-webkit-scrollbar-thumb {
      background: linear-gradient(to bottom, #e52d27, #b31217, #7a2828);
      border-radius: 20px;
    }

    color: white;
  `}
`;

export const DescriptionContainer = styled.div`
  ${({ theme }) => css`
    overflow-y: auto;
    height: 80%;

    display: flex;
    justify-content: center;

    @media ${device.laptopL} {
      height: 55%;
    }
    @media ${device.laptop} {
      height: 65%;
    }
    @media ${device.mobileL} {
      overflow-y: visible;
      height: 80vh;
    }
  `}
`;

export const DetailsButtonsContainer = styled.div`
  ${({ theme }) => css`
    height: 45%;

    display: flex;
    justify-content: space-around;
    align-items: center;
  `}
`;

export const DetailsModalButton = styled.button`
  ${({ theme }) => css`
    border: none;

    border-radius: 10px;

    font-size: 15px;
    font-family: ${theme.font.family.secondFont};
    text-transform: uppercase;
    font-weight: 600;

    margin: 5rem 0;

    cursor: pointer;

    color: white;
    background: linear-gradient(to right, #ed213a, #93291e);
    padding: 2rem 3rem;

    transition: all 0.2s ease-in-out;

    &:hover {
      box-shadow: 3px 3px 5px 0px rgba(147, 41, 30, 0.5);
    }

    @media ${device.mobileL} {
      margin-top: 10rem;
      padding: 1.5rem 2rem;
    }
  `}
`;
