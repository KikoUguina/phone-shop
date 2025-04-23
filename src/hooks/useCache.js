import { useState, useEffect } from 'react';

const an_hour = 60 * 60 * 1000;

export const useCache = (key, fetchFunction) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const cache = localStorage.getItem(key);

        if (cache) {
            const { data: cachedData, timestamp } = JSON.parse(cache);
            const isExpired = Date.now() - timestamp > an_hour;

            if (!isExpired) {
                setData(cachedData);
                setLoading(false);
                return;
            }
        }

        fetchFunction()
            .then((res) => {
                setData(res);
                localStorage.setItem(
                    key,
                    JSON.stringify({
                        data: res,
                        timestamp: Date.now(),
                    })
                );
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
