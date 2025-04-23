import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Card from './Card';

describe('🧱 Card', () => {
    it('muestra marca, modelo e imagen correctamente', () => {
        render(
            <BrowserRouter>
                <Card
                    id="1"
                    brand="Apple"
                    model="iPhone 13"
                    imgUrl="mock.jpg"
                />
            </BrowserRouter>
        );

        expect(screen.getByText(/Apple/i)).toBeInTheDocument();
        expect(screen.getByText(/iPhone 13/i)).toBeInTheDocument();

        expect(screen.getByRole('img')).toHaveAttribute('src', 'mock.jpg');
    });
});
