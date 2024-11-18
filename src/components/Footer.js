import React from 'react';

function Footer() {
  return (
    <footer style={styles.footer}>
      <p>&copy; 2024 React Basic Website. All rights reserved.</p>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: '#282c34',
    color: 'white',
    textAlign: 'center',
    padding: '10px 0',
    position: 'fixed',
    width: '100%',
    bottom: 0,
  },
};

export default Footer;
