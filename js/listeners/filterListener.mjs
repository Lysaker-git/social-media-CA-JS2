import { getPosts } from "../posts/getPosts.mjs";
import { POSTS_COMPLETE_URL } from "../constants/url.mjs";
import { filteredPosts } from "../findcontent/filters.mjs";

export function filterListener() {
    const searchForm = document.querySelector("#searchBar");
    const searchValue = document.querySelector("#searchContent");
    
    console.log(searchForm);
    searchForm.addEventListener('input',(e) => {
        setTimeout(() => {
            const searchFormValue = searchValue.value;
            if (searchFormValue.length >= 4) {
                console.log(e.target.checked)
                // console.log(e)
                filteredPosts(POSTS_COMPLETE_URL, searchFormValue);
            } else if (searchFormValue.length === 0) {
                document.querySelector('.postContainer').innerHTML = "";
                getPosts(POSTS_COMPLETE_URL);
            }
        }, 2000);
    });
};