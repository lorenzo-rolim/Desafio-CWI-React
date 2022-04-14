import React from 'react';
import P from 'prop-types';
import * as Styled from './styles';

import LoadingIcon from '../LoadingIcon';
import ErrorComics from '../ErrorComics';
import ErrorNoData from '../ErrorNoData';
import FetchComics from '../../hooks/FetchComics';

const ComicsGrid = ({ children, inputValue = '', setModalComic }) => {
  const { newData, loading, error } = FetchComics();

  const HandlerMapComics = () => {
    let DataFiltered = newData.filter((comic) => {
      if (comic === undefined) {
        return;
      } else if (inputValue === '') {
        return comic;
      } else if (comic.title.toLowerCase().includes(inputValue.toLowerCase())) {
        return comic;
      }
    });

    if (!DataFiltered.length && loading === false) {
      if (error === false) {
        return <ErrorNoData />;
      }
    }

    return DataFiltered.map((comic, index) => {
      return (
        <Styled.GridCell key={comic.id} data-testid="grid-cell">
          <Styled.GridCellImg
            src={`${comic.image}.${comic.extension}`}
            alt="teste"
          />

          <Styled.GridCellTitle>{comic.title}</Styled.GridCellTitle>

          <Styled.GridCellHover data-testid="blur-div">
            <Styled.GridCellButtons
              BGcolor="#9d1f1f"
              BoxShadow="rgba(130, 16, 16, 0.776)"
              onClick={() => HandlerModal(comic)}
              data-testid="button-comics"
            >
              Detalhes
            </Styled.GridCellButtons>
          </Styled.GridCellHover>
        </Styled.GridCell>
      );
    });
  };

  const HandlerModal = (comic) => {
    setModalComic(comic);
  };

  return (
    <Styled.Container>
      <Styled.GridContainer>
        {loading && <LoadingIcon />}

        {!newData.length && error && <ErrorComics />}

        {loading === false && error === false && !newData.length ? (
          <ErrorNoData />
        ) : (
          ''
        )}

        {HandlerMapComics()}

        {/* {newData
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
              <Styled.GridCell key={comic.id} data-testid="grid-cell">
                <Styled.GridCellImg
                  src={`${comic.image}.${comic.extension}`}
                  alt="teste"
                />

                <Styled.GridCellTitle>{comic.title}</Styled.GridCellTitle>

                <Styled.GridCellHover data-testid="blur-div">
                  <Styled.GridCellButtons
                    BGcolor="#9d1f1f"
                    BoxShadow="rgba(130, 16, 16, 0.776)"
                    onClick={() => HandlerModal(comic)}
                    data-testid="button-comics"
                  >
                    Detalhes
                  </Styled.GridCellButtons>
                </Styled.GridCellHover>
              </Styled.GridCell>
            );
          })} */}
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
