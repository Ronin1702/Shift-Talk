import React, { useState, useRef, useEffect } from 'react';
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
    marginTop: 10,
  },

  text: {
    color: '#EAEAEA',
  },

  danger: {
    color: '#ff2e63',
  },

  ul: {
    backgroundColor: '#252A34',
    borderRadius: '5px',
  },

  icon: {
    backgroundColor: '#EAEAEA',
    width: '100%',
  },

  activeLink: {
    fontWeight: 'bold',
    color: '#FFD700', // Gold color for active links
  },

  navLocation: {
    position: 'fixed',
    justifyContent: 'flex-end',
    zIndex: '1001',
    right: 0,
    opacity: '0.9',
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
  const navRef = useRef(null);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  useEffect(() => {
    const handleDocumentClick = (event) => {
      // Check if clicked outside and if the nav is open
      if (
        navRef.current &&
        !navRef.current.contains(event.target) &&
        !isNavCollapsed
      ) {
        setIsNavCollapsed(true);
      }
    };

    // Attach the event listener
    document.addEventListener('mousedown', handleDocumentClick);

    // Clean up the event listener when the component is unmounted
    return () => {
      document.removeEventListener('mousedown', handleDocumentClick);
    };
  }, [isNavCollapsed]);

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
    <div className='navbar navbar-expand-md navbar-light' style={styles.navLocation} ref={navRef}>
      <nav style={{ marginRight: '10px' }}>
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
          <ul className='navbar-nav' style={styles.ul}>
            {Auth.loggedIn() && (
              <span style={{ ...styles.links, marginLeft: '10px' }}>
                Hey,{' '}
                <strong className='text-warning'>{user.username}</strong> ! {' '}
              </span>
            )}
            {commonLinks.concat(linksToRender).map((link) => (
              <li key={link.path} className='nav-item' style={{ ...styles.links, marginLeft: '10px' }}>
                <Link
                  to={link.path}
                  className={activeLink === link.path ? 'active' : ''}
                  onClick={() => setActiveLink(link.path)}
                  style={
                    (activeLink === link.path
                      ? { ...styles.text, ...styles.activeLink }
                      : styles.text)
                  }
                >
                  {link.label}
                </Link>
              </li>
            ))}
            {Auth.loggedIn() && (
              <li className='nav-item' style={{ ...styles.links, marginLeft: '5px' }}>
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
