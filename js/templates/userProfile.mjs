/**
 * Function that creates the profile HTML. 
 * @param {object} container Container like a <div></div>
 * @param {object} values Content object that passes Banner, Name, Avatar and email.
 * @returns container with HTML for profile. 
 */

export function profileTemplate(container, values) {
    return container.innerHTML = 
    `
    <img src="${values.banner}" alt="profile banner">
    <h1>Welcome to ${values.name}'s profile</h1>
    <img src="${values.avatar}" alt="avatar">
    <hr>
    <p>Email: ${values.email}</p>
    <form class="form" id="logoutForm">
        <button class="btn btn-primary" type="submit">Log out</button>
    </form>
    `;
}