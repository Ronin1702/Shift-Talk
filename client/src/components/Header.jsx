import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/images/logo.png';

const styles = {
    nav: {
        position: "sticky",
        zIndex: 1,
        backgroundColor: "#302F31"
    },
    logo: {
        width: 50,
        height: 50
    },
    links: {
        marginRight: 10
    }
};

function Header() {
    return (

        <div className='navbar fixed-top navbar-expand-lg navbar-light' style={styles.nav}>
            <a
                className='navbar-brand'>

                <img
                    src={logo}
                    alt="logo"
                    loading="lazy"
                    style={styles.logo} />
                <h5 className="d-inline align-middle"> Shift Talk </h5>
            </a>
        </div>
    );
}

export default Header;