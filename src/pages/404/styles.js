import styled, { css } from 'styled-components';
import { device } from '../../constants/breakpoints';

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100vw;
    height: 100vh;
    background-color: #333;

    display: flex;
    justify-content: center;
    align-items: center;
  `}
`;

export const Container404 = styled.div`
  ${({ theme }) => css`
    width: 80vw;
    height: 80vh;

    margin-top: 7.5vh;

    display: flex;
    flex-direction: column;

    text-align: center;
    justify-content: center;
  `}
`;

export const Title = styled.h1`
  ${({ theme }) => css`
    color: red;
    font-family: ${theme.font.family.default}

    font-size: 15rem;

    text-align: center;
    user-select: none;

    text-transform: uppercase;
    font-weight: 400;


    @media ${device.tablet}{
        font-size: 13rem;
    }
    @media ${device.mobileL}{
        font-size: 13rem;
    }
    @media ${device.mobileS}{
        font-size: 7rem;
    }
  `}
`;

export const Menssage = styled.p`
  ${({ theme }) => css`
    color: white;
    font-family: ${theme.font.family.default}
    margin-top: 10rem;

    font-size: 8rem;

    text-align: center;
    user-select: none;

    text-transform: uppercase;
    font-weight: 400;

    @media ${device.mobileL}{
        font-size: 5rem;
    }
    @media ${device.mobileS}{
        font-size: 3rem;
    }
  `}
`;

export const SpanLink = styled.span`
  ${({ theme }) => css``}
`;

export const Link = styled.a`
  ${({ theme }) => css`
    color: white;
    font-family: ${theme.font.family.default}
    font-size: 2rem;
    margin-top: 10rem;

    display: inline-block;

    font-size: 6rem;

    text-align: center;
    user-select: none;

    text-transform: uppercase;
    font-weight: 400;

    text-decoration: none;

    transition: all 0.2s ease;

    @media ${device.mobileS}{
        font-size: 5rem;
    }

    &:hover{
        color: red;
    }
    `}
`;
