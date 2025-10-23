import { useState } from "react";
import Input from "../Input";
import "../Input.css"



export function SignUp() {
  const [values, setValues] = useState({
    idNumber: "",
    firstName: "",
    lastName: "",
    email:"",
    password: ""
    
  })

  const inputs= [
    {
      id:1,
      type:"text",
      name: "idNumber",
      placeholder: "11223344",
      label: "ID Number"
    },
    {
      id:2,
      type:"text",
      name: "firstName",
      placeholder: "Jane",
      label: "First Name"
    },
        {
      id:3,
      type:"text",
      name: "lastName",
      placeholder: "Doe",
      label: "Last Name"
    },
        {
      id:4,
      type:"email",
      name: "email",
      placeholder: "example@school.edu",
      label: "Email"
    },
        {
      id:5,
      type:"password",
      name: "password",
      placeholder: "*********",
      label: "Password"
    }
  ]

  const handleSubmit =(event) =>event.preventDefault()
  const onChange= (event) => {
    setValues({...values, [event.target.name]: event.target.value })
  }

console.log(values)
  return (
    <div className="grid items-center justify-center text-center">
      <h1 className="mb-[5%] mt-[10%] "> Sign up </h1>

      <form onSubmit={handleSubmit}>
      
        {inputs.map((input) => (
          <Input
           key = {input.id}
           {...input}
           value = {values[input.name]} 
           onChange ={onChange}
           />
        ))}
        <button className ="text-center bg-[linear-gradient(to_right,_#667eea,_#764ba2)] text-white mb-[20px] rounded-[8px] border-[solid] border-[1px] h-[44px] w-[400px]"onSubmit = {handleSubmit}> Sign Up </button>
      </form>
    </div>
  );
}
