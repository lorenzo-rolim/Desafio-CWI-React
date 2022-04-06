import React from "react";
import P from "prop-types";
import * as Styled from "./styles";
import Header from "../../components/Header";
import FullBaner from "../../components/FullBaner";

const Home = ({ children }) => {
  return (
    //
    <Styled.Container>
      <Header title="Marvel Comics" />
      <FullBaner />
    </Styled.Container>
  );
};

Home.propTypes = {
  children: P.node,
};

export default Home;
