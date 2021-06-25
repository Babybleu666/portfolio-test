import * as React from "react";
import { Link } from "gatsby";
import * as styles from "./Profile.module.scss";

const Header = () => {
    return (
        <div className={styles.content}>
            <p className={styles.picture}>
                <span className={styles.comment}>shakexxmmm[design]</span>
                <img width={152} height={152} src="/profile.png" alt="profile"/>
            </p>
            <h2 className={styles.title}>Hello!<br />I'm shakexxmmm.</h2>
            <ul className={styles.snsLink}>
                <li><a href="https://twitter.com/mgmgshake" target="_blank" rel="noreferrer"><img width={50} height={50} src="/sns/twitter.png" alt="twitter" /></a></li>
                <li><a href="https://github.com/shakexxmmm" target="_blank" rel="noreferrer"><img width={50} height={50} src="/sns/github.png" alt="twitter" /></a></li>
            </ul>
        </div>
    )
}

export default Header