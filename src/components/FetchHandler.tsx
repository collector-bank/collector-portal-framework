import * as React from 'react';
import { useFetch } from '../hooks/use-fetch';
import { Spinner, Alert } from '../common/components';

interface Props<TResult> {
    apiMethod: () => Promise<TResult>;
    children: (data: TResult) => React.ReactNode;
    errorText: string;
    errorIndicator?: React.ReactNode;
    loadingIndicator?: React.ReactNode;
    increaseNumberToFetch?: number;
}

export const FetchHandler = <TResult extends {}>({
    apiMethod,
    children,
    loadingIndicator,
    errorIndicator,
    errorText,
    increaseNumberToFetch,
}: Props<TResult>) => {
    const { loading, data, error } = useFetch(apiMethod, increaseNumberToFetch);

    return (
        <>
            {loading && (loadingIndicator ? loadingIndicator : <Spinner centered />)}
            {error && (errorIndicator ? errorIndicator : <Alert type="error" message={errorText} />)}
            {data && children(data)}
        </>
    );
};
