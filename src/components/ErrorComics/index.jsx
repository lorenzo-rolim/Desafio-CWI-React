import React from 'react';
import P from 'prop-types';
import * as Styled from './styles';
import { MdOutlineErrorOutline } from 'react-icons/md';

const ErrorComics = ({ children }) => {
  return (
    //
    <Styled.Container>
      <MdOutlineErrorOutline />
      <Styled.ErrorTitle>Ocorreu um erro!</Styled.ErrorTitle>
      <Styled.ErrorTitle>
        Não foi possivel carregar os quadrinhos.
      </Styled.ErrorTitle>
      <Styled.ErrorTitle>Tente novamente mais tarde.</Styled.ErrorTitle>
    </Styled.Container>
  );
};

ErrorComics.propTypes = {
  children: P.node,
};

export default ErrorComics;
