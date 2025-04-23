import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartCount, setCartCount] = useState(0);

    useEffect(() => {
        const storedCount = localStorage.getItem('cartCount');
        if (storedCount) {
            setCartCount(parseInt(storedCount, 10));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('cartCount', cartCount.toString());
    }, [cartCount]);

    const updateCartCount = (newCount) => {
        setCartCount(newCount);
    };

    return (
        <CartContext.Provider value={{ cartCount, updateCartCount }}>
            {children}
        </CartContext.Provider>
    );
};
