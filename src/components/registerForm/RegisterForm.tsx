import React, { FormEvent } from 'react';
import { Link } from 'react-router-dom';
import styles from './RegisterForm.module.css';

type Props = {
    email: string;
    password: string;
    name: string;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onSubmitForm: (e: FormEvent<HTMLFormElement>) => void;
}

const RegisterForm = ({ email, password, name, handleChange, onSubmitForm }: Props) => {
    return (
        <form className={styles.form} onSubmit={onSubmitForm}>
            <h1 className={styles.title}>Register</h1>
            <input
                className={styles.input}
                type='email'
                name='email'
                placeholder='email'
                value={email}
                onChange={handleChange}
            />
            <input
                className={styles.input}
                type='password'
                name='password'
                placeholder='password'
                value={password}
                onChange={handleChange}
            />
            <input
                className={styles.input}
                type='name'
                name='name'
                placeholder='name'
                value={name}
                onChange={handleChange}
            />
            <button className={styles.button}>Submit</button>
            <Link className={styles.link} to="/login">Login</Link>
        </form>
    );
};

export default RegisterForm;