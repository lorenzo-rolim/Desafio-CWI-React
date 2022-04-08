import React from 'react';
import P from 'prop-types';
import * as Styled from './styles';

const ComicsSection = ({ children }) => {
  return (
    //
    <Styled.Section>{children}</Styled.Section>
  );
};

ComicsSection.propTypes = {
  children: P.node,
};

export default ComicsSection;
