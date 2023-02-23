import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import styles from "./Header.module.css"

const Header = () => {
  return (


    <header className={styles.header}>
        <nav className={styles.nav}>
          <div>
          {/* <img src="https://firebasestorage.googleapis.com/v0/b/since-app-e7f91.appspot.com/o/thesmartestcase%2Fthesmartestcase_4.png?alt=media&token=692d4318-7d17-4bf2-954b-71aae1ac6396" alt="" width={160} /> */}
          </div>
          <ul>
            <Link to={'/'}><li>Home</li></Link>
            <Link to={'/account'}><li>Account</li></Link>
            <Link to={'/login'}><li>Log In</li></Link>
            <Link to={'/signup'}><li>Sign Up</li></Link>
          </ul>
        </nav>
    </header>


    )
}

export default Header;
