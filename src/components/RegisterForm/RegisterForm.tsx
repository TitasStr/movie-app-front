import React, { useState, type FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { registerService } from '../../services/auth/authService';
import { type User } from '../../utils/interfaces';
import { useSelector } from 'react-redux';
import { type RootState } from '../../store';
import styles from './RegisterForm.module.scss';
import { LOG_ROUTE } from '../../utils/constants';

const RegisterForm = (): JSX.Element => {
  useSelector((state: RootState) => state.auth);
  const navigate = useNavigate();
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
    registerService({ username, password })
      .then(() => {
        navigate(LOG_ROUTE);
      })
      .catch((err: any) => {
        const errorMessagesArray = Array.isArray(err) ? err : [err];
        setErrorMessages(errorMessagesArray);
      });
  };

  return (
    <div className={styles.containerForm}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <h1 className={styles.formTitle}>Register</h1>

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
        <p className={styles.formInfo}>Already have an account?</p>
        <Link to={LOG_ROUTE}> Go to Login</Link>
      </form>
    </div>
  );
};

export default RegisterForm;
