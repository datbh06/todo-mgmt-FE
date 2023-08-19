import axios from "axios";

const AUTH_API_BASE_URL = "http://localhost:8080/api/v1/auth";

export const registerAPICall = (newUser) => axios.post(AUTH_API_BASE_URL + "/register", newUser);

export const loginAPICall = (usernameOrEmail, password) => axios.post(AUTH_API_BASE_URL + "/login", {
    usernameOrEmail, password
});

export const storeToken = (token) => localStorage.setItem("token", token);

export const getToken = () => localStorage.getItem("token");

export const savedLoggedInUser = (username) => sessionStorage.setItem("authenticatedUser", username);

export const isUserLoggedIn = () => {
    const username = sessionStorage.getItem("authenticatedUser");
    return username != null;
}
export const getLoggedInUser = () => sessionStorage.getItem("authenticatedUser");
