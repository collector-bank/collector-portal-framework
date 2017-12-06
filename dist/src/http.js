var request = function (method) { return function (endpoint, payload) {
    var headers = new Headers({
        'Content-Type': 'application/json',
        Accept: 'application/json',
    });
    var options = {
        headers: headers,
        method: method,
        credentials: 'same-origin',
    };
    if (payload) {
        options.body = JSON.stringify(payload);
    }
    return window.fetch(endpoint, options)
        .then(function (response) {
        if (response.status === 204) {
            return;
        }
        else if (response.status >= 200 && response.status < 300) {
            return response.json();
        }
        else {
            return Promise.reject(response.statusText);
        }
    })
        .catch(function (err) {
        console.error(err);
        throw err;
    });
}; };
export var get = request('GET');
export var post = request('POST');
export var put = request('PUT');
export var del = request('DELETE');
//# sourceMappingURL=http.js.map