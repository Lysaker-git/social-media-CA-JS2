import {API_BASE_URL} from "../url.mjs";

/**
 * This function will send the registration for new users to register an account.
 * @param {string} url 
 * @param {object} user  
 * @returns 
 */

async function registerUser(url, data) {
  try {
    const postData = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    };

    const response = await fetch(url, postData);
    console.log(response);
    const json = await response.json();
    console.log(json);
    return json;
  } catch (error) {
    console.log(error);
  }
}

const user = {
  name: '',
  email: '',
  password: '',
};

// registerUser(`${API_BASE_URL}/api/v1/social/auth/register`, user);