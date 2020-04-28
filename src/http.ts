const getCookie = (key: string) => {
    var matches = document.cookie.match('(^|;)\\s*' + key + '\\s*=\\s*([^;]+)');
    return matches ? matches.pop() : null;
};

export interface Error {
    status: number;
    content: any;
}

const request = (method: string) => async (
    endpoint: string,
    payload?: any,
    extraHeaders?: { [name: string]: string },
    abortSignal?: AbortSignal
) => {
    const headers = new Headers({
        'X-Requested-With': 'XMLHttpRequest',
        Accept: 'application/json',
    });

    if (!(payload instanceof FormData)) {
        headers.append('Content-Type', 'application/json');
    }

    const csrfToken = getCookie('CSRF-TOKEN');

    if (csrfToken) {
        headers.append('X-CSRF-Token', csrfToken);
    }

    if (extraHeaders) {
        Object.keys(extraHeaders).forEach(key => headers.append(key, extraHeaders[key]));
    }

    const options: RequestInit = {
        headers,
        method,
        credentials: 'same-origin',
        signal: abortSignal,
    };

    if (payload) {
        options.body = payload instanceof FormData ? payload : JSON.stringify(payload);
    }

    const getPromiseForStatus = (response: Response, stream: Promise<any>) =>
        stream.then(content =>
            response.status >= 200 && response.status < 300 ? content : Promise.reject({ status: response.status, content })
        );

    try {
        const response = await window.fetch(endpoint, options);

        return await getPromiseForStatus(
            response,
            response.headers.has('Content-Type') && response.headers.get('Content-Type')!.indexOf('application/json') !== -1
                ? response.json()
                : response.text()
        );
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const get = request('GET');
export const post = request('POST');
export const put = request('PUT');
export const del = request('DELETE');
export const patch = request('PATCH');
