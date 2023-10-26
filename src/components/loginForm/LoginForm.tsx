import React, { FormEvent } from 'react';
import { Link } from 'react-router-dom';
import styles from './LoginForm.module.css';

type Props = {
  email: string;
  password: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmitForm: (e: FormEvent<HTMLFormElement>) => void;
}

const LoginForm = ({ email, password, handleChange, onSubmitForm }: Props) => {
  return (
    <form className={styles.form} onSubmit={onSubmitForm}>
      <h1 className={styles.title}>Login</h1>
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
      <button className={styles.button}>Submit</button>
      <Link className={styles.link} to="/register">Register</Link>
    </form>
  );
};

export default LoginForm;