import axios from "axios";

const AUTH_API_BASE_URL = "https://todo-spring-env.eba-3atqpz9u.ap-southeast-2.elasticbeanstalk.com/api/v1/auth";

export const registerAPICall = (newUser) => axios.post(AUTH_API_BASE_URL + "/register", newUser);
export const loginAPICall = (usernameOrEmail, password) => axios.post(AUTH_API_BASE_URL + "/login", {
    usernameOrEmail, password
});
export const storeToken = (token) => localStorage.setItem("token", token);
export const getToken = () => localStorage.getItem("token");
export const savedLoggedInUser = (username, role) => {
    sessionStorage.setItem("authenticatedUser", username);
    sessionStorage.setItem("role", role);
}
export const isUserLoggedIn = () => {
    const username = sessionStorage.getItem("authenticatedUser");
    return username != null;
}
export const getLoggedInUser = () => sessionStorage.getItem("authenticatedUser");
export const logout = () => {
    localStorage.clear();
    sessionStorage.clear();
}
export const isAdminUser = () => {
    let role = sessionStorage.getItem("role");
    return role !== null && role === "ROLE_ADMIN";
}
