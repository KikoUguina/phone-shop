import { render, screen, fireEvent } from '@testing-library/react';
import SearchBar from './SearchBar';

describe('🔍 SearchBar', () => {
    it('muestra el placeholder correctamente', () => {
        render(<SearchBar value="" onChange={() => {}} />);
        expect(screen.getByPlaceholderText(/buscar/i)).toBeInTheDocument();
    });

    it('actualiza el valor al escribir', () => {
        const handleChange = vi.fn();
        render(<SearchBar value="" onChange={handleChange} />);
        fireEvent.change(screen.getByRole('textbox'), { target: { value: 'Samsung' } });
        expect(handleChange).toHaveBeenCalledWith('Samsung');
    });
});
