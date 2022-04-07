import React from 'react';
import P from 'prop-types';
import * as Styled from './styles';
import Banner from '../../assets/banners/comic-teste.jpg';

const DetailsModalBanner = ({ children, data }) => {
  console.log(data);
  return (
    //
    <Styled.Container>
      <Styled.ModalBanner src={`${data.image}.${data.extension}`} alt="b" />
    </Styled.Container>
  );
};

DetailsModalBanner.propTypes = {
  children: P.node,
};

export default DetailsModalBanner;
