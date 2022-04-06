import React from 'react';
import P from 'prop-types';
import * as Styled from './styles';

const ComicsInput = ({
  children,
  setInputValue,
  inputValue,
  placeholder = '',
}) => {
  const HandlerInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <Styled.ContainerSearchInput>
      <Styled.ContainerBorder>
        <Styled.SearchInput
          type="text"
          value={inputValue}
          onChange={(e) => HandlerInputChange(e)}
        />
        <Styled.TitleInput data-placeholder={placeholder}></Styled.TitleInput>
      </Styled.ContainerBorder>
    </Styled.ContainerSearchInput>
  );
};

ComicsInput.propTypes = {
  children: P.node,
  setInputValue: P.func,
  placeholder: P.string,
};

export default ComicsInput;
