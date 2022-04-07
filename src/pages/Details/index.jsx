import React from 'react';
import P from 'prop-types';
import * as Styled from './styles';
import Header from '../../components/Header';
import DatailsSection from '../../components/DetailsSection';

const Details = ({ children }) => {
  return (
    //
    <Styled.Container>
      <Header title="Marvel Datails" />
      <DatailsSection />
    </Styled.Container>
  );
};

Details.propTypes = {
  children: P.node,
};

export default Details;
