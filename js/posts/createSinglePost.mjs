import { headerWithAuth } from "../api/headers.mjs";
import { deletePostListener, editPostListener } from "../listeners/postListener.mjs";
import { singlePostTemplate } from "../templates/singlePostTemplate.mjs";


export async function createSinglePost(url) {
    const container = document.querySelector('.singlePostContainer');
    const queryString = document.location.search;
    const parameters = new URLSearchParams(queryString);
    const id = parameters.get("id");
    
    const fullUrl = `${url}/${id}?_author=true`

    const response = await fetch(fullUrl, headerWithAuth('GET'));
    const json = await response.json();

    singlePostTemplate(json, container);
    editPostListener(id, url);
    deletePostListener(id, url);
}