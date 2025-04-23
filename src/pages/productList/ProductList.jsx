import React, { useEffect, useState } from 'react';
import Card from '../../components/card/Card.jsx';
import styles from './productlist.module.css';
import { getProducts } from '../../services/api';

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const data = await getProducts();
                setProducts(data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    if (loading) return <p>Cargando productos...</p>;
    if (error) return <p>Error al cargar productos.</p>;

    return (
        <div>
            <div>
                <p>Item List</p>
            </div>
            <div className={styles.card_container}>
                
                {products.map((product) => (
                    <Card
                        key={product.id}
                        id={product.id}
                        imgUrl={product.imgUrl || product.img}
                        brand={product.brand}
                        model={product.model}
                        price={product.price}
                    />
                ))}
            </div>
        </div>
    );
};

export default ProductList;
