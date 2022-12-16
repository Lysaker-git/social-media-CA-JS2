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