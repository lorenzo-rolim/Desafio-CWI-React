import React from 'react';
import P from 'prop-types';
import * as Styled from './styles';

const ComicsEmail = ({ children, inputValue = '' }) => {
  console.log(inputValue);
  return (
    //
    <Styled.Container>
      <Styled.FormEmailContainer>
        <Styled.FormTitle>
          Basta selecionar e enviar diretamente para seu E-mail!
        </Styled.FormTitle>
        <Styled.Form>
          {children}
          <Styled.FormButton haveValues={inputValue}>
            Enviar Quadrinhos
          </Styled.FormButton>
        </Styled.Form>
      </Styled.FormEmailContainer>
    </Styled.Container>
  );
};

ComicsEmail.propTypes = {
  children: P.node,
  inputValue: P.string,
};

export default ComicsEmail;
