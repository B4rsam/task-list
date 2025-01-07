import apiInstance from "./instance.js";

function userLogin(userData: any) {
    return apiInstance.post(`auth/login`, userData, { withCredentials: true });
}

function userSignUp(userData: any) {
    return apiInstance.post(`auth/signup`, userData);
}

function tokenAuth() {
    return apiInstance.get("auth", { withCredentials: true });
}

export { userLogin, userSignUp, tokenAuth };
