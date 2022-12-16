import { whatPage } from "../main.mjs"

export function editTemplate (container) {
    let editVar = "";
    if (whatPage.includes('posts')) {
        editVar = 'post';
    } else if (whatPage.includes('profile')) {
        editVar = 'Profile';
    };
    
    return container.innerHTML += `
    <div>
        <p>Edit ${editVar}</p>
        <div class="editContainer"></div>
    </div>
    `
}