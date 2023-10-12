import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Auth from '../utils/auth';

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
  }
};

const Nav = ({ currentPage }) => {
  const [activeLink, setActiveLink] = useState('/');
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed)
  const handleLinkClick = (linkName) => {
    setActiveLink(linkName);
  };

  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <nav>
      <button
        className="custom-toggler navbar-toggler"
        style={styles.button}
        type="button"
        data-bs-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded={!isNavCollapsed ? true : false}
        aria-label="Toggle navigation"
        onClick={handleNavCollapse}>
        <span className="navbar-toggler-icon" />
      </button>
      <div
        className={`${isNavCollapsed ? 'collapse' : ''} justify-content-end navbar-collapse`}
        id="navbarSupportedContent">

        <ul className="navbar-nav">
          {Auth.loggedIn() ? (
            <>
              <span>Hey there, {Auth.getProfile().data.username}!</span>
              <li className="nav-item" style={styles.links}>
                <Link
                  to="/"
                  className={activeLink === '/' ? 'active' : ''}
                  onClick={() => handleLinkClick('/')}
                  style={styles.text}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item" style={styles.links}>
                <Link
                  to="/me"
                  className={activeLink === '/me' ? 'active' : ''}
                  onClick={() => handleLinkClick('/me')}
                  style={styles.text}
                >
                  My Page
                </Link>
              </li>

              <li className="nav-item" style={styles.links}>
                <Link
                  to="/pros"
                  className={activeLink === '/pros' ? 'active' : ''}
                  onClick={() => handleLinkClick('/pros')}
                  style={styles.text}
                >
                  RENT A PRO
                </Link>
              </li>

              <li className="nav-item" style={styles.links}>
                <Link
                  to="/orderHistory"
                  className={activeLink === '/orderHistory' ? 'active' : ''}
                  onClick={() => handleLinkClick('/orderHistory')}
                  style={styles.text}
                >
                  Order History
                </Link>
              </li>
              
              <button style={styles.links} onClick={logout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <li className="nav-item" style={styles.links}>
                <Link
                  to="/"
                  className={activeLink === '/' ? 'active' : ''}
                  onClick={() => handleLinkClick('/')}
                  style={styles.text}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item" style={styles.links}>
                <Link
                  to="/login"
                  className={activeLink === '/login' ? 'active' : ''}
                  onClick={() => handleLinkClick('/login')}
                  style={styles.text}
                >
                  Login
                </Link>
              </li>
              <li className="nav-item" style={styles.links}>
                <Link
                  to="/signup"
                  className={activeLink === '/signup' ? 'active' : ''}
                  onClick={() => handleLinkClick('/signup')}
                  style={styles.text}
                >
                  Signup
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Nav;