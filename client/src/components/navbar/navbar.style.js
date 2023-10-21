import { styled } from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavContainer = styled.nav`
  padding: 10px 200px;
  position: relative;
  z-index: 10;
  background-color: ${({ theme }) => theme.background};
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  .logo {
    font-size: 24px;
    font-weight: 700;
    color: ${({ theme }) => theme.text };

    span {
      color: #ffa902;
    }
  }
`

export const NavList = styled.ul`
  list-style: none;
  display: flex;
  gap: 20px;
`;

export const StyledNavLink = styled(NavLink)`
  position: relative;
  color: ${({ theme }) => theme.text };
  font-weight: 300;
  transition: all .3s;
  font-size: 14px;

  &.active {
    font-weight: 700;

    &:after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 1px;
      background-color: ${({ theme }) => theme.toggleBorder };
    }
  }
  
  &:hover {
    font-weight: 700;
  }

  &:hover:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: ${({ theme }) => theme.toggleBorder };
  }
`