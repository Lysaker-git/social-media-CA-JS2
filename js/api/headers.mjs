/**
 * Returns the data that is sent to API with Authentication
 * @param {string} method Method to send i.e 'POST','GET','DELETE'...
 * @returns getData (Header-Data) that contains Authentication with local AccessToken
 */
export function headerWithAuth(method) {
    const token = localStorage.getItem('accesstoken');
    const getData = {
        method: method,
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
    };
    return getData;
}
/**
 * Returns the data that is sent to API without Authentication
 * @param {string} method Method to send i.e 'POST','GET','DELETE'...
 * @returns getData (Header-Data) with no Body or Authentication
 */
export function headerWithoutAuth(method) {
    const getData = {
        method: method,
        headers: {
            'Content-Type': 'application/json',
        },
    };
    return getData;
}
/**
 * Returns the data that is sent to API with Authentication and body
 * @param {string} method Method to send i.e 'POST','GET','DELETE'...
 * @param {object} body object that contains the items for API
 * @returns getData (Header-Data) with Authentication and Body
 */
export function headerWithAuthAndBody(method, body) {
    const token = localStorage.getItem('accesstoken');
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
/**
 * Returns the data that is sent to API with only Body
 * @param {string} method Method to send i.e 'POST','GET','DELETE'...
 * @param {object} body object that contains the items for API
 * @returns getData (Header-Data) with only Body
 */
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
