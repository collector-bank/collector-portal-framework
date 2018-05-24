const getCookie = (key: string) => {
    var matches = document.cookie.match('(^|;)\\s*' + key + '\\s*=\\s*([^;]+)');
    return matches ? matches.pop() : null;
}

const request = (method: string) => (endpoint: string, payload?: any, extraHeaders?: { [name: string]: string }) => {
    const headers = new Headers({
        'X-Requested-With': 'XMLHttpRequest',
        'Accept': 'application/json',
    });

    if (!(payload instanceof FormData)) {
        headers.append('Content-Type', 'application/json');
    }

    const csrfToken = getCookie('CSRF-TOKEN');

    if (csrfToken) {
        headers.append('X-CSRF-Token', csrfToken);
    }

    if (extraHeaders) {
        Object.keys(extraHeaders).forEach(key => headers.append(key, extraHeaders[key]))
    }

    const options: RequestInit = {
        headers,
        method,
        credentials: 'same-origin',
    };

    if (payload) {
        options.body = payload instanceof FormData ? payload : JSON.stringify(payload);
    }

    const getPromise = (response: Response, content: any): void =>
        response.status >= 200 && response.status < 300 ? content : Promise.reject(content);

    const returnContent = (response: Response) => {
        response.headers["Content-Type"] === 'application/json'
            ? response.json().then(json => { return getPromise(response, json) })
            : response.text().then(text => { return getPromise(response, text) })
    };

    return window.fetch(endpoint, options)
        .then(response => {
            if (response.status === 204) {
                return;
            } else returnContent(response);
        })
        .catch(err => {
            console.error(err);
            throw err;
        });
};

export const get = request('GET');
export const post = request('POST');
export const put = request('PUT');
export const del = request('DELETE');
