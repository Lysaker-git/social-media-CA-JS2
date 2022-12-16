import { fetchProfile } from "../profile/index.mjs";
import { PROFILE_COMPLETE_URL } from "../constants/url.mjs";

export function createProfileListener() {
    fetchProfile(PROFILE_COMPLETE_URL);
}; 