import React from "react";
import styles from "./FormsControls.module.css"

export const TextArea = ({ input, meta, ...props }) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={hasError ? styles.error : ""}>
            <textarea  {...props} {...input} />
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}

export const Input = ({ input, meta, ...props }) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={hasError ? styles.error : ""}>
            <input {...props} {...input} />
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}