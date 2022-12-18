import { whatPage } from "../main.mjs"

/**
 * Function to add a modal to the posts that are users. Required to edit the post. 
 * @param {object} container Container where the HTML are to be inserted with +=
 * @param {object} content Object containing contents of the post created. Uses: ID, Title and Body of content. 
 * @returns container with more HTML inside for editing Post 
 */
export function editTemplate (container, content) {
    let editVar = "";
    if (whatPage.includes('post')) {
        editVar = 'post';
    } else if (whatPage.includes('profile')) {
        editVar = 'Profile';
    };
    
    return container.innerHTML += `
    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modal${content.id}">
        Edit ${editVar}
    </button>
    
    <div class="modal fade" id="modal${content.id}" tabindex="-1" aria-labelledby="modal${content.id}Label" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
                <h3 class="modal-title fs-5" id="modal${content.id}Label">Edit Post</h3>
            </div>
            <form action="" method="POST" class="form modal-body">
                <div class="mb-3">
                    <label for="formTitle" class="form-label">Title:</label>
                    <input type="text" class="form-control" id="formTitle" value="${content.title}">
                </div>
                <div class="mb-3">
                    <label for="formBody" class="form-label">Your Message:</label>
                    <textarea class="form-control" id="formBody" rows="3">${content.body}</textarea>
                </div>
                <div class="">
                    <button type="button" class="btn btn-secondary mb-3" data-bs-dismiss="modal">Close</button>
                    <button type="submit" id="postData${content.id}" class="btn btn-primary mb-3">Submit</button>
                    <button type="button" class="delete-btn-${content.id} btn btn-info mb-3" data-bs-dismiss="modal">Delete</button>
                </div>
            </form>
            </div>
        </div>
    </div>
    

    `
};