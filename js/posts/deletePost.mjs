import { headerWithAuth } from "../api/headers.mjs";


/**
 * Function to delete post when called by the listener. Then redirects to posts page.
 * @param {number} id the ID of the post that will be deleted.
 * @param {string} url The string for post deletion.
 */
export async function deletePost(id, url) {
    const postUrl = `${url}/${id}`;
    const response = await fetch(postUrl, headerWithAuth('DELETE'));
    const json = await response.json();
    window.location.assign("/posts.html");
};