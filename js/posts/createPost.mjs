import { headerWithAuthAndBody } from "../api/headers.mjs";


/**
 * Sends post creation to API. Get passed url and postData from listener.
 * @param {string} url passing url for where you can send postData
 * @param {object} postData postData created with function headerWithAuthAndBody(method = 'POST', data)
 */
export async function createPost(url, postData, method) {
    console.log(url, postData);
    const response = await fetch(url, headerWithAuthAndBody(method, postData));
    const json = await response.json();

    if (response.ok) {        
        window.location.assign(`/post.html?id=${json.id}`);
    };
};