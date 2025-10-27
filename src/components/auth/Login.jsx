import { useState } from 'react';
import Input from '../Input'


export default function Login() {


    const [loginDetails, setLoginDetails] = useState({
        email: '',
        password: ''
    })
    const handleLoginSubmit = (event) => {
        event.preventDefault();
        console.log('This is the submit ', loginDetails)
        // make use of auth context to send a post request to the backend and 
        // redirect to lecturer or student dashboard after authentication
    }

    function loginUpdate(event) {
        const { name, value } = event.target
        setLoginDetails((previousDetails) => ({ ...previousDetails, [name]: value }))
        console.log('This is the event.target', loginDetails)

    }



    const inputFields = [
        {
            id: "email",
            type: "email",
            name: "email",
            placeholder: "example@ug.edu.gh",
            label: "Email",
            message: "Please enter a valid email",
            required: true,
            pattern: "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$",
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
        <div className="grid items-center justify-center text-center p-10">
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