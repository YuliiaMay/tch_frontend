import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledLink = styled(NavLink)`
  font-family: Montserrat;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: 2.6px;
  text-transform: uppercase;
  cursor: pointer;
  text-decoration: none;
  color: ${(props) => props.theme.colors.white};

  &:hover,
  &:focus {
    text-decoration: underline;
  }  

  &.active {
    font-weight: 700;
  }

  @media (min-width: ${(props) => props.theme.sizes.laptopLarge}) {
    font-size: 18px;
    color: ${(props) => props.theme.colors.primaryText};
  }
`;

export const StyledButtonLink = styled(NavLink)`
  font-family: Montserrat;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  text-decoration: none;
  min-width: 150px;
  height: 56px;
  padding: 0 12px;
  border-radius: 10px;
  border: none;
  transition: all 0.2s ease-in-out;
  letter-spacing: 0px;
  text-transform: uppercase;

  @media (min-width: ${(props) => props.theme.sizes.desk}) {
    min-width: 200px;
  }

  /* @media (max-width: 768px) {
    font-size: ${({ isOpen }) => (isOpen ? "32px" : "12px")};
  }
  @media (any-hover: hover) {
    &:hover {
      color: ${(props) => props.theme.colors.P5};
    }
  } */

  &:hover {
    text-decoration-line: underline;
  }
`;
