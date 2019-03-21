import * as React from 'react';
import { useEffect, useState } from 'react';
import { usePromise } from '../hooks';
import { Spinner, Alert } from '.';

/**
 * @param data This is a render-prop which you use to only render your content when data has come into effect
 * @param setDependencyList This is a callback which you use to set the list of dependencies for the useEffect hook.
 * Using this will allow you to re-fetch the data if you have a dependency on a submit for example.
 */
type Child<TResult> = (data: TResult, setDependencyList: (dependencies: any) => void) => React.ReactNode;

interface Props<TResult> {
    apiMethod: () => Promise<TResult>;
    children: Child<TResult>;
    errorText: string;
    errorIndicator?: React.ReactNode;
    loadingIndicator?: React.ReactNode;
}

export const FetchHandler = <TResult extends {}>({ apiMethod, children, errorText, errorIndicator, loadingIndicator }: Props<TResult>) => {
    const { loading, data, error, trigger } = usePromise(apiMethod);
    const [dependencyList, setDependencyList] = useState(undefined);

    useEffect(() => {
        trigger();
    }, [dependencyList, trigger]);

    return (
        <>
            {loading && (loadingIndicator ? loadingIndicator : <Spinner centered />)}
            {error && (errorIndicator ? errorIndicator : <Alert type="error" message={errorText} />)}
            {data && children(data, (dependencies: any) => setDependencyList(dependencies))}
        </>
    );
};
