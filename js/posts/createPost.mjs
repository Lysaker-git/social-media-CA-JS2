import { headerWithAuthAndBody } from "../api/headers.mjs";


/**
 * Sends post creation to API. Get passed url and postData from listener.
 * @param {string} url passing url for where you can send postData
 * @param {object} postData postData created with function headerWithAuthAndBody(method = 'POST', data)
 */
export async function createPosts(url, postData) {
    const response = await fetch(url, headerWithAuthAndBody('POST', postData));
    const json = await response.json();
    console.log(json)
    if (json.id) {
        console.log("success")
    } else {
        console.log("try again")
    }
}