import React from "react"
import styles from "./Footer.module.scss";

const Footer:React.FC=()=>{
    return(
        <footer className={styles.footer}>
            Все права защищены &copy;
        </footer>
    );
}
export default Footer;