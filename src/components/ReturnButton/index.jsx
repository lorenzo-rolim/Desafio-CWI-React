import React from 'react';
import P from 'prop-types';
import * as Styled from './styles';
import { Link } from 'react-router-dom';

const ReturnButton = ({ children, href = '', ScaleFlag = true }) => {
  return (
    //
    <Link to={href}>
      <Styled.Container ScaleFlag={ScaleFlag}>{children}</Styled.Container>
    </Link>
  );
};

ReturnButton.propTypes = {
  children: P.node,
  href: P.string,
  ScaleFlag: P.bool,
};

export default ReturnButton;
