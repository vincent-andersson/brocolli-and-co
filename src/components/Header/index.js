import React from 'react';
import { Nav, HeaderContainer, HeaderLogo } from './HeaderElements';

// header component
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