import { string, func } from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { NavContainer, NavList, StyledNavLink } from './navbar.style';
import Toggler from '../toggler/toggler.component';

import navItems from '../../data/navbar.data';

import { logoutUser, selectCurrentUser } from '../../features/auth/auth.slice';
import { useLogoutMutation } from '../../features/auth/authApi.slice';

const Navbar = ({ theme, themeToggler }) => {
  const user = useSelector(selectCurrentUser);
  const [logout] = useLogoutMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout().unwrap();
    dispatch(logoutUser);
    navigate('/signin-signup');
  };

  return (
    <NavContainer>
      <Link to='/' className='logo'>
        <span>Travel</span> Blog
      </Link>
      <NavList>
        {navItems.map(({ name, link }, idx) => (
          <li key={idx}>
            <StyledNavLink
              to={link}
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              {name}
            </StyledNavLink>
          </li>
        ))}

        {!user ? (
          <li>
            <StyledNavLink
              to='/signin-signup'
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              Login/Register
            </StyledNavLink>
          </li>
        ) : (
          <>
            <h4>{user.username}</h4>
            <li>
              <StyledNavLink onClick={handleLogout}>Logout</StyledNavLink>
            </li>
          </>
        )}
      </NavList>
      <Toggler theme={theme} themeToggler={themeToggler} />
    </NavContainer>
  );
};

Navbar.propTypes = {
  theme: string.isRequired,
  themeToggler: func.isRequired,
};

export default Navbar;
