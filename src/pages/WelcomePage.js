// src/pages/WelcomePage.js

import React from 'react';
import SideNavbar from './SideNavbar'; // Ensure this path is correct
import styles from './WelcomePage.module.css'; // Ensure this path is correct

function WelcomePage() {
  console.log('WelcomePage loaded'); // Add this line to debug
  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <SideNavbar />
      </div>
      <div className={styles.background}></div>
    </div>
  );
}

export default WelcomePage;
