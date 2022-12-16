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