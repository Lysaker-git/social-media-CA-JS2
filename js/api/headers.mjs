export function headerWithAuth(method) {
    const token = localStorage.getItem('accessToken');
    const getData = {
        method: method,
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
    };
    return getData;
}
export function headerWithoutAuth(method) {
    const getData = {
        method: method,
        headers: {
            'Content-Type': 'application/json',
        },
    };
    return getData;
}
export function headerWithAuthAndBody(method, body) {
    const token = localStorage.getItem('accessToken');
    const getData = {
        method: method,
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(body),
    };
    return getData;
}
export function headerWithBodyNoAuth(method, body) {
    const getData = {
        method: method,
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    };
    return getData;
}
