import API from "../_api"
import {useJwt} from "react-jwt"

export const loginUser = async ({email, password}) => {
    try {
        const {data} = await API.post('/login', {email, password})
        return data
    } catch (error) {
        console.log(error);
        throw error
    }
}

export const logoutUser = async({token}) => {
    try {
        const {data} = await API.post('/logout', {token}, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        localStorage.removeItem('accessToken')
        return data
    } catch (error) {
        console.log(error);
        throw error
    }
}


export const userDecodeToken = (token) => {
    const {decodedToken, isExpired} = useJwt(token);

    try {
        if(isExpired) {
            return {
                success: false,
                message: "Token expired",
                data: null
            }
        }
        return {
            success: true,
            message: "Token valid",
            data: decodedToken
        }
    } catch (error) {
        return {
            success: false,
            message: error.message,
            data: null
        }
    }
}

export function getCurrentUser() {
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user) : null;
}

export function isAdmin() {
  const user = getCurrentUser();
  return user?.role === "admin";
}

export function isCustomer() {
  const user = getCurrentUser();
  return user?.role === "customer";
}
