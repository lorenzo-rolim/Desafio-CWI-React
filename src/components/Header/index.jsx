import React from "react";
import P from "prop-types";
import * as Styled from "./styles";

const Header = ({ children, title }) => {
  return (
    //
    <Styled.Container>
      <Styled.LogoContainer>
        <Styled.Logo>{title}</Styled.Logo>
      </Styled.LogoContainer>
    </Styled.Container>
  );
};

Header.propTypes = {
  title: P.string,
};

export default Header;
