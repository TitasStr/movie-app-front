import React from 'react';
import styles from "./LoginForm.module.scss"

const LoginForm = (): JSX.Element => {
    return(
        <div className={styles.containerForm}>
            <form className={styles.form}>
                <h1 className={styles.formTitle}>Login</h1>
                <input
                className={styles.formInput}
                 />
                <input
                className={styles.formInput}
                 />
                <button className={styles.formButton}>Submit</button>
                <p className={styles.formInfo}>Dont have an account?</p>
            </form>
        </div>
    )
}

export default LoginForm;