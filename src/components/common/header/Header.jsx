import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {

    const breadcrumbs = location.pathname === '/' 
        ? 'Inicio' 
        : `Inicio / ${location.pathname.replace('/', '')}`;

    return (
        <header className={styles.header}>
            <div>
                <Link className={styles.logo}>Phone Shop</Link>
            </div>
            <div className={styles.breadcrumbs}>
                {breadcrumbs}
            </div>
            <div className={styles.cart}>
                🛒: {0}
            </div>
        </header>
    );
};

export default Header;
