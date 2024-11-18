import React from 'react';

function Header() {
  return (
    <header style={styles.header}>
      <h1>React Basic Website</h1>
    </header>
  );
}

const styles = {
  header: {
    backgroundColor: '#282c34',
    padding: '10px',
    color: 'white',
    textAlign: 'center',
  },
};

export default Header;
