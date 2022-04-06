import styled, { css } from 'styled-components';

const ColorEffect = () => css`
  background: linear-gradient(to left, #a73737, #7a2828);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const Container = styled.div`
  ${({ theme }) => css`
    height: 50vh;
    width: 80vw;

    margin: auto;
    margin-top: 3vh;

    border-radius: 20px;
    border: 1px solid white;
    background: linear-gradient(to right, #a73737, #7a2828);

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

    background: linear-gradient(to left, #a73737, #7a2828);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    margin-top: 3rem;
    margin-bottom: 5rem;

    font-family: ${theme.font.family.secondFont};
    text-transform: uppercase;
    font-style: italic;
    font-weight: 700;
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

    color: ${haveValues ? '' : '#AAA'};

    ${haveValues && ColorEffect()}

    transition: all 0.3s ease-in-out;

    cursor: pointer;

    border: 1px solid ${haveValues ? 'red' : '#adadad'};

    &:hover {
      box-shadow: 5px 10px 5px 0px
        ${haveValues ? 'rgba(255, 0, 0, 0.5)' : '#adadad'};
    }
  `}
`;
