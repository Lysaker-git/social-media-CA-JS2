import { POSTS_COMPLETE_URL, POSTS_CREATE_URL } from "../constants/url.mjs";
import { getPosts } from "../posts/index.mjs";
import { createPosts } from "../posts/index.mjs";


export function postListener() {
    getPosts(POSTS_COMPLETE_URL);
}

export function createPostListener() {
    const formElement = document.querySelector('.form');
    formElement.addEventListener('submit', (e) => {
        e.preventDefault();
        const postTitle = document.querySelector('#formTitle').value;
        const postBody = document.querySelector('#formBody').value;

        const post = {
            title: postTitle,
            body: postBody,
        };

        createPosts(POSTS_CREATE_URL, post);
    })
}