import { useState, useEffect } from 'react';

const ONE_HOUR = 60 * 60 * 1000;

export const useCache = (key, fetchFunction) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const cached = localStorage.getItem(key);

        if (cached) {
            const { data: cachedData, timestamp } = JSON.parse(cached);
            const isStale = Date.now() - timestamp > ONE_HOUR;

            if (!isStale) {
                setData(cachedData);
                setLoading(false);
                return;
            }
        }

        fetchFunction()
            .then((freshData) => {
                setData(freshData);
                const payload = {
                    data: freshData,
                    timestamp: Date.now()
                };

                localStorage.setItem(key, JSON.stringify(payload));
            })
            .catch((err) => {
                setError(err);
            })
            .finally(() => {
                setLoading(false);
            });

    }, [key, fetchFunction]);

    return { data, loading, error };
};
