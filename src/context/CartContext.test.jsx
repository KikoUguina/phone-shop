import { render, screen, fireEvent, act } from '@testing-library/react';
import { CartProvider, CartContext } from './CartContext';
import { useContext } from 'react';

function TestComponent() {
    const { cartCount, updateCartCount } = useContext(CartContext);
    return (
        <>
            <span data-testid="count">Carrito: {cartCount}</span>
            <button onClick={() => updateCartCount((prev) => prev + 1)}>Añadir</button>
        </>
    );
}

describe('🛒 CartContext', () => {
    it('inicia en 0 y se incrementa', async () => {
        render(
            <CartProvider>
                <TestComponent />
            </CartProvider>
        );

        expect(screen.getByTestId('count')).toHaveTextContent('Carrito: 0');

        await act(async () => {
            fireEvent.click(screen.getByText(/añadir/i));
        });

        expect(screen.getByTestId('count')).toHaveTextContent('Carrito: 1');
    });
});
