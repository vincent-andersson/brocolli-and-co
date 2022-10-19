import React from 'react';
import { Nav, HeaderContainer, HeaderLogo } from './HeaderElements';

const Header = () => {
  return (
    <>
      <Nav>
        <HeaderContainer>
          <HeaderLogo>Brocolli & Co.</HeaderLogo>
        </HeaderContainer>
      </Nav>
    </>
  )
}

export default Header;