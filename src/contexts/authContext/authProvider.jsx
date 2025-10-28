import { useState, useEffect } from 'react';
import { AuthContext } from './authContext';
import axios from 'axios';



export default function AuthProvider({ children }) {
    const api = axios.create({
        baseURL: '',
        withCredentials: true
    })

    const [signedUpUser, setSignedUpUser] = useState({
        idNumber: "",
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        Role: "",
        Department: "",
    })

    const [loggedInUser, setLoggedInUser] = useState({
        email: "",
        password: "",
    })

    const handleLogin = async () => {
        try {
            const response = await api.post('/login', loggedInUser)
            localStorage.setItem('access_token', response.data.access_token)
            localStorage.setItem('refresh_token', response.data.refresh_token)
            console.log("Logged In response: ", response.data)
        } catch (error) {
            console.log('Error: ', error)
        }
    }

    const handleSignUp = async () => {
        try {
            const response = await api.post('/signup', signedUpUser)
            localStorage.setItem('access_token', response.data.access_token)
            localStorage.setItem('refresh_token', response.data.refresh_token)
            console.log("Signed up user response: ", response.data)
        } catch (error) {
            console.log('sign up error: ', error)

        }
    }

    const isLoggedIn = () => {
        if (localStorage.getItem('access_token')) {
            return true
        }
        return false

    }
    const logOut = () => {
        localStorage.removeItem('access_token')
        localStorage.removeItem('refresh_token')
    }


    const contextValues = {
        signedUpUser,
        loggedInUser,
        setSignedUpUser,
        setLoggedInUser,
        handleLogin,
        handleSignUp,
        isLoggedIn,
        logOut

    }


    return (
        <AuthContext.Provider value={contextValues}>
            {children}
        </AuthContext.Provider>
    )
}