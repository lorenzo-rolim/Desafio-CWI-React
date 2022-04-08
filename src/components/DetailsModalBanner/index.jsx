import React from 'react';
import P from 'prop-types';
import * as Styled from './styles';

const DetailsModalBanner = ({ children, data = {} }) => {
  return (
    //
    <Styled.Container>
      <Styled.ModalBanner
        src={`${
          !data.image ? 'Sem imagem' : `${data.image}.${data.extension}`
        }`}
        alt="Comic Photo"
      />
    </Styled.Container>
  );
};

DetailsModalBanner.propTypes = {
  children: P.node,
  data: P.object,
};

export default DetailsModalBanner;
