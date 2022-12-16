/**
 * 
 * @param {string} mail - mail in string format for object
 * @param {string} pass - pass as string format for object
 * @param {string} [user] - OPTIONAL user as string format for object
 * @returns user variable to pass to API. 
 */

export function userData(mail, pass, user = false) {
    if (user) {
        return user = {
            name: user,
            email: mail,
            password: pass,
          };
    } else {
        return user = {
            email: mail,
            password: pass,
        }
    }
}