import { headerWithAuth } from "../api/headers.mjs";
import { profileTemplate } from "../templates/index.mjs";

export async function fetchProfile (url) {
    try {
        const name = localStorage.getItem('name');
        const fullURL = `${url}/${name}`;
        const response = await fetch(fullURL, headerWithAuth('GET'));
        const json = await response.json();
        const doc = document
        profileData(json, doc);
    } catch (e) {
        console.log(e);
    }
}
 
function profileData (profile, doc) {

    const profileContainer = doc.querySelector('.profileContainer')
    const wrapper = doc.createElement('div');
    const followers = doc.createElement('section');
    wrapper.classList.add('row');
    followers.classList.add('container');

    followers.innerHTML = 
    `
    
    `
    profileTemplate(wrapper, profile);
    profileContainer.append(wrapper);
    profileContainer.parentNode.insertBefore(followers, profileContainer.nextSibling);
};


