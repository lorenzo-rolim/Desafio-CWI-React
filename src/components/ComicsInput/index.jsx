import React from "react";
import P from "prop-types";
import * as Styled from "./styles";

const ComicsInput = ({ children }) => {
  return (
    <Styled.ContainerSearchInput>
      <Styled.ContainerBorder>
        <Styled.SearchInput type="search" />
        <Styled.TitleInput data-placeholder="Pesquise aqui os quadrinhos que você tem interesse!"></Styled.TitleInput>
      </Styled.ContainerBorder>
    </Styled.ContainerSearchInput>
  );
};

ComicsInput.propTypes = {
  children: P.node,
};

export default ComicsInput;
