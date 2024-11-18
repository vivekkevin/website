import React from 'react';

function MainContent() {
  return (
    <main style={styles.main}>
      <h2>Welcome to the React Basic Website!</h2>
      <p>This is a simple website built with React.js.</p>
    </main>
  );
}

const styles = {
  main: {
    padding: '20px',
    textAlign: 'center',
  },
};

export default MainContent;
