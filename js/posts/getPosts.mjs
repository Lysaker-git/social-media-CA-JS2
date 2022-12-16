import { editTemplate, headerWithAuth } from "../main.mjs";
import { postTemplate } from "../templates/postTemplate.mjs";

export async function getPosts(url) {
    try {
        console.log(url)
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