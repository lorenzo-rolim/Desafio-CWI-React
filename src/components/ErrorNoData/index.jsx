import React from 'react';
import P from 'prop-types';
import * as Styled from './styles';
import { ImSad } from 'react-icons/im';

const ErrorNoData = ({ children }) => {
  return (
    //
    <Styled.Container>
      <ImSad />
      <Styled.NoDataTitle>
        Desculpe mas não existem quadrinhos no momento
      </Styled.NoDataTitle>
    </Styled.Container>
  );
};

ErrorNoData.propTypes = {
  children: P.node,
};

export default ErrorNoData;
