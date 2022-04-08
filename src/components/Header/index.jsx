import React from 'react';
import P from 'prop-types';
import * as Styled from './styles';

const Header = ({ children, title }) => {
  return (
    //
    <Styled.Container role="header">
      <Styled.LogoContainer>
        <Styled.Logo>{title}</Styled.Logo>
      </Styled.LogoContainer>
    </Styled.Container>
  );
};

Header.propTypes = {
  children: P.node,
  title: P.string,
};

export default Header;
