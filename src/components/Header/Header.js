import React from 'react';
import styled from 'styled-components/macro';

import { COLORS, WEIGHTS, QUERIES } from '../../constants';
import Logo from '../Logo';
import SuperHeader from '../SuperHeader';
import MobileMenu from '../MobileMenu';
import UnstyledButton from "../UnstyledButton";
import Icon from '../Icon';
import VisuallyHidden from "../VisuallyHidden";

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  // For our mobile hamburger menu, we'll want to use a button
  // with an onClick handler, something like this:
  //
  // <button onClick={() => setShowMobileMenu(true)}>

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <Side>
          <Logo />
        </Side>
        <Nav>
          <NavLink href="/sale">A&nbsp;VENDRE</NavLink>
          <NavLink href="/new">NOUBELLES&nbsp;Versions</NavLink>
          <NavLink href="/men">Hommes</NavLink>
          <NavLink href="/women">Femmes</NavLink>
          <NavLink href="/kids">Les&nbsp;Enfants</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <Side />
      </MainHeader>
      <MobileHeader>
        <Side>
          <Logo />
        </Side>
        <Side>
          <NavIcons>
            <UnstyledButton>
              <VisuallyHidden>Shopping Cart</VisuallyHidden>
              <Icon id="shopping-bag" />
            </UnstyledButton>
            <UnstyledButton>
              <VisuallyHidden>Search</VisuallyHidden>
              <Icon id="search" />
            </UnstyledButton>
            <UnstyledButton onClick={() => setShowMobileMenu(true)}>
              <VisuallyHidden>Show Menu</VisuallyHidden>
              <Icon id="menu" />
            </UnstyledButton>
          </NavIcons>
        </Side>
      </MobileHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  height: 72px;
  border-bottom: 1px solid ${COLORS.gray[300]};

  @media ${QUERIES.tablet} {
    display: none;
  }
`;

// noinspection CssUnknownProperty
const MobileHeader = styled.div`
  display: none;
  
  @media ${QUERIES.tablet} {
    display: flex;
    align-items: baseline;
    padding: 18px 32px;
    height: 72px;
    border-bottom: 1px solid ${COLORS.gray[300]};
  }
  
  @media ${QUERIES.phone} {
    padding: 18px 16px;
  }
`;

const NavIcons = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: flex-end;
  gap: 32px;
`;

const Nav = styled.nav`
  display: flex;
  gap: clamp(
          16px,
          14vw - 7.5rem,
          48px
  );
  margin: 0 clamp(
          16px,
          14vw - 8.5rem,
          48px
  );
  overflow-x: scroll;

  @media ${QUERIES.tablet} {
    display: none; 
  }
`;

const Side = styled.div`
  flex: 1;
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: ${COLORS.secondary};
  }
`;

export default Header;
