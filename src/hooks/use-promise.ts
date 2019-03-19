import { useState, useCallback } from 'react';

export function usePromise<TResult>(promise: () => Promise<TResult>) {
    const [data, setData] = useState<TResult | undefined>(undefined);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const trigger = useCallback(async () => {
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
    }, [promise]);

    return { data, loading, error, trigger };
}
