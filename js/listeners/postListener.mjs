import { POSTS_COMPLETE_URL, POSTS_CREATE_URL } from "../constants/url.mjs";
import { createSinglePost, deletePost, getPosts } from "../posts/index.mjs";
import { createPost } from "../posts/index.mjs";

/**
 * Listener to get Posts on the posts page. Runs the getPosts(url) function
 */
export function postListener() {
    getPosts(POSTS_COMPLETE_URL);

};

/**
 * Listener to the createPost Form. When form is submitted it will fire the events to create a post.
 */
export function createPostListener() {
    const formElement = document.querySelector('#createPostForm');
    formElement.addEventListener('submit', (e) => {
        e.preventDefault();
        const postTitle = document.querySelector('#formTitle');
        const postBody = document.querySelector('#formBody');

        const post = {
            title: postTitle.value,
            body: postBody.value,
        };
        createPost(POSTS_CREATE_URL, post, 'POST');
    });
};

/**
 * Listens to entrance into singlePostPage. 
 * Will return post based on param in URL.
 */

export function singlePostListener() {
    createSinglePost(POSTS_CREATE_URL);
}

/**
 * Will listen to the delete button and modal form. Then pass it to the 
 * deletePost(id, url) function for deletion
 * @param {number} id The ID of the post that will be deleted
 * @param {string} url The url string to delete post. 
 */
export function deletePostListener(id, url) {
    const deleteForm = document.querySelector('#formDelete');
    deleteForm.addEventListener('submit', (e) => {
        e.preventDefault();
        deletePost(id, url);
    });
};

/**
 * Will pass updated values to the edit post API.
 * Then will update through createPost(url, post, method) where method is 'PUT'
 * @param {number} id the ID of the post that will be edited
 * @param {string} url The url for editing post. 
 */
export function editPostListener(id, url) {
    const editForm = document.querySelector('#formEdit');
    console.log(editForm);
    editForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const Title = editForm.formTitle;
        const Body = editForm.formBody;
        const updateUrl = `${url}/${id}`;

        const newPost = {
            title: Title.value,
            body: Body.value,
        }
        createPost(updateUrl, newPost, 'PUT');

    });
};