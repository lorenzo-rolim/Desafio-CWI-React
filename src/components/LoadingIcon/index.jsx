import React from 'react';
import P from 'prop-types';
import * as Styled from './styles';

const LoadingIcon = ({ children }) => {
  return (
    //
    <Styled.Container role="loading"></Styled.Container>
  );
};

LoadingIcon.propTypes = {
  children: P.node,
};

export default LoadingIcon;
