import { NavLink } from 'react-router-dom';

import styled from 'styled-components';
import Container from 'components/Container';
import './Navigation.css';

const LinkStyled = ({ isActive }) => ({
  color: isActive ? 'rgb(255, 65, 65)' : 'rgb(250, 250, 250)',
});

const StyledNav = styled.nav`
  display: inline-block;
  overflow: hidden;
  padding: 10px 0;
`;

export default function Navigation() {
  return (
    <Container>
      <StyledNav>
        <NavLink to="/" style={LinkStyled} className="nav-link">
          Home
        </NavLink>
        <NavLink to="/movies" style={LinkStyled} className="nav-link">
          Movies
        </NavLink>
      </StyledNav>
    </Container>
  );
}
