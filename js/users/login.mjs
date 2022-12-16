import { headerWithBodyNoAuth } from "../api/index.mjs";

/**
 * function to log in user into application with URL and user data.
 * @param {string} url URL for logging in user through API.
 * @param {object} user user object that gets passed to the headerWithBodyNoAuth('POST', user) function.
 * @link if user is logged in will navigate to profile page. 
 */
export async function loginUser(url, user) {
    try {
        if (user.name) {
            delete user.name;
        }
        const response = await fetch(url, headerWithBodyNoAuth('POST', user));
        const json = await response.json();
        console.log(json);

        const accesstoken = json.accessToken;
        const name = json.name;

        localStorage.setItem('accesstoken', accesstoken);
        localStorage.setItem('name', name)

        if (accesstoken) {
            location.assign('/profile.html');
        } else {
            const { errors } = json;
            errors.forEach((error) => {
                console.log(error);
            });
        }

    } catch (e) {
        console.log(e)
    }
}