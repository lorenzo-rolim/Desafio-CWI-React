import React from 'react';
import P from 'prop-types';
import * as Styled from './styles';
import DetailsModalBanner from '../DetailsModalBanner';
import DetailsModalContent from '../DetailsModalContent';

const DetailsModal = ({ children, data = {}, setData }) => {
  return (
    //
    <Styled.Container ScaleFlag={data.title}>
      <Styled.ModalContainer>
        <DetailsModalBanner data={data} />
        <DetailsModalContent data={data} setData={setData} />
      </Styled.ModalContainer>
    </Styled.Container>
  );
};

DetailsModal.propTypes = {
  children: P.node,
  data: P.object,
  setData: P.func,
};

export default DetailsModal;
