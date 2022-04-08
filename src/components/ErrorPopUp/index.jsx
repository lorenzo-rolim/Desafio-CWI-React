import React from 'react';

import P from 'prop-types';
import * as Styled from './styles';

const ErrorPopUp = ({ children, setError }) => {
  return (
    //
    <Styled.Container>
      <Styled.Title>Ocorreu um Erro</Styled.Title>
      <Styled.Title>Tente Novamente mais Tarde!</Styled.Title>
      <Styled.Button onClick={() => setError(false)}>Fechar</Styled.Button>
    </Styled.Container>
  );
};
ErrorPopUp.propTypes = {
  children: P.node,
  setError: P.func,
};

export default ErrorPopUp;
