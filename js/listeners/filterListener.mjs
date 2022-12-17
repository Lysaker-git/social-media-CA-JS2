import { getPosts } from "../posts/getPosts.mjs";
import { POSTS_COMPLETE_URL } from "../constants/url.mjs";
import { filteredPosts } from "../findcontent/filters.mjs";

export function filterListener() {
    const searchForm = document.querySelector("#searchContent");
    
    console.log(searchForm);
    searchForm.addEventListener('input',(e) => {
        const searchFormValue = searchForm.value;
        if (searchFormValue.length >= 4) {
            filteredPosts(POSTS_COMPLETE_URL, searchFormValue);
        }
    })
}