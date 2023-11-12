// Taskbar.js
import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import '../App.css';

const Navbar = styled.nav`
  display: flex;
  justify-content: center;
  background-color: #333;
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  padding: 0;
`;

const NavItem = styled.li`
  margin-right: 20px;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  transition: color 0.2s;

  &:hover {
    color: #007bff;
  }
`;

const Taskbar = () => {
  return (
    <Navbar>
      <NavList>
        <NavItem>
          <NavLink to="/">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/sequence">Sequence</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/nothing-here">Nothing Here</NavLink>
        </NavItem>
      </NavList>
    </Navbar>
  );
};

export default Taskbar;
