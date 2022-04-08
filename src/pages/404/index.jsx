import React from 'react';
import P from 'prop-types';
import * as Styled from './styles';
import Header from '../../components/Header';

const NotFoundRoute = ({ children }) => {
  return (
    //
    <Styled.Container>
      <Header title="Marvel 404" />
      <Styled.Container404>
        <Styled.Title>OPS...</Styled.Title>
        <Styled.Menssage>
          Ocorreu um erro e não foi possível localizar o caminho
        </Styled.Menssage>
        <Styled.SpanLink>
          <Styled.Link href="/home">Voltar a página Inicial</Styled.Link>
        </Styled.SpanLink>
      </Styled.Container404>
    </Styled.Container>
  );
};

NotFoundRoute.propTypes = {
  children: P.node,
};

export default NotFoundRoute;
