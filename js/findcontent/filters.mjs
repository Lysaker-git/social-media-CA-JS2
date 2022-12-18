import { headerWithAuth } from "../api/headers.mjs";
import { postTemplate } from "../templates/postTemplate.mjs";


export async function filteredPosts (url, term) {
    const response = await fetch(url, headerWithAuth('GET'))
    const json = await response.json();
    const properTerm = term.toLowerCase();

    const contentCheck = document.querySelector('#checkboxContent');
    const authorCheck = document.querySelector('#checkboxAuthor');
    const idCheck = document.querySelector('#checkboxID');


    const filtered = json.filter(post => {

        let id = post.id.toString();
        let author = post.author.name.toLowerCase();
        let title = post.title.toLowerCase();
        let body = "";
        if (post.body) {
            body = post.body.toLowerCase();
        }
        if (!contentCheck.checked) {
            title = "";
            body = "";
        }
        if (!authorCheck.checked) {
            author = "";
        }
        if (!idCheck.checked) {
            id = "";
        }
        return title.includes(properTerm) || body.includes(properTerm) || author.includes(properTerm) || id.includes(properTerm);
    });


    const postContainer = document.querySelector('.postContainer');
    postContainer.innerHTML = "";

    filtered.forEach((post) => {
        postTemplate(postContainer, post);
    });
};


export async function filterUserPosts(url) {
    const queryString = document.location.search;
    const parameters = new URLSearchParams(queryString);
    const checkParam = Boolean(parameters.get('name'));
    let name = "";
    if (checkParam) {
        name = parameters.get("name");
    } else {
        name = localStorage.getItem('name');
    }
    const response = await fetch(url, headerWithAuth('GET'))
    const json = await response.json();
    const filteredPosts = json.filter(post => {
        const author = post.author.name.toLowerCase();
        const profileName = name.toLowerCase();
        
        return author.includes(profileName);
    });
    
    const postsContainer = document.querySelector('.profilePosts');
    filteredPosts.forEach((post) => {postTemplate(postsContainer, post)});
};