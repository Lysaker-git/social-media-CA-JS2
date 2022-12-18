import { LOGIN_COMPLETE_URL } from "../constants/url.mjs";
import { headerWithBodyNoAuth } from "../api/index.mjs";
import { loginUser } from "./login.mjs";

/**
 * function to register user and then log them into application. 
 * @param {string} url URL to register user
 * @param {object} usrData user object to register user - and if user is registered logs the user in.
 * @returns json object
 */
export async function registerUser(url, user) {
  try {
    const response = await fetch(url, headerWithBodyNoAuth('POST', user));
    const json = await response.json();
    const id = json.id; 
    if(id) {
        loginUser(LOGIN_COMPLETE_URL, user);
    } else {
        const { errors } = json;
        let message = "";
        errors.forEach((error) => {
            console.log(error.message);
            message += error.message + " "
        });
        const alertBox = document.querySelector('.alert-box');
        alertBox.innerHTML = `<p>${message}</p>`;
    }
    console.log(json);
    return json;
  } catch (error) {
    console.log(error);
  };
};