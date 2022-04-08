import React from 'react';
import P from 'prop-types';
import * as Styled from './styles';

import bannerHerois from '../../assets/banners/Herois-Banner.png';

const FullBanner = ({ children }) => {
  return (
    //
    <Styled.Container>
      <Styled.BlurContainer>
        <Styled.ContainerImg>
          <Styled.FullBanner src={bannerHerois} alt="Full banner with heroes" />
          <Styled.Title>
            As Principais HQs reunidas em um só lugar!
          </Styled.Title>
        </Styled.ContainerImg>
      </Styled.BlurContainer>

      <Styled.BangBackground
        src={bannerHerois}
        alt="full banner with blurry heroes"
        right="0"
        className="banner-fundo-2"
      />
      <Styled.BangBackground
        src={bannerHerois}
        alt="full banner with blurry heroes"
        left="0"
        className="banner-fundo-2"
      />
    </Styled.Container>
  );
};

FullBanner.propTypes = {
  children: P.node,
};

export default FullBanner;
