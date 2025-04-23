import styles from './Card.module.css';
import { Link } from 'react-router-dom';

const Card = ({ id, imgUrl, brand, model, price }) => {
    return (
        <div className={styles.cards}>
            <img src={imgUrl} alt={`${brand} ${model}`} />
            <h2>
                <Link to={`/product/${id}`} className={styles.product_link}>
                    {brand} {model}
                </Link>
            </h2>
        </div>
    );
};

export default Card;
