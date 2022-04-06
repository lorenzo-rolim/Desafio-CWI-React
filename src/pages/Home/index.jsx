import React from 'react';
import P from 'prop-types';
import * as Styled from './styles';
import Header from '../../components/Header';
import FullBanner from '../../components/FullBaner';
import ComicsHeader from '../../components/ComicsHeader';
import ComicsSection from '../../components/ComicsSection';
import ComicsInput from '../../components/ComicsInput';
import ComicsGrid from '../../components/ComicsGrid';
import { useState } from 'react';
import ComicsEmail from '../../components/ComicsEmail';

const Home = ({ children }) => {
  const [inputValue, setInputValue] = useState('');
  const [emailValue, setEmailValue] = useState('');

  return (
    //
    <Styled.Container>
      <Header title="Marvel Comics" />
      <FullBanner />
      <ComicsHeader title="Encontre aqui os seus preferidos!" />
      <ComicsSection>
        <ComicsInput
          setInputValue={setInputValue}
          inputValue={inputValue}
          placeholder="Pesquise seus Quadrinhos aqui."
        />
        <ComicsGrid inputValue={inputValue} />
        <ComicsHeader title="Receba no seu E-Mail!" />
        <ComicsEmail inputValue={emailValue}>
          <ComicsInput
            placeholder="Digite seu melhor E-Mail aqui"
            setInputValue={setEmailValue}
            inputValue={emailValue}
          />
        </ComicsEmail>
      </ComicsSection>
    </Styled.Container>
  );
};

Home.propTypes = {
  children: P.node,
};

export default Home;
