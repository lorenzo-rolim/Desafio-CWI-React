import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    background-color: #333;
    border-radius: 20px;
    height: 95%;
    width: 95%;
    margin: auto;
  `}
`;

export const Title = styled.h1`
  ${({ theme }) => css`
    text-align: center;
    margin-top: 3vh;

    font-size: 25px;
    font-family: ${theme.font.family.secondFont};
    text-transform: uppercase;
    font-style: italic;
    font-weight: 800;

    background: linear-gradient(to right, #ed213a, #93291e);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
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
  `}
`;

export const DetailsTextContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  `}
`;

export const DetailsText = styled.p`
  ${({ theme, fontSize = '20px' }) => css`
    font-size: ${fontSize};
    font-family: ${theme.font.family.secondFont};
    text-transform: uppercase;
    font-weight: 600;

    text-align: center;

    padding-right: 10px;
    padding-left: 10px;

    background: linear-gradient(to right, #ed213a, #93291e);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
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

    cursor: pointer;

    color: white;
    background: linear-gradient(to right, #ed213a, #93291e);
    padding: 2rem 3rem;

    transition: all 0.2s ease-in-out;

    &:hover {
      box-shadow: 3px 3px 5px 0px rgba(147, 41, 30, 0.5);
    }
  `}
`;
