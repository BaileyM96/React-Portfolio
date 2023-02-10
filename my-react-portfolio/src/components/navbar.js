import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from "@fortawesome/free-solid-svg-icons";

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #d97706;
  color: black;
  @media (max-width: 390px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const NavBrand = styled.h1`
  font-size: 30px;
  font-weight: bold;
  margin: 0;
  padding-left: 30px;
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  color: black;
  font-size: large;
  cursor: pointer;
  @media (max-width: 390px) {
    display: none;
  }
`;

const NavLink = styled.li`
  margin: 0 10px;
  :hover {
    color: white;
  }
`;

const BurgerContainer = styled.div`
display: none;
@media (max-width: 390px) {
    display: block;
}`



const Navbar = () => {
  return (
    <NavContainer>
      <NavBrand>Bailey Mejia</NavBrand>
      <NavLinks>
        <NavLink>About</NavLink>
        <NavLink>Projects</NavLink>
        <NavLink>Work</NavLink>
        <NavLink>Contact</NavLink>
      </NavLinks>
      <BurgerContainer>
        <FontAwesomeIcon size="xl" icon={faBars} />
      </BurgerContainer>
    </NavContainer>
  );
};

export default Navbar;
