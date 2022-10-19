import React from 'react';
import { FooterContainer, FooterWrapper, FooterDiv } from './FooterElements';
import { FaHeart } from 'react-icons/fa';

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <FooterWrapper>
          <FooterDiv>
            Made with <FaHeart size={12} /> in Melbourne
          </FooterDiv>
          <FooterDiv>
            &copy; 2022 Brocolli & Co. All Rights Reserved.
          </FooterDiv>
        </FooterWrapper>
      </FooterContainer>
    </>
  )
}

export default Footer;