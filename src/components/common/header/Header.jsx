import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {

    const breadcrumbs = location.pathname === '/' 
        ? 'Inicio' 
        : `Inicio / ${location.pathname.replace('/', '')}`;

    return (
        <header className={styles.header}>
            <div>
                <Link to="/" className={styles.logo}>Phone-Shop</Link>
            </div>
            <div className={styles.breadcrumbs}>
                {breadcrumbs}
            </div>
            <div className={styles.cart}>
                🛒 Carrito: {0}
            </div>
        </header>
    );
};

export default Header;
