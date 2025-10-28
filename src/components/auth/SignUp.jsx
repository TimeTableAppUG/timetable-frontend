import { useState, useContext } from "react";
import Input from "../Input";
import Select from "../Select";
import { AuthContext } from '../../contexts/authContext/authContext'

export function SignUp() {
  const { signedUpUser, setSignedUpUser, handleSignUp, isLoggedIn } = useContext(AuthContext)
  // State object to hold all form input values
  const [values, setValues] = useState({
    idNumber: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "",
    department: "",
  });

  // function to determine maxlength for ID number based on selected role
  const getRole = () => {
    let maxlenght = 8;
    if (values.role === "lecturer") {
      maxlenght = 5;
    }
    return maxlenght;
  };

  // Array of attributes for input field
  const inputs = [
    {
      id: "idNumber",
      type: "text",
      name: "idNumber",
      placeholder: "11223344",
      label: "ID Number",
      message: "Please enter a valid ID",
      required: true,
      maxLength: getRole(),
      pattern: "^[0-9]{5,}$",
    },
    {
      id: "firstName",
      type: "text",
      name: "firstName",
      placeholder: "Jane",
      label: "First Name",
      message: "Please enter your first name",
      required: true,
      pattern: "^[A-Za-z]{3,16}$",
      pattern: "^[A-Za-z]{3,16}$",
    },
    {
      id: "lastName",
      type: "text",
      name: "lastName",
      placeholder: "Doe",
      label: "Last Name",
      message: "Please enter your last name",
      required: true,
      pattern: "^[A-Za-z]{3,12}$",
      pattern: "^[A-Za-z]{3,12}$",
    },
    {
      id: "email",
      type: "email",
      name: "email",
      placeholder: "example@school.edu",
      label: "Email",
      message: "Please enter a valid email",
      required: true,
      pattern: "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$",
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
      pattern: "^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,32}$",
    },
    {
      id: "confirmPassword",
      type: "password",
      name: "confirmPassword",
      placeholder: "*********",
      label: "Confirm Password",
      message: "The passwords don't match",
      required: true,
      pattern: values.password,
    },
  ];

  const handleSubmit = (event) => {
    event.preventDefault();

    // setSignedUpUser(values)
    console.log("Logged in user from context: ", values);

    handleSignUp(values);
    console.log('This is the submit ', values)

  }

  // tracks input changes for the input fields
  const onChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  return (
    <div className="grid items-center justify-center text-center">
      <h1 className="mb-[5%] mt-[10%] "> Sign up </h1>

      <form onSubmit={handleSubmit}>
        <Select
          id="role"
          placeholder="Select Role"
          optionValues={["lecturer", "student"]}
          onChange={onChange}
        />
        <Select
          id="Department"
          placeholder="Select Department"
          optionValues={["Department 1", "Department 2"]}
          onChange={onChange}
        />
        {inputs.map((input) => (
          <Input
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
            message={input.message}
          />
        ))}

        <button
          className="text-center my-[20px] bg-[linear-gradient(to_right,_#667eea,_#764ba2)] text-white mb-[20px] rounded-[8px] border-[solid] border-[1px] h-[44px] w-[400px]"
          type="submit"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}
