import React from "react";
import P from "prop-types";
import * as Styled from "./styles";
import Header from "../../components/Header";
import FullBanner from "../../components/FullBaner";
import ComicsHeader from "../../components/ComicsHeader";
import ComicsSection from "../../components/ComicsSection";
import ComicsInput from "../../components/ComicsInput";
import ComicsGrid from "../../components/ComicsGrid";

const Home = ({ children }) => {
  return (
    //
    <Styled.Container>
      <Header title="Marvel Comics" />
      <FullBanner />
      <ComicsHeader />
      <ComicsSection>
        <ComicsInput />
        <ComicsGrid />
      </ComicsSection>
    </Styled.Container>
  );
};

Home.propTypes = {
  children: P.node,
};

export default Home;
