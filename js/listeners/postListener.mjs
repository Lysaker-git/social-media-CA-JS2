import { headerWithAuth } from "../api/headers.mjs";
import { POSTS_COMPLETE_URL, POSTS_CREATE_URL } from "../constants/url.mjs";
import { createSinglePost, deletePost, getPosts } from "../posts/index.mjs";
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
        const postTitle = document.querySelector('#formTitle');
        const postBody = document.querySelector('#formBody');

        const post = {
            title: postTitle.value,
            body: postBody.value,
        };
        createPosts(POSTS_CREATE_URL, post);
        postTitle.reset();
        postBody.reset();
        location.reload();
    })
}

export function singlePostListener() {
    createSinglePost(POSTS_CREATE_URL);
}
export async function deletePostListener(url) {
    const deleteBtn = document.querySelector('.delete-btn');

    deletePost(deleteBtn);

}