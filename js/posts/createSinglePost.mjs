import { headerWithAuth } from "../api/headers.mjs";
import { deletePostListener, editPostListener } from "../listeners/postListener.mjs";
import { singlePostTemplate } from "../templates/singlePostTemplate.mjs";

// Chose single post edit as a way to interact with delete and edit
// This so i could access the ID of the post through params. 

/**
 * Creates a single post on page - that if owner can edit and delete. 
 * @param {string} url url to be passed to create a single post on page. 
 */
export async function createSinglePost(url) {
    const container = document.querySelector('.singlePostContainer');
    const queryString = document.location.search;
    const parameters = new URLSearchParams(queryString);
    const id = parameters.get("id");
    
    const fullUrl = `${url}/${id}?_author=true`;

    const response = await fetch(fullUrl, headerWithAuth('GET'));
    const json = await response.json();

    singlePostTemplate(json, container);
    editPostListener(id, url);
    deletePostListener(id, url);
}