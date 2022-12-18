
/**
 * Listens to the logout button on profile page
 * on submit will log user out and clear localStorage. 
 * Then move user to index.html
 */
export function logoutListener() {
    const logoutForm = document.querySelector('#logoutForm')
    logoutForm.addEventListener('submit', (e) => {
        e.preventDefault();

        localStorage.clear();
        window.location.assign('/index.html');
    });
};