import React from 'react';
import styles from './Navbar.module.scss';
import SunIcon from '../../assets/imgs/icon-sun.svg';
import MoonIcon from '../../assets/imgs/icon-moon.svg';
import styled from 'styled-components';

const StyledNav = styled.nav`
    background-image: url(${props => props.theme.bannerImg});

    @media screen and (max-width: 500px) {
        background-image: url(${props => props.theme.bannerImgMob});
    }
`

const Navbar = ({ toggle, onToggle, toggleTheme }) => {

    return (
        <StyledNav className={styles.navbar}>
            <div className={`${styles.navbar__container} ${styles.container}`}>
                <h1>Todo</h1>
                {/* <img src={MoonIcon} onClick={toggleTheme} alt="theme-switch"/> */}
                {toggle === false ? (
                    <img 
                        src={MoonIcon} 
                        onClick={() => {
                            toggleTheme()
                            onToggle()
                        }} 
                        alt="theme-switch" 
                    />
                ) : (
                    <img 
                        src={SunIcon} 
                        onClick={() => {
                            toggleTheme()
                            onToggle()
                        }} 
                        alt="theme-switch" 
                    />
                )}
                {/* {switchThemeIcon} */}
            </div>
        </StyledNav>
    )
}

export default Navbar;
