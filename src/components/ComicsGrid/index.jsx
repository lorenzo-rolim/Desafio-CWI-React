import React from 'react';
import P from 'prop-types';
import * as Styled from './styles';

import useFetch from '../../hooks/useFetch';
import { mapComicAttributes } from '../../api/map-comic-attributes';

import LoadingIcon from '../LoadingIcon';
import ErrorComics from '../ErrorComics';
import ErrorNoData from '../ErrorNoData';

const ComicsGrid = ({ children, inputValue = '', setModalComic }) => {
  const { data, loading, error } = useFetch();
  const newData = mapComicAttributes(data);

  const HandlerModal = (comic) => {
    setModalComic(comic);
  };

  return (
    <Styled.Container>
      <Styled.GridContainer>
        {loading && <LoadingIcon />}

        {error && <ErrorComics />}

        {loading === false && error === false && !newData.length ? (
          <ErrorNoData />
        ) : (
          ''
        )}

        {newData
          .filter((comic) => {
            if (comic === undefined) {
              return;
            } else if (inputValue === '') {
              return comic;
            } else if (
              comic.title.toLowerCase().includes(inputValue.toLowerCase())
            ) {
              return comic;
            }
          })
          .map((comic) => {
            if (comic === undefined) {
              return;
            }
            return (
              <Styled.GridCell key={comic.id}>
                <Styled.GridCellImg
                  src={`${comic.image}.${comic.extension}`}
                  alt="teste"
                />

                <Styled.GridCellTitle>{comic.title}</Styled.GridCellTitle>

                <Styled.GridCellHover role="button">
                  <Styled.GridCellButtons
                    BGcolor="#9d1f1f"
                    BoxShadow="rgba(130, 16, 16, 0.776)"
                    onClick={() => HandlerModal(comic)}
                  >
                    Detalhes
                  </Styled.GridCellButtons>
                </Styled.GridCellHover>
              </Styled.GridCell>
            );
          })}
      </Styled.GridContainer>
    </Styled.Container>
  );
};

ComicsGrid.propTypes = {
  children: P.node,
  inputValue: P.string,
  setModalComic: P.func,
};

export default ComicsGrid;
