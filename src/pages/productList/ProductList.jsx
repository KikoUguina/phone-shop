import React, { useEffect, useState } from 'react';
import { getProducts } from '../../services/api';
import Card from '../../components/card/Card.jsx';
import SearchBar from '../../components/searchBar/SearchBar';
import styles from './productlist.module.css';

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState('');
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

    const filteredProducts = products.filter((product) => {
        const term = search.toLowerCase();
        return (
            product.brand.toLowerCase().includes(term) ||
            product.model.toLowerCase().includes(term)
        );
    });

    if (loading) return <p>Cargando productos...</p>;
    if (error) return <p>Error al cargar productos.</p>;

    return (
        <div>
            <div className={styles.itemlist_searchbar_container}>
                <p>Item List</p>
                <SearchBar value={search} onChange={setSearch} />
            </div>

            <div className={styles.card_container}>
                {filteredProducts.map((product) => (
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
