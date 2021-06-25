import * as React from "react";
import {useState} from "react";
import { Link } from "gatsby";
import * as styles from "./Nav.module.scss";

const Nav = ({openMenu, setOpenMenu}) => {
    // const openMenu = props.data
    return (
        <nav className={styles.nav} aria-expanded={openMenu}>
            <div className={styles.nav__bg}
                 onClick={() => {setOpenMenu(!openMenu)}}>
            </div>
            <div className={styles.nav__content}>
                <ul className={styles.nav__content__items}>
                    <li className={styles.nav__content__item}><Link to="/">TOP</Link></li>
                    <li className={styles.nav__content__item}><Link to="/blog">BLOG</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav