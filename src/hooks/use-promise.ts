import { useState, useCallback } from 'react';

export function usePromise<TResult>(promise: () => Promise<TResult>) {
    const [data, setData] = useState<TResult | undefined>(undefined);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [errorCode, setErrorCode] = useState<number | undefined>(undefined);

    const trigger = useCallback(async () => {
        setLoading(true);
        setError(false);
        setData(undefined);

        try {
            const result = await promise();

            setData(result);
        } catch (error) {
            setErrorCode(error.status);
            setError(true);
        }

        setLoading(false);
    }, [promise]);

    return { data, loading, error, trigger, errorCode };
}
