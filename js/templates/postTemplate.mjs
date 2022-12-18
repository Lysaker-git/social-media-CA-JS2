/**
 * post template function taking container and content to create a basic post element. 
 * @param {object} container Container object like a <div></div>
 * @param {object} content - object with post Content. Uses ID, Title, Body and author.name
 * @returns container with HTML for post.
 */

export function postTemplate(container, content) {
    container.innerHTML += 
    `
    <hr>
    <div id="${content.id}" class=" image-background p-2">
    <figure>
        <h3 class="text-light display-6 fw-semibold text-capitalize">${content.title}</h3>
        <blockquote class="blockquote">
            <p class="text-light">${content.body}</p>
        </blockquote>
        <figcaption class="blockquote-footer text-light">
            ${content.author.name}
        </figcaption>
    </figure>
    <div class="details-container p-2 d-flex">
        <div class="d-flex ms-auto flex-column">
            <a  class="text-end p-1 text-info" href="profile.html?name=${content.author.name}">See profile</a>
            <a  class="text-end p-1 text-info" href="post.html?id=${content.id}">View post</a>
            <p class="text-end p-1 text-light" ><small>ID: ${content.id}</small></p>
        </div>
    </div>
    <hr>
        `
}