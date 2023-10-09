import React, { useState } from 'react';
import Nav from './Nav';
import Cart from './Cart';

const styles = {
    title: {
        color:'#EAEAEA'
    },
    nav: {
        position: "sticky",
        zIndex: 1,
        backgroundColor: "#252A34",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        paddingRight: "20px"
    },
    navbuttons: {
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center"
    }
};

function Header() {
    return (

        <div className='navbar fixed-top navbar-expand-lg navbar-light' style={styles.nav}>
            <a
                className='navbar-brand'>

                <h1 className="d-inline align-middle" style={styles.title}>🏁 Shift Talk </h1>
            </a>
            <Nav style={styles.navbuttons}/>
            <Cart />
        </div>
    );
}

export default Header;