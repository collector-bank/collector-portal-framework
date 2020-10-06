import { useMemo, useState, useEffect } from 'react';

export function usePromise<TResult, TErrorResult extends {}>(promise: (abortSignal?: AbortSignal) => Promise<TResult>) {
    const [data, setData] = useState<TResult | undefined>(undefined);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<{ code: number; data: TErrorResult } | undefined>(undefined);

    const resetPromiseData = () => {
        setData(undefined);
        setError(undefined);
    };

    const { trigger, cancel } = useMemo(() => {
        const controller = new AbortController();

        const trigger = async () => {
            setLoading(true);
            setError(undefined);
            setData(undefined);

            try {
                const result = await promise(controller.signal);
                if (!controller.signal.aborted) {
                    setData(result || ({} as TResult));
                }
            } catch (error) {
                if (!controller.signal.aborted) {
                    setError({ code: error.status, data: error.content || error.message });
                }
            }

            if (!controller.signal.aborted) {
                setLoading(false);
            }

            return () => void 0;
        };

        const cancel = () => controller.abort();

        return { trigger, cancel };
    }, [promise]);

    useEffect(() => {
        return cancel;
    }, [cancel]);

    return { data, loading, error, trigger, resetPromiseData };
}
