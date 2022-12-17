

export function logoutListener() {
    const logoutForm = document.querySelector('#logoutForm')
    logoutForm.addEventListener('submit', (e) => {
        e.preventDefault();

        localStorage.clear();
        window.location.assign('/index.html');
    })
}