import { ChangeEvent, FormEvent, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from './Login.module.css'
import { loginUser } from '../../services/userService';
import LoginForm from '../../components/loginForm/LoginForm';
import Navbar from '../../components/navbar/Navbar';

type Props = {
    setAuth: (auth: boolean) => void;
};

const Login = ({ setAuth }: Props) => {

    const [inputs, setInputs] = useState({
        email: '',
        password: '',
    })

    const { email, password } = inputs;

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInputs({ ...inputs, [e.target.name]: e.target.value })
    }

    const onSubmitForm = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const loginResult = await loginUser(email, password);

        if (loginResult.success) {
            setAuth(true);
        } else {
            setAuth(false);
            toast.error(loginResult.message);
        }
    };

    return (
        <>
            <Navbar isAuth={false} />
            <div className={styles.container}>
                <LoginForm
                    email={email}
                    password={password}
                    handleChange={handleChange}
                    onSubmitForm={onSubmitForm}
                />
                <ToastContainer />
            </div>
        </>
    );
};

export default Login;