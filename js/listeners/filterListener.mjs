import { getPosts } from "../posts/getPosts.mjs";
import { POSTS_COMPLETE_URL } from "../constants/url.mjs";
import { filteredPosts } from "../findcontent/filters.mjs";

/**
 * listens to changes in the searchBar and pass the value to filter functions. 
 * filteredPosts(url, search-term)
 * If nothing in search bar returns all posts. 
 */

export function filterListener() {
    const searchForm = document.querySelector("#searchBar");
    const searchValue = document.querySelector("#searchContent");
    
    searchForm.addEventListener('input',(e) => {
        setTimeout(() => {
            const searchFormValue = searchValue.value;
            if (searchFormValue.length >= 4) {
                filteredPosts(POSTS_COMPLETE_URL, searchFormValue);
            } else if (searchFormValue.length === 0) {
                document.querySelector('.postContainer').innerHTML = "";
                getPosts(POSTS_COMPLETE_URL);
            }
        }, 2000);
    });
};