import { REG_COMPLETE_URL } from "../constants/url.mjs";
import { registerUser } from "../users/registration.mjs";


/**
 * Listener to the register user page. Will pass user info to API with registerUser(url, user) function.
 * Creates user with mail and password with userData(mail, pass, optional: name)
 */
export function registerListener() {
    const regForm = document.querySelector("#sign-up");
    regForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.querySelector("#signupName").value;
        const mail = document.querySelector("#signupMail").value;
        const pass = document.querySelector("#signupPass").value;

        const user = {
            name: name,
            email: mail,
            password: pass,
        }        
        registerUser(REG_COMPLETE_URL, user);
    });
}