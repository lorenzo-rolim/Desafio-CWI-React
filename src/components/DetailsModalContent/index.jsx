import React from 'react';
import P from 'prop-types';
import * as Styled from './styles';
import { useState } from 'react';

import { initialState } from '../../pages/Home';

const DetailsModalContent = ({ children, data = [], setData }) => {
  console.log(data.creators);
  return (
    //
    <Styled.Container>
      <Styled.Title>{data.title}</Styled.Title>
      <Styled.ContainerDetails>
        <Styled.DetailsTitle>Published:</Styled.DetailsTitle>
        <Styled.DetailsText>{data.date}</Styled.DetailsText>
        <Styled.DetailsTitle>Creators:</Styled.DetailsTitle>
        <Styled.DetailsTextContainer>
          {data.creators?.map((creator) => {
            return (
              <Styled.DetailsText fontSize="15px">
                {creator.name}
              </Styled.DetailsText>
            );
          })}
          {/* <Styled.DetailsText>TesteTesteaaa</Styled.DetailsText>
          <Styled.DetailsText>TesteTesteaaa</Styled.DetailsText>
          <Styled.DetailsText>TesteTesteaaa</Styled.DetailsText>
          <Styled.DetailsText>TesteTesteaaa</Styled.DetailsText> */}
        </Styled.DetailsTextContainer>
        <Styled.DetailsTitle>Description:</Styled.DetailsTitle>
        <Styled.DetailsText fontSize="15px">
          {data.description}
        </Styled.DetailsText>
        <Styled.DetailsButtonsContainer>
          <Styled.DetailsModalButton onClick={() => setData(initialState)}>
            Fechar
          </Styled.DetailsModalButton>
          <Styled.DetailsModalButton>Completo</Styled.DetailsModalButton>
        </Styled.DetailsButtonsContainer>
      </Styled.ContainerDetails>
    </Styled.Container>
  );
};

DetailsModalContent.propTypes = {
  children: P.node,
};

export default DetailsModalContent;
