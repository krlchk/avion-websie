import { Link, useNavigate } from "react-router-dom";
import SignupValidation from "./Validation/SignupValidation";
import { useState } from "react";
import axios from "axios";

export function SignUp() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleInput = (e) => {
    setValues((prevValue) => ({
      ...prevValue,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = SignupValidation(values);
    setErrors(validationErrors);
    if (errors.name === "" && errors.email === "" && errors.password === "") {
      axios
        .post("http://localhost:5001/api/user", values)
        .then((res) => {
          console.log(res);
          
          navigate("/login");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <div className="mx-auto flex h-[100vh] items-center justify-center bg-gradient-to-r from-orange-100 to-yellow-600">
      <div className="flex h-[70vh] w-full items-center justify-center bg-[url(/sign-in.png)] bg-cover bg-center p-3">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-2 rounded-xl bg-orange-200 p-10 font-DMSans text-lg font-semibold text-white mobile:p-5 mobile:text-base xs:p-3"
          action=""
        >
          <h2 className="text-center text-2xl">Sign-Up</h2>
          <div className="flex w-full flex-col">
            <label htmlFor="name">Name:</label>
            <input
              onChange={handleInput}
              className="rounded-md bg-orange-300 p-2 placeholder:font-light placeholder:text-orange-500 mobile:ml-0"
              type="text"
              name="name"
              placeholder="Enter Name"
            />
            {errors.name && <span className="text-red-700">{errors.name}</span>}
          </div>
          <div className="flex w-full flex-col">
            <label htmlFor="email">Email:</label>
            <input
              onChange={handleInput}
              className="rounded-md bg-orange-300 p-2 placeholder:font-light placeholder:text-orange-500 mobile:ml-0"
              type="email"
              name="email"
              placeholder="Enter Email"
            />
            {errors.email && (
              <span className="text-red-700">{errors.email}</span>
            )}
          </div>
          <div className="flex w-full flex-col">
            <label htmlFor="password">Password:</label>
            <input
              onChange={handleInput}
              className="rounded-md bg-orange-300 p-2 placeholder:font-light placeholder:text-orange-500 mobile:ml-0 mobile:mt-2"
              type="password"
              name="password"
              placeholder="Enter Password"
            />
            {errors.password && (
              <span className="text-red-700">{errors.password}</span>
            )}
          </div>
          <button
            type="submit"
            className="mt-3 w-full rounded-md bg-orange-300 p-2 transition-colors hover:bg-orange-400"
          >
            Sign up
          </button>
          <p className="mt-2">
            You are agree to our{" "}
            <Link
              to="https://react.dev/"
              className="cursor-pointer underline transition-colors hover:text-orange-500"
            >
              terms
            </Link>{" "}
            and{" "}
            <Link
              to="https://react.dev/"
              className="cursor-pointer underline transition-colors hover:text-orange-500"
            >
              policies
            </Link>{" "}
          </p>
          <Link
            to="/login"
            className="w-full rounded-md bg-orange-500 p-2 text-center transition-colors hover:bg-orange-700"
          >
            Login
          </Link>
        </form>
      </div>
    </div>
  );
}
