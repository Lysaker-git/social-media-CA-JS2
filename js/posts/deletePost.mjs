import { headerWithAuth } from "../api/headers.mjs";

export async function deletePost(id, url) {
    const postUrl = `${url}/${id}`;
    const response = await fetch(postUrl, headerWithAuth('DELETE'));
    const json = await response.json();
    window.location.assign("/posts.html");
};