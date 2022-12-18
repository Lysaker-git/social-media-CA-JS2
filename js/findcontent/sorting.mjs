import { headerWithAuth } from "../api/headers.mjs";
import { POSTS_CREATE_URL } from "../constants/url.mjs";
import { postTemplate } from "../templates/postTemplate.mjs";

export async function sortPosts (option) {
    const url = POSTS_CREATE_URL;
    const response = await fetch(`${url}?sort=created&sortOrder=desc&_author=true`, headerWithAuth('GET'));
    // console.log(headerWithAuth('GET'))
    const json = await response.json();
    let sorted = '';
    switch(option) {
        case 't-Asc':
            sorted = json.sort(function(a, b) {
                if (a.title.toLowerCase() < b.title.toLowerCase()) return -1;
                if (a.title.toLowerCase() > b.title.toLowerCase()) return 1;
                return 0;
            });
            break;
        case 't-Desc':
            sorted = json.sort(function(a, b) {
                if (a.title.toLowerCase() < b.title.toLowerCase()) return 1;
                if (a.title.toLowerCase() > b.title.toLowerCase()) return -1;
                return 0;
            });
            break;
        case 'd-Asc':
            sorted = json.sort(function(a, b) {
                if (a.created < b.created) return -1;
                if (a.created > b.created) return 1;
                return 0;
            });
            break;
        case 'd-Desc': 
            sorted = json.sort(function(a, b) {
                if (a.created < b.created) return 1;
                if (a.created > b.created) return -1;
                return 0;
            });
            break;
        case 'id-Asc': 
            sorted = json.sort(function(a, b) {
                if (a.id < b.id) return -1;
                if (a.id > b.id) return 1;
                return 0;
            });
            break;
        case 'id-Desc':
            sorted = json.sort(function(a, b) {
                if (a.id < b.id) return 1;
                if (a.id > b.id) return -1;
                return 0;
            });
            break;

    }
    console.log(sorted)
    const container = document.querySelector('.postContainer');
    container.innerHTML = '';
    sorted.forEach((content) => {
        postTemplate(container, content);
    });
    // SORTED BASED ON TITLE ASCENDING
    // const sorted = json.sort(function(a, b) {
    //     if (a.title.toLowerCase() < b.title.toLowerCase()) return -1;
    //     if (a.title.toLowerCase() > b.title.toLowerCase()) return 1;
    //     return 0;
    // });
    // console.log(sorted); 
    // SORTED DESCENDING
    // const sortedTwo = json.sort(function(a, b) {
    //     if (a.title.toLowerCase() < b.title.toLowerCase()) return 1;
    //     if (a.title.toLowerCase() > b.title.toLowerCase()) return -1;
    //     return 0;
    // });
    // console.log(sortedTwo); 
    
}