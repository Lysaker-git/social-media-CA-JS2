/**
 * post template function taking container and content to create a basic post element. 
 * @param {object} container Container object like a <div></div>
 * @param {object} content - object with post Content. Uses ID, Title, Body and author.name
 * @returns container with HTML for post.
 */

export function postTemplate(container, content) {
    container.innerHTML += 
    `
    <div id="${content.id}" class="row image-background p-2 my-5">
        <h3>${content.title}</h3>
        <hr>
        <p>${content.body}</p>    
    </div>
    <hr>
    <div class="row details-container p-2 d-flex">
        <p>${content.author.name}</p>
        <a href="profile.html?name=${content.author.name}">See profile</a>
        <a href="post.html?id=${content.id}">View post</a>
    </div>
    `
}