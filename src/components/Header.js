import * as React from "react";
import {useState} from "react";
import { Link } from "gatsby";
import * as styles from "./Header.module.scss";
import Nav from "./Nav"

const Header = () => {
    const [openMenu, setOpenMenu] = useState(0)
    return (
        <header className={styles.header}>
            <div className={styles.content}>
                <button type="button" 
                        className={styles.menuBtn}
                        aria-expanded={openMenu}
                        onClick={() => {setOpenMenu(!openMenu)}}>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <Nav openMenu={openMenu} setOpenMenu={setOpenMenu}/>
            </div>
        </header>
    )
}

export default Header