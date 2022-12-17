import { headerWithAuth } from "../api/headers.mjs";
import { logoutListener } from "../listeners/logoutListener.mjs";
import { profileTemplate } from "../templates/index.mjs";


/**
 * Function to fetch profile of logged in user. Passes to function profileData(data, document)
 * This is to access document element inside the creation of profileHTML - I wanted to try different aproaches to creating HTML. 
 * @param {string} url 
 */
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

/**
 * Getting passed profile and document to create the HTML for profile. Passes created elements with profile to the profileTemplate then appends it on the wrapper parent. 
 * @param {object} profile User-profile object
 * @param {document} doc document so i can access document.createElement and document.querySelector
 */
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
    logoutListener();

};


