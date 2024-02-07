import React, { useState, type FormEvent } from 'react';
import { loginService } from '../../services/auth/authService';
import { type User } from '../../utils/interfaces';
import { useDispatch } from 'react-redux';
import { type AppDispatch } from '../../store';
import { setAuth } from '../../features/auth/authSlice';
import { Link } from 'react-router-dom';
import styles from './LoginForm.module.scss';
import { REG_ROUTE } from '../../utils/constants';

const LoginForm = (): JSX.Element => {
  const dispatch = useDispatch<AppDispatch>();
  const [errorMessages, setErrorMessages] = useState<string[]>([]);

  const [inputs, setInputs] = useState<User>({
    username: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;

    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const { username, password } = inputs;
    loginService({ username, password })
      .then(() => {
        dispatch(setAuth({ isAuth: true, username }));
      })
      .catch((err: any) => {
        const errorMessagesArray = Array.isArray(err) ? err : [err];
        setErrorMessages(errorMessagesArray);
      });
  };

  return (
    <div className={styles.containerForm}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <h1 className={styles.formTitle}>Login</h1>

        <input
          required
          type="text"
          name="username"
          placeholder="Username"
          value={inputs.username}
          onChange={handleChange}
          className={styles.formInput}
        />

        <input
          required
          type="password"
          name="password"
          placeholder="Password"
          value={inputs.password}
          onChange={handleChange}
          className={styles.formInput}
        />

        <button type="submit" className={styles.formButton}>
          Submit
        </button>

        <div className={styles.formContainerError}>
          {errorMessages.map((message, index) => (
            <p key={index} className={styles.formError}>
              {message}
            </p>
          ))}
        </div>

        <p className={styles.formInfo}>Dont have an account?</p>
        <Link to={REG_ROUTE}> Go to Register</Link>
      </form>
    </div>
  );
};

export default LoginForm;
