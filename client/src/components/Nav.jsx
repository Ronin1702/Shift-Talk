import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Auth from '../utils/auth';
import { useQuery } from '@apollo/client';
import { GET_ME } from '../utils/queries';
import Cart from './Cart';


const styles = {
  button: {
    backgroundColor: '#EAEAEA',
    color: '#EAEAEA',
  },

  links: {
    marginRight: 10,
    marginTop: 10,
  },

  text: {
    color: '#EAEAEA',
  },

  danger: {
    color: 'red',
  },

  icon: {
    backgroundColor: '#EAEAEA',
  },

  activeLink: {
    fontWeight: 'bold',
    color: '#FFD700', // Gold color for active links
  },

  navLocation: {
    position: 'fixed',
    width: '100%',
    justifyContent: 'flex-end',
    paddingRight: '20px',
  },
};

const loggedInLinks = [
  { path: '/me', label: 'My Page' },
  { path: '/pros', label: 'RENT A PRO' },
];

const loggedOutLinks = [
  { path: '/login', label: 'Login' },
  { path: '/signup', label: 'Signup' },
];

const commonLinks = [{ path: '/', label: 'Home' }];

const Nav = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState('/');
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed)

  const token = Auth.loggedIn() ? Auth.getToken() : null;
  const { data } = useQuery(GET_ME, {
    context: {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
    skip: !token,
  });

  const user = data?.me || {};
  const linksToRender = Auth.loggedIn() ? loggedInLinks : loggedOutLinks;

  return (
    <div className='navbar navbar-expand-lg navbar-light' style={styles.navLocation}>
      <nav style={{
      }}>
        <button
          className="custom-toggler navbar-toggler"
          style={{
            ...styles.icon,
          }}
          type="button"
          data-bs-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded={!isNavCollapsed ? true : false}
          aria-label="Toggle navigation"
          onClick={handleNavCollapse}>

          <span
            className="navbar-toggler-icon"
          />
        </button>

        <div
          className={`${isNavCollapsed ? 'collapse' : ''} justify-content-end navbar-collapse`}
          id="navbarSupportedContent">
          <ul className='navbar-nav'>
            {Auth.loggedIn() && (
              <span style={styles.links}>
                Hey,{' '}
                <strong className='text-warning'>{user.username}</strong> ! {' '}
              </span>
            )}
            {commonLinks.concat(linksToRender).map((link) => (
              <li key={link.path} className='nav-item' style={styles.links}>
                <Link
                  to={link.path}
                  className={activeLink === link.path ? 'active' : ''}
                  onClick={() => setActiveLink(link.path)}
                  style={
                    activeLink === link.path
                      ? { ...styles.text, ...styles.activeLink }
                      : styles.text
                  }
                >
                  {link.label}
                </Link>
              </li>
            ))}
            {Auth.loggedIn() && (
              <li className='nav-item' style={styles.links}>
                <Link
                  to='#'
                  style={styles.danger}
                  onClick={(e) => {
                    e.preventDefault();
                    Auth.logout();
                  }}
                >
                  📴 Logout
                </Link>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
