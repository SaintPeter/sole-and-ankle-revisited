/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components/macro';
import {DialogOverlay, DialogContent} from '@reach/dialog';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const MobileMenu = ({isOpen, onDismiss}) => {
  const buttonRef = React.useRef();

  if (!isOpen) {
    return null;
  }

  return (
    <div>
      <Overlay isOpen={isOpen} onDismiss={onDismiss}>
        <Content initialFocusRef={buttonRef}>
          <CloseButton ref={buttonRef} onClick={onDismiss}>
            <VisuallyHidden>Dismiss menu</VisuallyHidden>
            <Icon id="close"/>
          </CloseButton>
          <Slot />
          <NavMenu>
            <NavLink href="/sale" active>Sale</NavLink>
            <NavLink href="/new">New&nbsp;Releases</NavLink>
            <NavLink href="/men">Men</NavLink>
            <NavLink href="/women">Women</NavLink>
            <NavLink href="/kids">Kids</NavLink>
            <NavLink href="/collections">Collections</NavLink>
          </NavMenu>
          <NavFooter>
            <NavLink href="/terms">Terms and Conditions</NavLink>
            <NavLink href="/privacy">Privacy Policy</NavLink>
            <NavLink href="/contact">Contact Us</NavLink>
          </NavFooter>
        </Content>

      </Overlay>
    </div>
  );
};

const Overlay = styled(DialogOverlay)`
  background: var(--overlay);
  
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  
  display: flex;
  justify-content: flex-end;
  align-items: center;
  isolation: isolate;
`;

const Content = styled(DialogContent)`
  position: relative;
  background: var(--white);
  color: var(--gray900);
  flex: 0 0 300px;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 32px;
`;

const NavLink = styled.a`
  color: ${p => p.active ? 'var(--secondary)' : 'currentColor'};
  text-decoration: none;
`;

const Slot = styled.div`
  flex: 1;
`;

const NavMenu = styled.nav`
  flex: 1;
  display: flex;  
  flex-direction: column;
  gap: 20px;
  font-size: 1.25rem;
  text-transform: uppercase;
`;

const NavFooter = styled.footer`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  font-size: 0.75rem;
  gap: 14px;
  color: var(--gray700)
`;

const CloseButton = styled(UnstyledButton)`
  position: absolute;
  top: 20px;
  right: 16px;
`;

export default MobileMenu;
