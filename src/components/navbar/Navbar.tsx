import Styles from './Navbar.module.css'
import popcornIcon from './popcorn-icon.png';
import { useState, useEffect } from 'react'
import { USER_NAME, TOKEN } from '../../utils/constants';
type Props = {
    isAuth: boolean
};

const Navbar = ({ isAuth }: Props) => {

    const [name, setName] = useState('')

    useEffect(() => {
        const userName = localStorage.getItem(USER_NAME);
        if (userName) {
            setName(userName);
        }
    }, [isAuth]);

    const handleClick = () => {
        localStorage.removeItem(TOKEN);
        localStorage.removeItem(USER_NAME);
        window.location.reload();
    }
    return (
        <nav className={Styles.nav}>
            <img className={Styles.icon} src={popcornIcon} alt='logo' />
            <h3 className={Styles.text}>PopcornHub</h3>
            {isAuth && <h4 className={Styles.welcomeText}>Welcome {name}, </h4>}
            {isAuth && <p className={Styles.logout} onClick={handleClick}>Logout</p>}
        </nav>
    )
}

export default Navbar