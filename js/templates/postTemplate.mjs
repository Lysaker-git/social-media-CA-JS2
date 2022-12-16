/**
 * post template function taking container and content to create a basic post element. 
 * @param {object} container Container object like a <div></div>
 * @param {object} content - object with post Content. Uses ID, Title, Body and author.name
 * @returns container with HTML for post.
 */

export function postTemplate(container, content) {
    return container.innerHTML += 
    `
    <div id="${content.id}" class="row image-background">
        <h3>${content.title}</h3>
        <hr>
        <p>${content.body}</p>    
    </div>
    <div class="row details-container">
        <p>${content.author.name}</p>
    </div>
    `
}