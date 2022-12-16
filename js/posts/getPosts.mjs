import { headerWithAuth } from "../api/index.mjs";
import { postTemplate } from "../templates/postTemplate.mjs";
import { editTemplate } from "../templates/editTemplate.mjs";

export async function getPosts(url) {
    try {
        const loggedIn = localStorage.getItem('name')
        const response = await fetch(url, headerWithAuth('GET'));
        
        const json = await response.json();
        const postContainer = document.querySelector('.postContainer');
        json.forEach((content) => {

        postTemplate(postContainer, content)
        
        if (loggedIn === content.author.name) {
            editTemplate(postContainer);
        }
        });
    } catch (e) {
        console.log(e)
    }
}