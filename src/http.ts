const request = (method: string) => (endpoint: string, payload?: {}) => {
    const headers = new Headers({
        'Content-Type': 'application/json',
        Accept: 'application/json',
    });

    const options: RequestInit = {
        headers,
        method,
        credentials: 'same-origin',
    };

    if (payload) {
        options.body = JSON.stringify(payload);
    }

    return window.fetch(endpoint, options)
        .then(response => {
            if (response.status === 204) {
                return;
            } else if (response.status >= 200 && response.status < 300) {
                return response.json();
            } else {
                return Promise.reject(response.statusText);
            }
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
