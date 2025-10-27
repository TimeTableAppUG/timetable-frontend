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
            localStorage.setItem('access_token', response.token)
            localStorage.setItem('refresh_token', response.token)
            console.log("Logged In response: ", response)
        } catch (error) {
            console.log('Error: ', error)
        }
    }

    const handleSignUp = async () => {
        try {
            const response = await api.post('/signup', signedUpUser)
            localStorage.setItem('access_token', response.token)
            localStorage.setItem('refresh_token', response.token)
            console.log("Signed up user response: ", response)
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
        localStorage.clear('access_token')
        localStorage.clear('refresh_token')
    }


    return (
        <></>
    )
}