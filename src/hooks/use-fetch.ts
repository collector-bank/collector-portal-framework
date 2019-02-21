import { useEffect, useState } from 'react';

export function useFetch<TResult>(promise: () => Promise<TResult>, increaseNumberToFetch?: number) {
    const [data, setData] = useState<TResult | undefined>(undefined);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const fetchData = async () => {
        setLoading(true);
        setError(false);
        setData(undefined);

        try {
            const result = await promise();

            setData(result);
        } catch (error) {
            setError(true);
        }

        setLoading(false);
    };

    useEffect(() => {
        fetchData();
    }, [increaseNumberToFetch]);

    return { data, loading, error, fetchData };
}
