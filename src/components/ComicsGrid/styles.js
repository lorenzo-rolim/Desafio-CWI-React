import styled, { css } from 'styled-components';
import { device } from '../../constants/breakpoints';

export const Container = styled.div`
  ${({ theme }) => css`
    width: 80vw;
    margin: auto;
    margin-top: 10vh;
    border-radius: 20px;

    display: flex;
    justify-content: center;
    align-items: center;

    margin-bottom: 3vh;

    background: ${theme.colors.gradient};
    border: 1px solid white;

    @media ${device.mobileS} {
      width: 95%;
    }
  `}
`;

export const GridContainer = styled.div`
  ${({ theme }) => css`
    margin: 2rem;
    height: 90%;
    width: 90%;

    position: relative;

    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-gap: 5rem;

    background-color: white;
    border-radius: 10px;

    padding-top: 5rem;
    padding-bottom: 5rem;
    @media ${device.mobileS} {
      width: 95%;
    }
  `}
`;

export const GridCell = styled.div`
  ${({ theme }) => css`
    margin: auto;
    border-radius: 20px;
    position: relative;

    width: 250px;

    display: flex;
    justify-content: stretch;
    align-items: center;

    flex-direction: column;
    margin-top: 2rem;
  `}
`;

export const GridCellImg = styled.img`
  ${({ theme, selected = false }) => css`
    border: 1px solid black;
    max-width: 100%;
    width: 80%;

    max-height: 80%;
    object-fit: cover;

    cursor: pointer;
    margin-top: 5px;
    transition: all 0.2s ease-in-out;

    transform: ${selected ? 'scale(0.5)' : ''};

    border-radius: 10px;
  `}
`;

export const GridCellTitle = styled.h2`
  ${({ theme }) => css`
    margin-top: 1rem;
    padding: 0.3rem;

    font-size: 20px;

    font-family: ${theme.font.family.secondFont};
    text-transform: uppercase;
    font-style: italic;
    font-weight: 700;

    color: black;

    text-align: center;
  `}
`;

export const GridCellHover = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;

    background: rgba(255, 255, 255, 0.25);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(7px);

    opacity: 0;
    visibility: visible;

    cursor: pointer;

    transition: all 0.3s ease-in-out;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

    &:hover {
      opacity: 1;
    }

    position: absolute;
  `}
`;

export const GridCellButtons = styled.button`
  ${({ theme, color = 'white', BGcolor = 'white', BoxShadow = 'white' }) => css`
    border: none;
    padding: 2rem;
    border-radius: 10px;

    font-family: ${theme.font.family.secondFont};
    text-transform: uppercase;
    font-style: italic;
    font-weight: 700;
    transition: all 0.2s ease;

    color: white;
    background-color: ${BGcolor};

    &:hover {
      box-shadow: 3px 3px 6px 0px ${BoxShadow};
    }

    cursor: pointer;
  `}
`;
