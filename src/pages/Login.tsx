import React from "react"
import Navbar from "../components/Navbar/Navbar"
import LoginForm from "../components/LoginForm/LoginForm";

const Login = (): JSX.Element => {
    return(
        <>
            <Navbar />
            <LoginForm />
        </>
    )
}

export default Login;