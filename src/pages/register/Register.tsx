import { ChangeEvent, FormEvent, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from './Register.module.css'
import { registerUser } from '../../services/userService';
import RegisterForm from '../../components/registerForm/RegisterForm';
import Navbar from '../../components/navbar/Navbar';

type Props = {
    setAuth: (auth: boolean) => void;
};

const Register = ({ setAuth }: Props) => {

    const [inputs, setInputs] = useState({
        email: '',
        password: '',
        name: ''
    })

    const { email, password, name } = inputs;

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInputs({ ...inputs, [e.target.name]: e.target.value })
    }

    const onSubmitForm = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const registrationResult = await registerUser(email, password, name);
        
        if (registrationResult.success) {
            setAuth(true);
        } else {
            setAuth(false);
            toast.error(registrationResult.message);
        }
    };

    return (
        <>
            <Navbar isAuth={false} />
            <div className={styles.container}>
                <RegisterForm
                    email={email}
                    password={password}
                    name={name}
                    handleChange={handleChange}
                    onSubmitForm={onSubmitForm}
                />
                <ToastContainer />
            </div>
        </>
    )
}

export default Register;