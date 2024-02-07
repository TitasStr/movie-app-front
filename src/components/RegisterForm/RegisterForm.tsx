import React from 'react';
import styles from "./RegisterForm.module.scss"

const RegisterForm = (): JSX.Element => {
    return(
        <div className={styles.containerForm}>
            <form className={styles.form}>
                <h1 className={styles.formTitle}>Register</h1>
                <input
                className={styles.formInput}
                 />
                <input
                className={styles.formInput}
                 />
                <button className={styles.formButton}>Submit</button>
                <p className={styles.formInfo}>Already have an account?</p>
            </form>
        </div>
    )
}

export default RegisterForm;