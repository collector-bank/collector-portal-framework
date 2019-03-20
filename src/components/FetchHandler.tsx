import * as React from 'react';
import { useEffect, useState } from 'react';
import { usePromise } from '../hooks';
import { Spinner, Alert } from '.';

interface Props<TResult> {
    apiMethod: () => Promise<TResult>;
    children: (data: TResult, updateDependencies?: (dependencies: any) => void) => React.ReactNode;
    errorText: string;
    errorIndicator?: React.ReactNode;
    loadingIndicator?: React.ReactNode;
}

export const FetchHandler = <TResult extends {}>({ apiMethod, children, errorText, errorIndicator, loadingIndicator }: Props<TResult>) => {
    const { loading, data, error, trigger } = usePromise(apiMethod);
    const [dependencyList, setDependencyList] = useState(undefined);

    useEffect(() => {
        trigger();

        if (dependencyList) {
            setDependencyList(undefined);
        }
    }, [dependencyList, trigger]);

    return (
        <>
            {loading && (loadingIndicator ? loadingIndicator : <Spinner centered />)}
            {error && (errorIndicator ? errorIndicator : <Alert type="error" message={errorText} />)}
            {data && children(data, (dependencies: any) => setDependencyList(dependencies))}
        </>
    );
};
