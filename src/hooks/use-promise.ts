import { useState } from 'react';

export function usePromise<TResult>(promise: () => Promise<TResult>) {
    const [data, setData] = useState<TResult | undefined>(undefined);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const trigger = async () => {
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

    return { data, loading, error, trigger };
}
