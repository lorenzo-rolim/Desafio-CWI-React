import React from 'react';
import P from 'prop-types';
import * as Styled from './styles';

const ComicsInput = ({
  children,
  setInputValue,
  inputValue,
  placeholder = '',
  color = '',
  beforeBG = '',
  after = '',
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
          color={color}
          onChange={(e) => HandlerInputChange(e)}
        />
        <Styled.TitleInput
          beforeBG={beforeBG}
          data-placeholder={placeholder}
          afterEffect={inputValue}
          after={after}
        ></Styled.TitleInput>
      </Styled.ContainerBorder>
    </Styled.ContainerSearchInput>
  );
};

ComicsInput.propTypes = {
  children: P.node,
  setInputValue: P.func,
  placeholder: P.string,
  inputValue: P.string,
  color: P.string,
  beforeBG: P.string,
  after: P.string,
};

export default ComicsInput;
