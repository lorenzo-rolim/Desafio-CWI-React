import React from 'react';
import P from 'prop-types';
import * as Styled from './styles';

import { BsGithub, BsInstagram, BsSuitHeartFill } from 'react-icons/bs';
import { FaLinkedinIn } from 'react-icons/fa';

const Footer = ({ children, position = false }) => {
  return (
    //
    <Styled.Container position={position}>
      <Styled.FooterContent>
        <Styled.FooterAuthor>
          Made By Lorenzo Leffa
          <BsSuitHeartFill />
        </Styled.FooterAuthor>
        <Styled.FooterIcons>
          <a
            href="https://github.com/lorenzo-rolim?tab=repositories"
            target="_blank"
            rel="noreferrer"
          >
            <BsGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/lorenzo-leffa-rolim-8b990a20a/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://www.instagram.com/lorenzo_lrolim/"
            target="_blank"
            rel="noreferrer"
          >
            <BsInstagram />
          </a>
        </Styled.FooterIcons>
      </Styled.FooterContent>
    </Styled.Container>
  );
};

Footer.propTypes = {
  children: P.node,
  position: P.bool,
};

export default Footer;
