import React from "react";
import styles from "./Count.module.scss"

const Count = ({count}) => {
    return (
        <span className={styles.count}>{count}</span>
    )
}

export default Count;