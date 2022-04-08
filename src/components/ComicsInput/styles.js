import styled, { css } from 'styled-components';
import { device } from '../../constants/breakpoints';

export const ContainerSearchInput = styled.div`
  ${({ theme }) => css`
    width: 80vw;
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

    color: ${color};

    background-color: transparent;
    padding: 0 5px;

    &:focus {
      outline: none;
      box-shadow: 5px 10px 5px 0px rgba(255, 255, 255, 0.1);
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
      background-color: ${beforeBG};
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
    }

    ${SearchInput}:focus + &::after {
      top: -30px;
      color: white;
    }

    ${SearchInput}:focus + &::before {
      width: 100%;
    }
  `}
`;
