import React, { useRef } from 'react';
import P from 'prop-types';
import * as Styled from './styles';
import { useSendEmail } from '../../hooks/useSendEmail';

const ComicsEmail = ({
  children,
  inputValue = '',
  setInputValue,
  setError,
}) => {
  const FormInput = useRef();
  const { Email, error } = useSendEmail();

  const HandlerInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const HandlerSendEmail = async (e) => {
    e.preventDefault();

    if (inputValue === '') {
      return setError(true);
    }

    await Email(e, FormInput, setInputValue);
    setError(error);
  };

  return (
    //
    <Styled.Container>
      <Styled.FormEmailContainer>
        <Styled.FormTitle>
          Insira e envie os quadrinhos para seu E-Mail
        </Styled.FormTitle>
        <Styled.Form onSubmit={(e) => HandlerSendEmail(e)} ref={FormInput}>
          <Styled.ContainerSearchInput>
            <Styled.ContainerBorder>
              <Styled.SearchInput
                type="text"
                name="email"
                value={inputValue}
                onChange={(e) => HandlerInputChange(e)}
              />
              <Styled.TitleInput
                afterEffect={inputValue}
                data-placeholder="Digite seu E-mail"
              ></Styled.TitleInput>
            </Styled.ContainerBorder>
          </Styled.ContainerSearchInput>
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
  setInputValue: P.func,
  setError: P.func,
};

export default ComicsEmail;
