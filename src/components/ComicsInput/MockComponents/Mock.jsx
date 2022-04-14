import { useState } from 'react';
import ComicsInput from '../index';

export const Mock = () => {
  const [inputValues, setInputValues] = useState('');

  return (
    <div>
      <ComicsInput
        placeholder="Pesquise aqui"
        color="white"
        beforeBG="white"
        after="white"
        inputValue={inputValues}
        setInputValue={setInputValues}
      />
    </div>
  );
};
