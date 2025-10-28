import { useState, useEffect, useRef } from 'react';
import { AuthContext } from './authContext';
import axios from 'axios';
import { useNavigate } from "react-router";


export default function AuthProvider({ children }) {
    const BASEURL = 'http://localhost:5000/api/auth'
    let navigate = useNavigate();

    const [authState, setAuthState] = useState({
        accessToken: null,
        refreshToken: null
    })

    // authRef = useRef(authState)
    // authRef.current = authState

    const api = useRef(
        axios.create({
            baseURL: 'http://localhost:5000/api/auth',
        })).current;

    useEffect(() => {


        api.interceptors.request.use(
            (config) => {
                if (authState.accessToken) {
                    config.headers['Authorization'] = `Bearer ${authState.accessToken}`
                }
                return config
            },
            (error) => {
                console.log('Interceptor error: ', error)
                return Promise.reject(error)
            }
        );

        api.interceptors.response.use(
            (response) => {
                return response;
            },
            async (error) => {
                const originalRequest = error.config;
                if (error.response.status === 401 && !originalRequest._retry) {
                    originalRequest._retry = true
                    const response = await axios.post(`${BASEURL}/refresh-token`, {
                        refreshToken: authState.refreshToken
                    });
                    setAuthState({
                        ...authState,
                        accessToken: response.data.accessToken,
                        // refreshToken:response.data.refreshToken IF NEW REFRESH TOKEN IS SENT
                    })

                    originalRequest.headers['Authorization'] = `Bearer ${response.data.accessToken}`
                    return api(originalRequest)

                }
                console.log('Response refreshtoken error: ', error)
                return Promise.reject(error)
            }
        );

        setAuthState((previousState) => ({
            ...previousState,
            api,
        }))

    }, [])


    const [signedUpUser, setSignedUpUser] = useState({
        idNumber: "",
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        role: "",
        department: "",
    })

    const [loggedInUser, setLoggedInUser] = useState({
        idNumber: "",
        password: "",
    })

    const handleLogin = async () => {
        try {
            const response = await api.post('/login', loggedInUser)
            setAuthState({
                accessToken: response.data.token,
                refreshToken: response.data.refreshToken
            })
            console.log("Logged In response: ", response.data, 'and the set state is', authState);
            navigate('/dummy-dashboard')
        } catch (error) {
            console.log('Error: ', error)
        }
    }

    const handleSignUp = async () => {
        try {
            const response = await api.post('/register', signedUpUser)
            setAuthState({
                accessToken: response.data.token,
                refreshToken: response.data.refreshToken
            })
            console.log("Signed up user response: ", response.data, 'and the set state is', authState)
            navigate('/dummy-dashboard')
        } catch (error) {
            console.log('sign up error: ', error)

        }
    }

    const redirectToDashboard = async () => {
        try {
            const response = await api.post('/dashboard', signedUpUser)
            console.log("It actually worked", response.data)
        } catch (error) {
            console.log('sign up error: ', error)

        }
    }

    const isLoggedIn = () => !!authState.accessToken;
    const logOut = () => {

        setAuthState({
            accessToken: '',
            refreshToken: ''
        })

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