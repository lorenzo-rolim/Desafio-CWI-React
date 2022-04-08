import React from 'react';
import P from 'prop-types';
import * as Styled from './styles';

const ComicsHeader = ({ children, title }) => {
  return (
    //
    <Styled.Container>
      <Styled.TitleContainer>
        <Styled.Title>{title}</Styled.Title>
      </Styled.TitleContainer>
    </Styled.Container>
  );
};

ComicsHeader.propTypes = {
  children: P.node,
  title: P.string,
};

export default ComicsHeader;
