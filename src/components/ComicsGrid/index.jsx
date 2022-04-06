import React from "react";
import P from "prop-types";
import * as Styled from "./styles";

// import ComicTeste from "../../assets/banners/comic-teste.jpg";
import useFetch from "../../hooks/useFetch";
import { mapComicAttributes } from "../../api/map-comic-attributes";

const ComicsGrid = ({ children }) => {
  const { data, loading } = useFetch();
  const newData = mapComicAttributes(data, loading);

  return (
    //
    <Styled.Container>
      <Styled.GridContainer>
        {newData.map((comic) => {
          return (
            <Styled.GridCell>
              <Styled.GridCellImg
                src={`${comic.image}.${comic.extension}`}
                alt="teste"
              />
              <Styled.GridCellTitle>{comic.title}</Styled.GridCellTitle>
              <Styled.GridCellHover>
                <Styled.GridCellButtons
                  BGcolor="#40B5AD"
                  BoxShadow="rgba(64, 181, 173, 0.8)"
                >
                  Detalhes
                </Styled.GridCellButtons>
                <Styled.GridCellButtons
                  BGcolor="#2E8B57"
                  BoxShadow="rgba(46, 139, 87, 0.8)"
                >
                  Selecionar
                </Styled.GridCellButtons>
              </Styled.GridCellHover>
            </Styled.GridCell>
          );
        })}

        {/* <Styled.GridCell>
          <Styled.GridCellImg src={ComicTeste} alt="teste" />
          <Styled.GridCellTitle>Amazing SpiderMan</Styled.GridCellTitle>
          <Styled.GridCellHover>
            <Styled.GridCellButtons
              BGcolor="#40B5AD"
              BoxShadow="rgba(64, 181, 173, 0.8)"
            >
              Detalhes
            </Styled.GridCellButtons>
            <Styled.GridCellButtons
              BGcolor="#2E8B57"
              BoxShadow="rgba(46, 139, 87, 0.8)"
            >
              Selecionar
            </Styled.GridCellButtons>
          </Styled.GridCellHover>
        </Styled.GridCell> */}
      </Styled.GridContainer>
    </Styled.Container>
  );
};

ComicsGrid.propTypes = {
  children: P.node,
};

export default ComicsGrid;
