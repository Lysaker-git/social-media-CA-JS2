import { headerWithAuthAndBody } from "../api/headers.mjs";

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