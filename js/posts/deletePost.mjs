
export function deletePost(btn) {
        console.log("listener added")
        btn.addEventListener('submit', async (e) => {
            console.log(e)
            e.preventDefault();
            console.log('hi')
    
            deleteResponse = await fetch(url, headerWithAuth('DELETE'))
            console.log(deleteResponse);
            window.location.assign("/posts.html");
        });
};