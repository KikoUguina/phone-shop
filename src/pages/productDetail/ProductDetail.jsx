import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getProductById } from '../../services/api';
import styles from './productDetail.module.css'

const ProductDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const data = await getProductById(id);
                setProduct(data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, [id]);

    if (loading) return <p>Cargando detalles...</p>;
    if (error) return <p>Error al cargar el producto.</p>;
    if (!product) return null;

    return (
        <div>
            <div className={styles.detail_container}>
                <div>
                    <img src={product.imgUrl} alt={`${product.brand} ${product.model}`} width="200" />
                </div>
                <div>
                    <h1>{product.brand} {product.model}</h1>
                    <p>Precio: {product.price}€</p>
                    <ul>
                        <li>CPU: {product.cpu}</li>
                        <li>RAM: {product.ram}</li>
                        <li>SO: {product.os}</li>
                        <li>Pantalla: {product.displayResolution}</li>
                        <li>Batería: {product.battery}</li>
                        <li>Cámaras: {product.primaryCamera} / {product.secondaryCamera}</li>
                        <li>Dimensiones: {product.dimentions}</li>
                        <li>Peso: {product.weight}g</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
