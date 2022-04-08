import React from 'react';
import { useState } from 'react';

import P from 'prop-types';
import * as Styled from './styles';

import Header from '../../components/Header';
import FullBanner from '../../components/FullBaner';
import ComicsHeader from '../../components/ComicsHeader';
import ComicsSection from '../../components/ComicsSection';
import ComicsInput from '../../components/ComicsInput';
import ComicsGrid from '../../components/ComicsGrid';
import ComicsEmail from '../../components/ComicsEmail';
import DatailsModal from '../../components/DetailsModal/index';
import ErrorPopUp from '../../components/ErrorPopUp/index';

import { initialState } from '../../constants/breakpoints';

const Home = ({ children }) => {
  const [inputValue, setInputValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [error, setError] = useState(false);
  const [modalComic, setModalComic] = useState(initialState);

  return (
    //
    <Styled.Container>
      <DatailsModal data={modalComic} setData={setModalComic} />

      {error && <ErrorPopUp setError={setError} />}

      <Header title="Marvel Comics" />

      <FullBanner />

      <ComicsHeader title="Encontre aqui os seus quadrinhos preferidos!" />

      <ComicsSection>
        <ComicsInput
          color="white"
          beforeBG="white"
          after="white"
          setInputValue={setInputValue}
          inputValue={inputValue}
          placeholder="Pesquise seus Quadrinhos aqui."
        />

        <ComicsGrid inputValue={inputValue} setModalComic={setModalComic} />

        <ComicsHeader title="Receba no seu E-Mail!" />

        <ComicsEmail
          inputValue={emailValue}
          setInputValue={setEmailValue}
          setError={setError}
        />
      </ComicsSection>
    </Styled.Container>
  );
};

Home.propTypes = {
  children: P.node,
};

export default Home;
