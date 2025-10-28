import { useState, useContext } from 'react';
import Input from '../Input';
import { AuthContext } from '../../contexts/authContext/authContext';



export default function Login() {



    const { loggedInUser, setLoggedInUser, handleLogin, isLoggedIn } = useContext(AuthContext)


    const [loginDetails, setLoginDetails] = useState({
        idNumber: '',
        password: ''
    })
    const handleLoginSubmit = (event) => {
        event.preventDefault();
        // setLoggedInUser(loginDetails)
        console.log("Logged in user from context: ", loggedInUser);
        handleLogin(loginDetails);
        console.log('This is the submit ', loginDetails)


        // redirect to lecturer or student dashboard after authentication using isloggedIn
    }

    function loginUpdate(event) {
        const { name, value } = event.target
        setLoginDetails((previousDetails) => ({ ...previousDetails, [name]: value }))
        console.log('This is the event.target', loginDetails)

    }




    const inputFields = [
        {
            id: "idNumber",
            type: "text",
            name: "idNumber",
            placeholder: "11223344",
            label: "ID Number",
            message: "Please enter a valid ID",
            required: true,
            pattern: "^[0-9]{5,}$",
        },
        {
            id: "password",
            type: "password",
            name: "password",
            placeholder: "*********",
            label: "Password",
            message: `Password must be a minimum of 8 characters in length with at least one number, one uppercase letter, and one symbol`,
            required: true,
            pattern: "^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,32}$",
        },

    ]

    return (
        <div className="grid items-center justify-center text-center">
            <h1 className="mb-[5%] mt-[10%]  text-center">Login </h1>
            <form onSubmit={handleLoginSubmit}>
                {inputFields.map((item, id) => {
                    return (
                        <Input key={item.id}
                            {...item}
                            value={loginDetails[item.name]}
                            onChange={loginUpdate}
                            message={item.message}
                        />

                    )
                }
                )}

                <button
                    className=" bg-[linear-gradient(to_right,_#667eea,_#764ba2)] text-white mb-[20px] rounded-[8px] border-[solid] border-[1px] h-[44px] w-[400px] items-center justify-center "
                    type="submit">
                    Login
                </button>

            </form>

        </div>
    )
}