import React from 'react';
import P from 'prop-types';
import * as Styled from './styles';
import DetailsModalBanner from '../DetailsModalBanner';
import DetailsModalContent from '../DetailsModalContent';
import ReturnButton from '../ReturnButton';
import { initialState } from '../../constants/breakpoints';

const DetailsModal = ({ children, data = {}, setData }) => {
  return (
    //
    <>
      <div onClick={() => setData(initialState)}>
        <ReturnButton ScaleFlag={!!data.title} setData={setData}>
          X
        </ReturnButton>
      </div>
      <Styled.Container ScaleFlag={data.title} data-testid="modal">
        <Styled.ModalContainer>
          <DetailsModalBanner data={data} />
          <DetailsModalContent data={data} setData={setData} />
        </Styled.ModalContainer>
      </Styled.Container>
    </>
  );
};

DetailsModal.propTypes = {
  children: P.node,
  data: P.object,
  setData: P.func,
};

export default DetailsModal;
