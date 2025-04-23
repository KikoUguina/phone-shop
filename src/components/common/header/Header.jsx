import { Link, useLocation } from 'react-router-dom';
import { useContext, useMemo } from 'react';
import styles from './Header.module.css';
import { CartContext } from '../../../context/CartContext';

const Header = () => {
    const { cartCount } = useContext(CartContext);

    const location = useLocation();

    const breadcrumbs = useMemo(() => {
        if (location.pathname === '/') {
            return <span>Inicio</span>;
        } else if (location.pathname.startsWith('/product/')) {
            return (
                <>
                    <Link to="/">Inicio</Link> / <Link to={location.pathname}>Detalles</Link>
                </>
            );
        } else {
            return (
                <>
                    <Link to="/">Inicio</Link> / <span>...</span>
                </>
            );
        }
    }, [location.pathname]);

    return (
        <header className={styles.header}>
            <div>
                <Link to="/" className={styles.logo}>Phone-Shop</Link>
            </div>
            <div className={styles.breadcrumbs}>
                {breadcrumbs}
            </div>
            <div className={styles.cart}>
                🛒 Carrito: {cartCount}
            </div>
        </header>
    );
};

export default Header;
