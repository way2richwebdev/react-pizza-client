import logo from '../../assets/logo/logo.svg';
import LoginButton from './components/LoginButton/LoginButton';
import Search from './components/Search/Search';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
        <div className="container">
          <div className={styles.headerContent}>
            <img src={logo} alt="React Pizza" />
            <Search/>
            <div className="headerActions">
              <LoginButton/>
            </div>
          </div>
        </div>
    </header>
  )
}

export default Header