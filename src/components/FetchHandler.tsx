import * as React from 'react';
import { useEffect } from 'react';
import { usePromise } from '../hooks';
import { Spinner, Alert } from '.';

/**
 * @param data This is a render-prop which you use to only render your content when data has come into effect
 */
type Child<TResult> = (data: TResult) => React.ReactNode;

interface Props<TResult> {
    apiMethod: (abortSignal?: AbortSignal) => Promise<TResult>;
    children: Child<TResult>;
    errorText: string;
    errorIndicator?: React.ReactNode;
    notFoundIndicator?: React.ReactNode;
    loadingIndicator?: React.ReactNode;
}

export const FetchHandler = <TResult extends {}>({
    apiMethod,
    children,
    errorText,
    errorIndicator,
    notFoundIndicator,
    loadingIndicator,
}: Props<TResult>) => {
    const { loading, data, error, trigger } = usePromise(apiMethod);

    useEffect(() => {
        trigger();
    }, [trigger]);

    const renderError = () => {
        if (errorIndicator && error?.code !== 404 && notFoundIndicator) {
            return errorIndicator;
        } else if (error?.code === 404 && notFoundIndicator) {
            return notFoundIndicator;
        }

        return error?.code !== 401 ? <Alert type="error" message={errorText} /> : <Spinner centered />;
    };

    return (
        <>
            {loading && (loadingIndicator ? loadingIndicator : <Spinner centered />)}
            {error && renderError()}
            {data && children(data)}
        </>
    );
};
