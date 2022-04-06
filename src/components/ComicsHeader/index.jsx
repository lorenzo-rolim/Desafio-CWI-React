import React from "react";
import P from "prop-types";
import * as Styled from "./styles";

const ComicsHeader = ({ children }) => {
  return (
    //
    <Styled.Container>
      <Styled.TitleContainer>
        <Styled.Title>Encontre aqui os seus preferidos!</Styled.Title>
      </Styled.TitleContainer>
    </Styled.Container>
  );
};

ComicsHeader.propTypes = {
  children: P.node,
};

export default ComicsHeader;
