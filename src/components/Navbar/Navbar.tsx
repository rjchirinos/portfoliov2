import React from 'react';
import styled from 'styled-components';

import MenuItem from './MenuItem';

const Nav = styled.nav`
  flex: 1;
  direction: row;
  justify-content: flex-end;
  align-items: center;
  width: 90%;
  margin: auto;
  padding-top: 2.5rem;
`;
const MenuList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

export default function Navbar() {
  return (
    <Nav>
      <MenuList>
        <MenuItem>About Me</MenuItem>
        <MenuItem>Articles</MenuItem>
        <MenuItem>Projects</MenuItem>
        <MenuItem tint>Contact</MenuItem>
      </MenuList>
    </Nav>
  );
}
