import { whatPage } from "../main.mjs";


/**
 * Function to create a HTML template for a single post - and edit/delete forms if author = logged in.
 * @param {object} content - json content of the post content. I.E title, body, author.name and id.
 * @param {object} container - container where the HTML will be rendered.
 * @returns HTML that will be placed inside container
 */
export function singlePostTemplate(content, container) {
    let editVar = "";
    if (whatPage.includes('post')) {
        editVar = 'post';
    } else if (whatPage.includes('profile')) {
        editVar = 'Profile';
    };
    console.log(content.author.name);
    const author = content.author.name;
    const loggedIN = localStorage.getItem('name');

    const startOfContainer = `<div class="container d-flex flex-column p-2">`;
    const bodyOfContainer = `
    <figure class="row">
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
            <p class="text-end p-1 text-light" ><small>ID: ${content.id}</small></p>
        </div>
    </div>
    `;
    let editBody = "";
    if (author === loggedIN) {
        editBody = `
        <div class="modal fade" id="editModal" aria-hidden="true" aria-labelledby="editModalLabel" tabindex="-1">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="editModalLabel">Edit ${editVar}</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <form action="" method="POST" id="formEdit" class="form modal-body">
                        <div class="mb-3">
                            <label for="formTitle" class="form-label">Title:</label>
                            <input type="text" class="form-control" id="formTitle" placeholder="" value="${content.title}">
                        </div>
                        <div class="mb-3">
                            <label for="formBody" class="form-label">Your Message:</label>
                            <textarea class="form-control" id="formBody" rows="3">${content.body}</textarea>
                        </div>
                        <div class="">
                        <button type="submit" class="btn btn-primary mb-3">Submit</button>
                    </div>
                </form>
                    <div class="modal-footer">
                        <button class="btn btn-primary" data-bs-target="#deleteModal" data-bs-toggle="modal">Delete</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal fade" id="deleteModal" aria-hidden="true" aria-labelledby="deleteModalLabel" tabindex="-1">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="deleteModalLabel">Are you sure?</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <p>This will delete the post...</p> 
                    </div>
                    <form action="" method="DELETE" id="formDelete" class="form modal-footer">
                        <button type="submit" class="btn btn-primary" aria-label="Delete">Delete</button>
                    </form>
                </div>
            </div>
        </div>
      <a class="btn btn-primary ms-auto bg-opacity-25 bg-primary bg-gradient" data-bs-toggle="modal" href="#editModal" role="button">Edit ${editVar}</a>
        `
    }
    const endOfContainer = `
        </div>
    `;
    return container.innerHTML = startOfContainer + bodyOfContainer + editBody + endOfContainer;
}