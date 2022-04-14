import React from 'react';
import P from 'prop-types';
import * as Styled from './styles';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import FullDetailsContainer from '../../components/FullDetailsContainer';
import ReturnButton from '../../components/ReturnButton';

const FullDetails = ({ children }) => {
  return (
    //
    <Styled.Container>
      <ReturnButton href="/">Voltar</ReturnButton>
      <Header title="Marvel Details" />
      <FullDetailsContainer></FullDetailsContainer>
      <Footer />
    </Styled.Container>
  );
};

FullDetails.propTypes = {
  children: P.node,
};

export default FullDetails;
