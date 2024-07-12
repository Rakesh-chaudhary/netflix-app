import { useState,useRef } from "react";
import Header from "./Header";
import {checkValidation} from "../utils/validate";
import {  createUserWithEmailAndPassword, signInWithEmailAndPassword ,updateProfile} from "firebase/auth";
import {auth} from "../utils/firebase";
import { useNavigate } from "react-router-dom";



const Login = () => {
  const [isSignInForm, setSignInForm] = useState(true);
  const [isErrorMessage, setErrorMessage] = useState(null);

  const email = useRef();

  const password = useRef();

  const name = useRef();

  const navigate =useNavigate();

  const toggleSignInForm = () => {
    setSignInForm(!isSignInForm);
  };

  const handleButtonClick =() =>{
  const message  = checkValidation(email.current.value,password.current.value);
  //   console.log(email);
  //   console.log(password);
  // }
  setErrorMessage(message);

  //sign up
  if(!isSignInForm){

    createUserWithEmailAndPassword(auth, email.current.value,password.current.value)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      console.log('sign up',user);

      updateProfile(user, {
        displayName: name.current.value , photoURL: "https://example.com/jane-q-user/profile.jpg"
      }).then(() => {
        // Profile updated!
        // ...
      }).catch((error) => {
        // An error occurred
        // ...
      });

      navigate("/browse");
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      setErrorMessage(errorCode + " " + errorMessage);
      // ..
    });

  }
  //sign in
 else{
  
  signInWithEmailAndPassword(auth, email.current.value,password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;

    console.log('sign IN',user);
    navigate("/browse");
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode + " " + errorMessage);
  });
  }
}

  

  return (
    <div>
      <Header />

      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/cacfadb7-c017-4318-85e4-7f46da1cae88/e43aa8b1-ea06-46a5-abe3-df13243e718d/IN-en-20240603-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt="logo"
        />
      </div>

      <form onSubmit = {(e) =>{
        e.preventDefault()
      }}
       className=" w-4/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
        <h1 className="font-bold py-4 text-3xl">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>


        
        {!isSignInForm && ( <input
        ref= {name}
          type="text"
          placeholder="Full Name"
          className="p-4 my-4  w-full bg-gray-700"
        />
   )}
        <input
        ref= {email}
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-700"
        />

        <input
        ref= {password}
          type="password"
          placeholder="Password"
          className="p-4 my-4  w-full bg-gray-700"
        />
          

          <p className="text-red-500 font-bold text-lg py-2">{isErrorMessage}</p>

        <button className="p-4 my-6 bg-red-700  w-full rounded-lg" onClick={handleButtonClick}>
        {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-6 cursor-pointer" onClick={toggleSignInForm}>
          

          {isSignInForm ? "New to Netflix? Sign Up Now" : "Already registered. Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login
