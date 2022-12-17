import { headerWithAuth } from "../api/headers.mjs";
import { postTemplate } from "../templates/postTemplate.mjs";


export async function filteredPosts (url, term) {
    const response = await fetch(url, headerWithAuth('GET'))
    const json = await response.json();
    const properTerm = term.toLowerCase();

    const filtered = json.filter(post => {

        let id = post.id.toString();
        const author = post.author.name.toLowerCase();
        const title = post.title.toLowerCase();
        let body = "";
        if (post.body) {
            body = post.body.toLowerCase();
        }
        return title.includes(properTerm) || body.includes(properTerm) || author.includes(properTerm) || id.includes(properTerm);
    });


    const postContainer = document.querySelector('.postContainer');
    postContainer.innerHTML = "";

    filtered.forEach((post) => {
        postTemplate(postContainer, post);
    })
}