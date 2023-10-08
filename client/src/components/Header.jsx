import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';

const styles = {
    title: {
        fontSize: 40,
        textAlign: "center",
        color: "#22668D",
    },

    nav: {
        position: "sticky",
        zIndex: 1,
        backgroundColor: "#FFCC70"
    },

    links: {
        float: right,
    },
};

function Header() {
    return (

        <div className='navbar fixed-top navbar-expand-lg' style={styles.nav}>
            <a
                className='navbar-brand'>

                <h5 className="d-inline align-middle" style={styles.title}> Shift Talk </h5>

                <Nav style={styles.links} />
            </a>
        </div>
    );
}

export default Header;