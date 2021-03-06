import React from 'react';
import P from 'prop-types';
import * as Styled from './styles';
import { useNavigate } from 'react-router-dom';

const DetailsModalContent = ({ children, data = [], setData }) => {
  const navigate = useNavigate();

  return (
    //
    <Styled.Container>
      <Styled.Title data-testid="modal-title">
        {!data.title ? 'Sem Titulo' : data.title}
      </Styled.Title>
      <Styled.ContainerDetails>
        <Styled.DetailsTitle>Published:</Styled.DetailsTitle>
        <Styled.DetailsText overflow="hidden">
          {!data.date ? 'Sem data' : data.date}
        </Styled.DetailsText>
        <Styled.DetailsTitle>Creators:</Styled.DetailsTitle>
        <Styled.DetailsTextContainer>
          {!data.creators
            ? 'Sem Criadores'
            : data.creators?.map((creator, index) => {
                return (
                  <Styled.DetailsText
                    key={`${index}+${creator.name}`}
                    fontSize="15px"
                  >
                    {creator.name}
                  </Styled.DetailsText>
                );
              })}
        </Styled.DetailsTextContainer>
        <Styled.DetailsTitle>Description:</Styled.DetailsTitle>
        <Styled.DescriptionContainer>
          <Styled.DetailsText fontSize="15px">
            {!data.description ? 'Sem Descrição' : data.description}
          </Styled.DetailsText>
        </Styled.DescriptionContainer>
        <Styled.DetailsButtonsContainer>
          <Styled.DetailsModalButton
            onClick={() => navigate(`/fulldetails/${data.id}`)}
          >
            ver Completo
          </Styled.DetailsModalButton>
        </Styled.DetailsButtonsContainer>
      </Styled.ContainerDetails>
    </Styled.Container>
  );
};

DetailsModalContent.propTypes = {
  children: P.node,
  data: P.object,
  setData: P.func,
};

export default DetailsModalContent;
