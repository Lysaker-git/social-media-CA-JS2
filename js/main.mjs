import * as listeners from "./listeners/index.mjs";

/* 
RUNNING ON EVERY PAGE - AND RELEASES THE CORRECT LISTENERS
*/

export const whatPage = location.pathname;

export function returnLoc(page) {
    return whatPage.toLowerCase().includes(page);
};
switch (true) {
    case returnLoc('posts'):
        listeners.createPostListener();
        listeners.postListener();
        listeners.filterListener();
        listeners.sortingListener();
        break;
    case returnLoc('profile'):
        listeners.createProfileListener();
        break;
    case returnLoc('sing-up'):
        listeners.registerListener();
        break;
    case returnLoc('index'):
        listeners.loginListener();
        break;
    default: 
        listeners.singlePostListener();
        break;
};