import styled from "styled-components";
import { ButtonLink } from "../Link";

export const StyledNavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

export const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  z-index: 100;
  height: 120px;
  transition: height 0.2s ease, background-color 0.2s ease, padding 0.2s ease;
  @media (max-width: 1230px) {
    flex-direction: column;
    justify-content: flex-start;
    height: 100%;
    margin-top: 120px;
    padding-top: 50px;
    border-top: 1px solid #aeacac;
  }
`;

export const StyledNavActions = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  justify-self: end;
  font-family: Nunito Sans;
  @media (max-width: 1440px) {
    min-width: 100%;
    justify-content: center;
  }
  @media (max-width: 1230px) {
    padding-bottom: 50px;
  }
`;

export const StyledNavPrimary = styled(ButtonLink)`
  background: ${(props) => props.theme.colors.lightBlue};
  color: ${(props) => props.theme.colors.white};
  &:hover {
    background: ${(props) => props.theme.colors.blue};
    text-decoration-line: none;
  }
  &:active {
    background: ${(props) => props.theme.colors.darkBlue};
  }
  @media (max-width: 1230px) {
    background: ${(props) => props.theme.colors.golden};
    color: ${(props) => props.theme.colors.lightBlue};
  }
`;

export const StyledNavSecondary = styled(ButtonLink)`
  background-color: ${(props) => props.theme.colors.white};
  color: ${(props) => props.theme.colors.lightBlue};
  border: 1px solid ${(props) => props.theme.colors.lightBlue};
  &:hover {
    background-color: ${(props) => props.theme.colors.blue};
    border-color: ${(props) => props.theme.colors.blue};
    color: ${(props) => props.theme.colors.white};
  }
  &:active {
    background-color: ${(props) => props.theme.colors.darkBlue};
    border-color: ${(props) => props.theme.colors.darkBlue};
  }
  @media (min-width: 1440px) {
    min-width: 200px;
  }
  @media (max-width: 1230px) {
    background: inherit;
    border-color: ${(props) => props.theme.colors.golden};
    color: ${(props) => props.theme.colors.golden};
  }
`;
