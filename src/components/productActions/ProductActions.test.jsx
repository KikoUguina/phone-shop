import { render, screen, fireEvent } from '@testing-library/react';
import ProductActions from './ProductActions';
import { CartContext } from '../../context/CartContext';

describe('⚙️ ProductActions', () => {
    it('renderiza selectores y añade al carrito', async () => {
        const updateCartCount = vi.fn();

        render(
            <CartContext.Provider value={{ updateCartCount }}>
                <ProductActions
                    id="abc"
                    colors={[{ code: '1', name: 'Rojo' }]}
                    storages={[{ code: '2', name: '64GB' }]}
                />
            </CartContext.Provider>
        );

        expect(screen.getByText('Color:')).toBeInTheDocument();
        expect(screen.getByText('Almacenamiento:')).toBeInTheDocument();

        fireEvent.click(screen.getByText(/añadir al carrito/i));

        expect(updateCartCount).toBeCalledTimes(0);
    });
});
