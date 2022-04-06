import React from "react";
import P from "prop-types";
import * as Styled from "./styles";

import bannerSpiderMan from "../../assets/banners/homem-aranha-fullbaner.jpg";

const FullBaner = ({ children }) => {
  return (
    //
    <Styled.Container>
      <Styled.ContainerImg>
        <Styled.FullBanner
          src={bannerSpiderMan}
          alt="Full banner contendo quadrinho do homem aranha"
        />
      </Styled.ContainerImg>
    </Styled.Container>
  );
};

FullBaner.propTypes = {
  children: P.node,
};

export default FullBaner;
