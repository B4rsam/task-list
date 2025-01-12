// @ts-ignore
import apiInstance from "./instance.ts";

function userLogin(userData: any) {
    return apiInstance.post(`auth/login`, userData);
}

function userSignUp(userData: any) {
    return apiInstance.post(`auth/signup`, userData);
}

function tokenAuth() {
    return apiInstance.get("auth");
}

export { userLogin, userSignUp, tokenAuth };
