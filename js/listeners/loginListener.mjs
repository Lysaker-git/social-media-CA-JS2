import { LOGIN_COMPLETE_URL } from "../constants/url.mjs";
import { loginUser } from "../users/index.mjs";


/**
 * Listens to the Login form - passsing login-information to the loginUser() function
 * Creates user with mail and password with userData(mail, pass, optional: name)
 */
export function loginListener() {
    const form = document.querySelector("#log-in");
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const mail = document.querySelector(".loginEmail").value;
        const pass = document.querySelector(".loginPass").value;

        const user = {
            email: mail,
            password: pass,
        }

        loginUser(LOGIN_COMPLETE_URL, user);
    });
};