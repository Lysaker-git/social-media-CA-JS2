import { headerWithAuth } from "../api/headers.mjs";
import { postTemplate } from "../templates/postTemplate.mjs";


export async function filteredPosts (url, term) {
    const response = await fetch(url, headerWithAuth('GET'))
    const json = await response.json();
    const properTerm = term.toLowerCase();

    const filtered = json.filter(post => {

        const title = post.title.toLowerCase();
        let body = "";
        if (post.body) {
            body = post.body.toLowerCase();
        }
        return title.includes(properTerm) || body.includes(properTerm);
    });


    const postContainer = document.querySelector('.postContainer');
    postContainer.innerHTML = "";

    filtered.forEach((post) => {
        postTemplate(postContainer, post);
    })
}