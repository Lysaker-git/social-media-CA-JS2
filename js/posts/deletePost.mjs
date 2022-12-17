import { headerWithAuth } from "../api/headers.mjs";

export async function deletePost(id, url) {
    console.log('exec')
    const postUrl = `${url}/${id}`;
    console.log(postUrl)
    const response = await fetch(postUrl, headerWithAuth('DELETE'));
    const json = await response.json();
    console.log(json);
    window.location.assign("/posts.html");
};