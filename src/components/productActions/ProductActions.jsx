import React, { useState, useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { addToCart } from '../../services/api'; // 👈 lo importas
import styles from './ProductActions.module.css';

const ProductActions = ({ id, colors = [], storages = [] }) => {
    const [selectedColor, setSelectedColor] = useState(colors[0]?.code || '');
    const [selectedStorage, setSelectedStorage] = useState(storages[0]?.code || '');
    const { updateCartCount } = useContext(CartContext);

    const handleAddToCart = async () => {
        try {
            const { count } = await addToCart({
                id,
                colorCode: selectedColor,
                storageCode: selectedStorage
            });

            updateCartCount((prev) => prev + count);
        } catch (error) {
            console.error('❌ Error al añadir al carrito:', error);
        }
    };

    return (
        <div className={styles.actions_container}>
            <div className={styles.select_group}>
                <label>
                    Color:
                    <select
                        value={selectedColor}
                        onChange={(e) => setSelectedColor(e.target.value)}
                    >
                        {colors.map((color) => (
                            <option key={color.code} value={color.code}>
                                {color.name}
                            </option>
                        ))}
                    </select>
                </label>

                <label>
                    Almacenamiento:
                    <select
                        value={selectedStorage}
                        onChange={(e) => setSelectedStorage(e.target.value)}
                    >
                        {storages.map((storage) => (
                            <option key={storage.code} value={storage.code}>
                                {storage.name}
                            </option>
                        ))}
                    </select>
                </label>

                <button className={styles.add_button} onClick={handleAddToCart}>
                    Añadir al carrito
                </button>
            </div>
        </div>
    );
};

export default ProductActions;
