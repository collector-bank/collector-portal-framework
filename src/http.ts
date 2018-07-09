const getCookie = (key: string) => {
    var matches = document.cookie.match('(^|;)\\s*' + key + '\\s*=\\s*([^;]+)');
    return matches ? matches.pop() : null;
};

export interface Error {
    status: number;
    content: any;
}

const request = (method: string) => (endpoint: string, payload?: any, extraHeaders?: { [name: string]: string }) => {
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
    };

    if (payload) {
        options.body = payload instanceof FormData ? payload : JSON.stringify(payload);
    }

    const getPromiseForStatus = (response: Response, stream: Promise<any>) =>
        stream.then(
            content => (response.status >= 200 && response.status < 300 ? content : Promise.reject({ status: response.status, content }))
        );

    return window
        .fetch(endpoint, options)
        .then(response =>
            getPromiseForStatus(
                response,
                response.headers.has('Content-Type') && response.headers.get('Content-Type')!.indexOf('application/json') !== -1
                    ? response.json()
                    : response.text()
            )
        )
        .catch(err => {
            console.error(err);
            throw err;
        });
};

export const get = request('GET');
export const post = request('POST');
export const put = request('PUT');
export const del = request('DELETE');
export const patch = request('PATCH');
