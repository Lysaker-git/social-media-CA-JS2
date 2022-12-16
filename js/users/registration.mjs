import { LOGIN_COMPLETE_URL } from "../constants/url.mjs";
import { headerWithBodyNoAuth } from "../api/index.mjs";
import { loginUser } from "./login.mjs";

export async function registerUser(url, user) {
  try {
    const response = await fetch(url, headerWithBodyNoAuth('POST', user));
    const json = await response.json();
    const id = json.id; 
    if(id) {
        const userLogin = {
            email: user.email,
            password: user.password,
        };
        loginUser(LOGIN_COMPLETE_URL, userLogin);
    } else {
        const { errors } = json;
        let message = ""
        errors.forEach((error) => {
            console.log(error.message);
            message += error.message + " "
        })
        const alertBox = document.querySelector('.alert-box');
        alertBox.innerHTML = `<p>${message}</p>`
    }
    console.log(json);
    return json;
  } catch (error) {
    console.log(error);
  }
};