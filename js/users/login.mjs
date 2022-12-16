import { headerWithBodyNoAuth } from "../api/index.mjs";


export async function loginUser(url, user) {
    try {
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