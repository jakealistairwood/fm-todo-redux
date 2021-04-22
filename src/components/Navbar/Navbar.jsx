import React from 'react';
import styles from './Navbar.module.scss';

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.navbar__container}>
                <h1>Todo</h1>
                <p>Switch</p>
            </div>
        </nav>
    )
}

export default Navbar;
