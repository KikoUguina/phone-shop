import { renderHook, waitFor } from '@testing-library/react';
import { useCache } from './useCache';

const key = 'test_cache';

beforeEach(() => {
    localStorage.clear();
});

describe('📦 useCache', () => {
    it('usa datos del fetch si no hay cache', async () => {
        const mockFetch = vi.fn(() => Promise.resolve('fetched data'));

        const { result } = renderHook(() => useCache(key, mockFetch));

        await waitFor(() => {
            expect(result.current.data).toBe('fetched data');
        });

        expect(mockFetch).toHaveBeenCalled();
    });

    it('usa cache si no ha expirado', () => {
        const fakeCache = {
            data: 'cached!',
            timestamp: Date.now()
        };
        localStorage.setItem(key, JSON.stringify(fakeCache));

        const { result } = renderHook(() => useCache(key, () => Promise.resolve('new')));

        expect(result.current.data).toBe('cached!');
    });
});
