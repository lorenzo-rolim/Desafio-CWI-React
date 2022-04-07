import React, { useState } from 'react';
import P from 'prop-types';
import * as Styled from './styles';

// import ComicTeste from "../../assets/banners/comic-teste.jpg";
import useFetch from '../../hooks/useFetch';
import { mapComicAttributes } from '../../api/map-comic-attributes';
import { useNavigate } from 'react-router-dom';

const ComicsGrid = ({ children, inputValue = '', setModalComic }) => {
  const { data, loading } = useFetch();
  const [selected, setSelected] = useState(false);
  const newData = mapComicAttributes(data, loading);
  const navigate = useNavigate();

  const HandlerModal = (comic) => {
    setModalComic(comic);
  };

  //   console.log(newData);

  return (
    //
    <Styled.Container>
      <Styled.GridContainer>
        {newData
          .filter((comic) => {
            if (inputValue === '') {
              return comic;
            } else if (
              comic.title.toLowerCase().includes(inputValue.toLowerCase())
            ) {
              return comic;
            }
          })
          .map((comic) => {
            return (
              <Styled.GridCell key={comic.id}>
                <Styled.GridCellImg
                  src={`${comic.image}.${comic.extension}`}
                  alt="teste"
                  selected={selected}
                />
                <Styled.GridCellTitle>{comic.title}</Styled.GridCellTitle>
                <Styled.GridCellHover>
                  <Styled.GridCellButtons
                    BGcolor="#40B5AD"
                    BoxShadow="rgba(64, 181, 173, 0.8)"
                    onClick={() => HandlerModal(comic)}
                  >
                    Detalhes
                  </Styled.GridCellButtons>
                  <Styled.GridCellButtons
                    BGcolor="#2E8B57"
                    BoxShadow="rgba(46, 139, 87, 0.8)"
                    onClick={() => setSelected((s) => !s)}
                  >
                    Selecionar
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
  inputValues: P.string,
  setModalComic: P.func,
};

export default ComicsGrid;
