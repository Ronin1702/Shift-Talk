import React from 'react';
const styles = {
  title: {
    color: '#EAEAEA',
  },
  header: {
    position: "fixed",
    zIndex: 1000,
    backgroundColor: "#252A34",
    minWidth: "100%",
  },
};

function Header() {

  return (
    <div style={styles.header}>
      <h1 style={styles.title}>🏁 Shift Talk </h1>
    </div>
  );
}

export default Header;