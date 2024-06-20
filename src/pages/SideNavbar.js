// src/pages/SideNavbar.js

import React from 'react';
import { Link } from 'react-router-dom';
import styles from './SideNavbar.module.css'; // Correct CSS module path

function SideNavbar() {
  console.log('SideNavbar loaded'); // Add this line to debug
  return (
    <div className={styles.sidenav}>
      <Link to="/welcome">Welcome Page</Link>
      <Link to="/order">Order Page</Link>
      {/* Add more links as needed */}
    </div>
  );
}

export default SideNavbar;
