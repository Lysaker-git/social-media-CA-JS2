export function profileTemplate(container, values) {
    return container.innerHTML = 
    `
    <img src="${values.banner}" alt="profile banner">
    <h1>Welcome to ${values.name}'s profile</h1>
    <img src="${values.avatar}" alt="avatar">
    <hr>
    <p>Email: ${values.email}</p>
    `;
}