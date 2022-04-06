import React from 'react';
import P from 'prop-types';
import * as Styled from './styles';

// import bannerSpiderMan from "../../assets/banners/homem-aranha-fullbaner.jpg";
import bannerHerois from '../../assets/banners/Herois-Banner.png';

const FullBanner = ({ children }) => {
  return (
    //
    <Styled.Container>
      <Styled.BlurContainer>
        <Styled.ContainerImg>
          <Styled.FullBanner src={bannerHerois} alt="Full banner with heroes" />
        </Styled.ContainerImg>
      </Styled.BlurContainer>
      <Styled.BangBackground
        src={bannerHerois}
        alt="full banner with blurry heroes"
        right="0"
      />
      <Styled.BangBackground
        src={bannerHerois}
        alt="full banner with blurry heroes"
        left="0"
      />
    </Styled.Container>
  );
};

FullBanner.propTypes = {
  children: P.node,
};

export default FullBanner;
