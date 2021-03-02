const getCookie = (key: string) => {
    var matches = document.cookie.match('(^|;)\\s*' + key + '\\s*=\\s*([^;]+)');
    return matches ? matches.pop() : null;
};

export interface Error {
    status: number;
    content: any;
}

const request = (method: string, returnRawResponse: boolean = false) => async (
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

    const csrfToken = getCookie('__Host-CSRF-TOKEN');

    if (csrfToken) {
        headers.append('X-CSRF-Token', csrfToken);
    }

    const csrfTokenPrevious = getCookie('CSRF-TOKEN');

    if (!csrfToken && csrfTokenPrevious) {
        headers.append('X-CSRF-Token', csrfTokenPrevious);
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
    const getJsonOrText = (response: Response) =>
        response.headers.has('Content-Type') && response.headers.get('Content-Type')!.indexOf('application/json') !== -1
            ? response.json()
            : response.text();

    try {
        const response = await window.fetch(endpoint, options);

        return await getPromiseForStatus(response, returnRawResponse ? Promise.resolve(response) : getJsonOrText(response));
    } catch (error) {
        if (error.name === 'AbortError') {
            console.log('The user aborted a request.');
            return;
        }

        console.error(error);
        throw error;
    }
};

export const get = request('GET');
export const post = request('POST');
export const put = request('PUT');
export const del = request('DELETE');
export const patch = request('PATCH');
export const getRaw = request('GET', true);

export const download = async (response: Response, fallbackFileName: string = 'file') => {
    const file = window.URL.createObjectURL(await response.blob());
    var filename = fallbackFileName;

    if (response.headers.has('Content-Disposition')) {
        const disposition = response.headers.get('Content-Disposition')!;
        const matches = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/.exec(disposition);

        if (matches != null && matches[1]) {
            filename = matches[1].replace(/['"]/g, '');
        }
    }

    const a = document.createElement('a');
    a.href = file;
    a.download = filename;
    a.style.display = 'none';

    document.body.appendChild(a);

    a.click();

    setTimeout(() => document.body.removeChild(a), 100);
};
