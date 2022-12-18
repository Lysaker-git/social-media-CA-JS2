/**
 * Function that creates the profile HTML. 
 * @param {object} container Container like a <div></div>
 * @param {object} values Content object that passes Banner, Name, Avatar and email.
 * @returns container with HTML for profile. 
 */

export function profileTemplate(container, values) {
    let banner = values.banner;
    let avatar = values.avatar;
    if (avatar === null) {
        avatar = '/assets/AVATAR-GENERIC.svg';
    };
    if (banner === null) {
        banner = '/assets/BANNER-GENERIC.svg';
    };

    return container.innerHTML = 
    `
    <div class="bannerAndAvatar">
        <img class="rounded img-fluid" style="overflow: hidden; width: 60%;" src="${banner}" alt="profile banner">
        <img class="img-fluid avatar" src="${avatar}" alt="avatar">
    </div>
    <div class="col-6">
        <h1 class="fs-2 my-3 text-light display-5">${values.name}'s profile</h1>
        <hr>
        <form class="form" id="logoutForm">
            <button class="btn btn-primary opacity-75" type="submit">Log out</button>
        </form>
    </div>
    `;
};