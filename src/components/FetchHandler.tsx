import * as React from 'react';
import { usePromise } from '../hooks/use-promise';
import { Spinner, Alert } from '../common/components';
import { useEffect } from 'react';

interface Props<TResult> {
    apiMethod: () => Promise<TResult>;
    children: (data: TResult) => React.ReactNode;
    errorText: string;
    errorIndicator?: React.ReactNode;
    loadingIndicator?: React.ReactNode;
}

export const FetchHandler = <TResult extends {}>({ apiMethod, children, loadingIndicator, errorIndicator, errorText }: Props<TResult>) => {
    const { loading, data, error, trigger } = usePromise(apiMethod);

    useEffect(() => {
        trigger();
    }, []);

    return (
        <>
            {loading && (loadingIndicator ? loadingIndicator : <Spinner centered />)}
            {error && (errorIndicator ? errorIndicator : <Alert type="error" message={errorText} />)}
            {data && children(data)}
        </>
    );
};
