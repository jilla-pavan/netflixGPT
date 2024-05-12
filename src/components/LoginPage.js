import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidation } from "../utils/validate";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";

function LoginPage() {
  const [isSignUpForm, setIsSignUpForm] = useState(false);
  const [validationMessage, setValidationMessage] = useState(null);
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () => {
    setIsSignUpForm(!isSignUpForm);
  };

  const handleButtonClick = () => {
    const messageAfterValidation = checkValidation(
      email.current.value,
      password.current.value
    );
    setValidationMessage(messageAfterValidation);
    if (!messageAfterValidation) {
      if (isSignUpForm) {
        createUserWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        )
          .then((userCredential) => {
            // Signed up
            const user = userCredential.user;

            setValidationMessage("you are succesfully registered");
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setValidationMessage(errorCode + " " + errorMessage);
          });
      } else {
        // it is a sign in form
        signInWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        )
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setValidationMessage(errorCode + " " + errorMessage);
          });
      }
    }
  };
  return (
    <div className="">
      <div className="absolute">
        <Header />
        <img
          className=""
          src="https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        />
      </div>
      <form
        onSubmit={(e) => {
          return e.preventDefault();
        }}
        className=" bg-black bg-opacity-80 w-3/12 absolute mx-auto right-0 left-0 my-40 p-10 rounded-lg text-white  "
      >
        {isSignUpForm ? (
          <h1 className=" font-bold text-3xl my-5">Sign Up</h1>
        ) : (
          <h1 className=" font-bold text-3xl my-5">Sign In</h1>
        )}

        {isSignUpForm && (
          <input
            ref={name}
            className="p-3 my-3 w-full bg-gray-700"
            placeholder="Full Name"
          />
        )}
        <input
          className="p-3 my-3 w-full bg-gray-700"
          ref={email}
          placeholder="Email Address"
        />
        <input
          className="p-3 my-3 w-full bg-gray-700"
          ref={password}
          placeholder="Password"
        />
        <p className="font-bold text-red-500 py-2">{validationMessage}</p>
        {isSignUpForm ? (
          <button
            className="bg-red-800 p-3 my-3 w-full rounded-lg"
            onClick={handleButtonClick}
          >
            Sign Up
          </button>
        ) : (
          <button
            className="bg-red-800 p-3 my-3 w-full rounded-lg"
            onClick={handleButtonClick}
          >
            Sign In
          </button>
        )}

        <p className="cursor-pointer text-sm" onClick={toggleSignInForm}>
          {isSignUpForm
            ? "Already Registered Sign In Now"
            : "New to Netflix? Sign Up Now"}
        </p>
      </form>
    </div>
  );
}

export default LoginPage;
