import { useState, useCallback } from 'react';

export function usePromise<TResult, TErrorResult extends {}>(promise: () => Promise<TResult>) {
    const [data, setData] = useState<TResult | undefined>(undefined);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<{ code: number; data: TErrorResult } | undefined>(undefined);

    const resetPromiseData = () => {
        setData(undefined);
        setError(undefined);
    };

    const trigger = useCallback(async () => {
        const controller = new AbortController();

        setLoading(true);
        setError(undefined);
        setData(undefined);

        try {
            const result = await promise();

            setData(result);
        } catch (error) {
            setError({ code: error.status, data: error.content });
        }

        setLoading(false);

        return () => controller.abort();
    }, [promise]);

    return { data, loading, error, trigger, resetPromiseData };
}
