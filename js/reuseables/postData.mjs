/**
 * Getting passed title and body of post and builds a postData to pass to API. 
 * @param {string} title Title of the post
 * @param {string} body Body or content of the post
 * @returns post variable that is OK for API
 */

export function postContent(postTitle, postBody) {
    return post = {
        title: postTitle,
        body: postBody,
    };
}