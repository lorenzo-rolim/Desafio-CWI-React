import React from 'react';

import P from 'prop-types';
import * as Styled from './styles';

const PopUp = ({
  children,
  setError,
  setSuccess,
  error = false,
  title = '',
  description = '',
}) => {
  return (
    //
    <Styled.Container error={error} data-testid="popup-container">
      <Styled.Title>{title}</Styled.Title>
      <Styled.Title>{description}</Styled.Title>
      <Styled.Button
        onClick={error ? () => setError(false) : () => setSuccess(false)}
        data-testid="button-error"
      >
        Fechar
      </Styled.Button>
    </Styled.Container>
  );
};
PopUp.propTypes = {
  children: P.node,
  setError: P.func,
  setSuccess: P.func,
  error: P.bool,
  title: P.string,
  description: P.string,
};

export default PopUp;
