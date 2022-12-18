import { headerWithAuth } from "../api/headers.mjs";
import { POSTS_COMPLETE_URL } from "../constants/url.mjs";
import { filterUserPosts } from "../findcontent/filters.mjs";
import { logoutListener } from "../listeners/logoutListener.mjs";
import { profileTemplate } from "../templates/index.mjs";


/**
 * Function to fetch profile of logged in user. Passes to function profileData(data, document)
 * This is to access document element inside the creation of profileHTML - I wanted to try different aproaches to creating HTML. 
 * @param {string} url 
 */
export async function fetchProfile (url) {
    try {
        const queryString = document.location.search;
        const parameters = new URLSearchParams(queryString);
        const checkParam = Boolean(parameters.get('name'));
        let name = "";
        if (checkParam) {
            name = parameters.get("name");
        } else {
            name = localStorage.getItem('name');
        }
        const fullURL = `${url}/${name}`;
        const response = await fetch(fullURL, headerWithAuth('GET'));
        const json = await response.json();
        console.log(json)
        const doc = document
        profileData(json, doc);
        filterUserPosts(POSTS_COMPLETE_URL);

    } catch (e) {
        console.log(e);
    };
};

/**
 * Getting passed profile and document to create the HTML for profile. Passes created elements with profile to the profileTemplate then appends it on the wrapper parent. 
 * @param {object} profile User-profile object
 * @param {document} doc document so i can access document.createElement and document.querySelector
 */
function profileData (profile, doc) {

    const profileContainer = doc.querySelector('.profileContainer')
    const wrapper = doc.createElement('div');
    const followers = doc.createElement('section');
    wrapper.classList.add('row', 'rounded', 'p-4', 'shadow', 'bg-primary', 'bg-gradient', 'bg-opacity-25');
    followers.classList.add('container');

    followers.innerHTML = 
    `
    
    `
    profileTemplate(wrapper, profile);
    profileContainer.append(wrapper);
    profileContainer.parentNode.insertBefore(followers, profileContainer.nextSibling);
    logoutListener();

};