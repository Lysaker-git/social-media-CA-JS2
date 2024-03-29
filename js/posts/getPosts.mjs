import { headerWithAuth } from "../api/index.mjs";
import { postTemplate } from "../templates/postTemplate.mjs";


/**
 * Function to get Posts from API. Checking posts against user logged in to see if they are the creator granting extra controls. Fetch with no auth and 'GET' method. 
 * @param {string} url 
 */
export async function getPosts(url) {
    try {
        const response = await fetch(url, headerWithAuth('GET'));
        const json = await response.json();
        const postContainer = document.querySelector('.postContainer');
        json.forEach((content) => {
            postTemplate(postContainer, content)
        });        
    } catch (e) {
        console.log(e);
    };
};