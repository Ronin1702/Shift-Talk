import React, { useState } from 'react';
import Nav from './Nav';

const styles = {
    title: {
        color:'#22668D'
    },
    nav: {
        position: "sticky",
        zIndex: 1,
        backgroundColor: "#FFCC70",
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

                <h5 className="d-inline align-middle" style={styles.title}> Shift Talk </h5>
            </a>
            <Nav style={styles.navbuttons}/>
        </div>
    );
}

export default Header;