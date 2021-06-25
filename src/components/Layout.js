import * as React from "react"
import Header from "./Header"
import * as styles from "./Layout.module.scss"

const Layout = ({children}) => {
    return (
        <>
            <Header></Header>
            <div className={styles.content}>
                <main>{ children }</main>
            </div>
            <footer className={styles.footer}>
                &copy; 2021 shakexxmmm
            </footer>
        </>
    )
}

export default Layout