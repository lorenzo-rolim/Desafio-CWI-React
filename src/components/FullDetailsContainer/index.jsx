import React from 'react';
import P from 'prop-types';
import * as Styled from './styles';

import { useParams } from 'react-router-dom';
import LoadingIcon from '../LoadingIcon';
import FetchComics from '../../hooks/FetchComics';
import ErrorComics from '../ErrorComics';

const FullDetailsContainer = ({ children }) => {
  const params = useParams();
  const { newData, loading, error } = FetchComics(params.id);

  return (
    //
    <>
      {loading && <LoadingIcon />}
      {error && <ErrorComics />}
      {!loading && !error ? (
        <Styled.Container>
          <Styled.ContainerIMG>
            <Styled.ComicBanner
              src={`${newData[0].image}.${newData[0].extension}`}
            />
          </Styled.ContainerIMG>
          <Styled.ContentContainer>
            <Styled.ContentTitle>{newData[0].title}</Styled.ContentTitle>
            <Styled.ContentSubTitle>Published:</Styled.ContentSubTitle>
            <Styled.ContentParagraph>
              {newData[0].date ? newData[0].date : 'Não contém data'}
            </Styled.ContentParagraph>
            <Styled.ContentSubTitle>Creators:</Styled.ContentSubTitle>
            <Styled.CreatorsDiv>
              {!newData[0].creators.length ? (
                <Styled.ContentParagraph>
                  Não foi possível encontrar os Criadores
                </Styled.ContentParagraph>
              ) : (
                newData[0].creators.map((creator, index) => {
                  return (
                    <Styled.ContentParagraph key={index} marginLeft="1.5rem">
                      {creator.name}
                    </Styled.ContentParagraph>
                  );
                })
              )}
            </Styled.CreatorsDiv>
            <Styled.ContentSubTitle>Description:</Styled.ContentSubTitle>
            <Styled.DescriptionDiv>
              <Styled.ContentParagraph>
                {newData[0].description
                  ? newData[0].description
                  : 'Descrição não encontrada'}
              </Styled.ContentParagraph>
            </Styled.DescriptionDiv>
          </Styled.ContentContainer>
        </Styled.Container>
      ) : (
        ''
      )}
    </>
  );
};

FullDetailsContainer.propTypes = {
  children: P.node,
};

export default FullDetailsContainer;
