import React from 'react';
const styles = {
    title: {
        color: '#EAEAEA',
    },
    header: {
        position: "fixed",
        zIndex: 0,
        backgroundColor: "#252A34",
        width: "100%",
        padding: 0,
    },
};

function Header() {

    return (
        <div style={styles.header}>
            <a href='/'>
                <h1 style={styles.title}>🏁 Shift Talk </h1>
            </a>
        </div>
    );
}

export default Header;