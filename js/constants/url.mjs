const API_BASE_URL = "https://nf-api.onrender.com";
const LOGIN_ENDPOINT = "/api/v1/social/auth/login";
const REG_ENDPOINT = "/api/v1/social/auth/register";
const PROFILE_ENDPOINT = "/api/v1/social/profiles";
const POSTS_ENDPOINT = "/api/v1/social/posts?_author=true";
const POSTS_CREATE_ENDPOINT = "/api/v1/social/posts";

export const LOGIN_COMPLETE_URL = API_BASE_URL + LOGIN_ENDPOINT;
export const REG_COMPLETE_URL = API_BASE_URL + REG_ENDPOINT;
export const PROFILE_COMPLETE_URL = API_BASE_URL + PROFILE_ENDPOINT;
export const POSTS_COMPLETE_URL = API_BASE_URL + POSTS_ENDPOINT;
export const POSTS_CREATE_URL = API_BASE_URL + POSTS_CREATE_ENDPOINT;