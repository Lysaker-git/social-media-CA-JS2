import { sortPosts } from "../findcontent/sorting.mjs";

export function sortingListener() {
    console.log('Listening');
    const selectOptions = document.querySelector('#sortOrder'); 

    selectOptions.addEventListener('input', (e) => {
        const value = selectOptions.options[selectOptions.selectedIndex].value
        sortPosts(value);
    })
}