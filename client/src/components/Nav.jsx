import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Auth from '../utils/auth';
import { useQuery } from '@apollo/client';
import { GET_ME } from '../utils/queries';

const styles = {
  button: {
    backgroundColor: '#EAEAEA',
    color: '#EAEAEA',
  },

  links: {
    marginRight: 10,
  },

  text: {
    color: '#EAEAEA',
  },
};

const Nav = ({ currentPage }) => {
  const [activeLink, setActiveLink] = useState('/');
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
  const handleLinkClick = (linkName) => {
    setActiveLink(linkName);
  };

  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  const token = Auth.loggedIn() ? Auth.getToken() : null;
  const { data, error, loading } = useQuery(GET_ME, {
    context: {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
    skip: !token,
  });

  const user = data?.me || {};

  const loggedInLinks = [
    { path: '/me', label: 'My Page' },
    { path: '/pros', label: 'RENT A PRO' },
    { path: '/orderHistory', label: 'Order History' },
  ];

  const loggedOutLinks = [
    { path: '/login', label: 'Login' },
    { path: '/signup', label: 'Signup' },
  ];

  const commonLinks = [{ path: '/', label: 'Home' }];

  const linksToRender = Auth.loggedIn() ? loggedInLinks : loggedOutLinks;

  return (
    <nav>
      <button
        className='custom-toggler navbar-toggler'
        style={styles.button}
        type='button'
        data-bs-toggle='collapse'
        data-target='#navbarSupportedContent'
        aria-controls='navbarSupportedContent'
        aria-expanded={!isNavCollapsed ? true : false}
        aria-label='Toggle navigation'
        onClick={handleNavCollapse}
      >
        <span className='navbar-toggler-icon' />
      </button>
      <div
        className={`${
          isNavCollapsed ? 'collapse' : ''
        } justify-content-end navbar-collapse`}
        id='navbarSupportedContent'
      >
        <ul className='navbar-nav'>
          {Auth.loggedIn() && <span>Hey there, {user.username} ! | </span>}
          {commonLinks.concat(linksToRender).map((link) => (
            <li key={link.path} className='nav-item' style={styles.links}>
              <Link
                to={link.path}
                className={activeLink === link.path ? 'active' : ''}
                onClick={() => handleLinkClick(link.path)}
                style={styles.text}
              >
                {link.label}
              </Link>
            </li>
          ))}
          {Auth.loggedIn() && (
            <button style={styles.links} onClick={logout}>
              Logout
            </button>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
