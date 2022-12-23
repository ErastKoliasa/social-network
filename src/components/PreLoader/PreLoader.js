import React from "react";
import preloader from "../../assets/img/preloader.gif"
import styles from "./preloader.module.css"

const PreLoader = (props) => {
    return(
        <img className={styles.loader} src={preloader}></img>
    )
}

export default PreLoader;