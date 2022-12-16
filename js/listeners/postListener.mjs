import { POSTS_COMPLETE_URL, POSTS_CREATE_URL } from "../constants/url.mjs";
import { getPosts } from "../posts/index.mjs";
import { createPosts } from "../posts/index.mjs";
import { postContent } from "../reuseables/postData.mjs";

/**
 * Listener to get Posts on the posts page. Runs the getPosts(url) function
 */
export function postListener() {
    getPosts(POSTS_COMPLETE_URL);
}

/**
 * Listener to the createPost Form. When form is submitted it will fire the events to create a post.
 */
export function createPostListener() {
    const formElement = document.querySelector('.form');
    formElement.addEventListener('submit', (e) => {
        e.preventDefault();
        const postTitle = document.querySelector('#formTitle').value;
        const postBody = document.querySelector('#formBody').value;

        postContent(postTitle,postBody);
        createPosts(POSTS_CREATE_URL, post);
        location.reload();
    })
}