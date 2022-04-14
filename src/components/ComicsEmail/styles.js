import styled, { css } from 'styled-components';
import { device } from '../../constants/breakpoints';

export const Container = styled.div`
  ${({ theme }) => css`
    height: 50vh;
    width: 80vw;

    margin: auto;
    margin-top: 3vh;

    border-radius: 20px;
    border: 1px solid white;
    background: ${theme.colors.gradient};

    display: flex;
  `}
`;

export const FormEmailContainer = styled.div`
  ${({ theme }) => css`
    width: 95%;
    height: 95%;
    margin: auto;
    border-radius: 20px;

    background-color: white;
  `}
`;

export const FormTitle = styled.h2`
  ${({ theme }) => css`
    font-size: 3rem;

    text-align: center;

    color: black;
    margin-top: 3rem;
    margin-bottom: 5rem;

    font-family: ${theme.font.family.secondFont};
    text-transform: uppercase;
    font-style: italic;
    font-weight: 700;

    @media ${device.desktop} {
      font-size: 3rem;
    }
    @media ${device.laptop} {
      font-size: 2.2rem;
    }
    @media ${device.laptop} {
      font-size: 1.7rem;
    }

    @media ${device.mobileS} {
      margin-top: 0.5rem;
      margin-bottom: 3rem;
      font-size: 1.7rem;
    }
  `}
`;

export const Form = styled.form`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    height: 50%;
    align-items: center;
    justify-content: space-around;
  `}
`;

export const FormButton = styled.button`
  ${({ theme, haveValues = '' }) => css`
    padding: 20px 40px;

    background-color: white;
    font-family: ${theme.font.family.secondFont};
    text-transform: uppercase;
    font-style: italic;
    font-weight: 700;
    font-size: 2rem;

    color: ${haveValues ? 'black' : '#AAA'};

    transition: all 0.3s ease-in-out;

    cursor: pointer;

    border: 1px solid ${haveValues ? 'black' : '#adadad'};

    &:hover {
      box-shadow: 5px 10px 5px 0px
        ${haveValues ? 'rgba(0, 0, 0, 0.6)' : '#adadad'};
    }

    @media ${device.mobileL} {
      font-size: 1.5rem;
      padding: 15px 15px;
    }
    @media ${device.mobileS} {
      padding: 10px 10px;
      margin-bottom: 10px;
    }
  `}
`;

export const ContainerSearchInput = styled.div`
  ${({ theme }) => css`
    width: 50vw;
    height: 10vh;
    margin: auto;

    box-sizing: border-box;

    border: 2px solid none;

    display: flex;
    justify-content: center;
    align-items: center;

    flex-direction: row;
  `}
`;
export const ContainerBorder = styled.div`
  ${({ theme }) => css`
    position: relative;
    border-bottom: 2px solid #adadad;

    width: 45vw;
    @media ${device.mobileL} {
      font-size: 1rem;
      width: 75vw;
    }
  `}
`;

export const SearchInput = styled.input`
  ${({ theme, color = 'white' }) => css`
    font-size: 30px;
    color: #fff;
    line-height: 1.2;
    border: none;
    display: block;

    transition: box-shadow 0.3s ease;

    font-family: ${theme.font.family.secondFont};
    text-transform: uppercase;
    font-style: italic;
    font-weight: 700;

    width: 100%;
    height: 60px;

    color: black;

    background-color: transparent;
    padding: 0 5px;

    &:focus {
      outline: none;
      box-shadow: 5px 10px 5px 0px rgba(255, 255, 255, 0.1);
    }

    @media ${device.mobileL} {
      font-size: 1.8rem;
    }

    @media ${device.mobileS} {
      font-size: 1.5rem;
    }
  `}
`;

export const SearchButton = styled.button`
  ${({ theme }) => css``}
`;

export const TitleInput = styled.span`
  ${({
    theme,
    color = '',
    after = '',
    afterEffect = '',
    beforeBG = 'white',
  }) => css`
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;

    top: 0;
    left: 0;

    pointer-events: none;

    &::before {
      content: '';
      display: block;
      position: absolute;
      bottom: -2px;
      left: 0;
      width: 0%;
      height: 2px;

      transition: all 0.4s;
      -o-transition: all 0.4s;
      -moz-transition: all 0.4s;
      background-color: black;
    }

    &::after {
      content: attr(data-placeholder);

      font-family: ${theme.font.family.secondFont};
      font-size: 20px;
      color: #adadad;
      line-height: 1.2;
      text-transform: uppercase;
      font-style: italic;
      font-weight: 700;

      display: block;

      width: 100%;
      position: absolute;
      top: ${afterEffect ? '-30px' : '30px'};
      left: 0px;

      padding-left: 5px;

      transition: all 0.4s;
      -webkit-transition: all 0.4s;
      -o-transition: all 0.4s;
      -moz-transition: all 0.4s;

      @media ${device.tablet} {
        font-size: 1.5rem;
      }
      @media ${device.mobileS} {
        font-size: 1.5rem;
      }
    }

    ${SearchInput}:focus + &::after {
      top: -30px;
      color: black;
    }

    ${SearchInput}:focus + &::before {
      width: 100%;
    }
  `}
`;
