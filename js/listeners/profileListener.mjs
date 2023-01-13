import { fetchProfile } from "../profile/index.mjs";
import { PROFILE_COMPLETE_URL } from "../constants/url.mjs";

/**
 * Listener to the profile page. Runs the fetchProfile(url) function with URL.
 */
export function createProfileListener() {
    fetchProfile(PROFILE_COMPLETE_URL);
}; 