import React, { Component } from 'react';
import styles from './Footer.module.css'

const Footer = () => {
  return (


    <footer className={styles.footer}>
        <span>© 2023 The Smartest Case. All Rights Reserved</span>
        <div className={styles.footer_container_payments}>
            <span>Terms of use</span>
            <span>Policy Private</span>
            <img src="https://firebasestorage.googleapis.com/v0/b/since-app-e7f91.appspot.com/o/thesmartestcase%2Fpaypal.png?alt=media&token=71794464-5b6a-46a7-b2bb-49b65917abb3" alt="" width={60} />
            <img src="https://firebasestorage.googleapis.com/v0/b/since-app-e7f91.appspot.com/o/thesmartestcase%2Fstripe.png?alt=media&token=ae76f520-fab7-4af3-9d14-307bb9b88e4a" alt="" width={40} />
        </div>
    </footer>


    )
}

export default Footer;
