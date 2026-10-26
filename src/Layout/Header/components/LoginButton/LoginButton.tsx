import styles from './LoginButton.module.scss';
import { UserIcon } from './icons/icons';

const LoginButton = () => {
  return (
    <button className={styles.loginButton}>
        <UserIcon/>
        Войти
    </button>
  )
}

export default LoginButton