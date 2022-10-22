import React from 'react';
import { FooterContainer, FooterWrapper, FooterText } from './FooterElements';
import { FaHeart } from 'react-icons/fa';

// footer component
const Footer = () => {
  return (
    <>
      <FooterContainer>
        <FooterWrapper>
          <FooterText>
            Made with <FaHeart size={12} /> in Melbourne
          </FooterText>
          <FooterText>
            &copy; 2022 Brocolli & Co. All Rights Reserved.
          </FooterText>
        </FooterWrapper>
      </FooterContainer>
    </>
  )
}

export default Footer;