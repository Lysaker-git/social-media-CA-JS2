import { LOGIN_COMPLETE_URL } from "../constants/url.mjs";
import { loginUser } from "../users/index.mjs";

export function loginListener() {
    const form = document.querySelector("#log-in");
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const loginEmail = document.querySelector(".loginEmail");
        const loginPass = document.querySelector(".loginPass");
    
        const userLogin = {
            email: loginEmail.value,
            password: loginPass.value,
          };
        loginUser(LOGIN_COMPLETE_URL, userLogin);
    });
};