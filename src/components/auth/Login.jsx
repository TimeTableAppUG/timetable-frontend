import { useState } from 'react';
import { Input } from '../Input'


export default function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

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
        <div>
            <form>
                {inputFields.map((item, id) => {
                    return (
                        <Input key={item.id}
                            {...item}
                            value={values[item.name]}
                            message={item.message}
                        />

                    )
                }
                )}

            </form>

        </div>
    )
}