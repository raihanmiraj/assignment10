import React from 'react';

import LoginWithGoogle from '../../Component/LoginWithSocial/LoginWithGoogle';
import LoginWithGithub from '../../Component/LoginWithSocial/LoginWithGithub';
import LoginWithFacebook from '../../Component/LoginWithSocial/LoginWithFacebook';
import LoginWithApple from '../../Component/LoginWithSocial/LoginWithApple';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { Link } from 'react-router-dom';
const RegisterPage = () => {
const [message , setMessage] = useState("");
   
 

    const auth = getAuth(); 
    const handleSubmit = (e)=>{
        e.preventDefault();
 let email = e.target.email.value
 let password = e.target.password.value
 createUserWithEmailAndPassword(auth, email, password)
 .then((userCredential) => {
 
   const user = userCredential.user;
   console.log(user)
 
 })
 .catch((error) => {
   const errorCode = error.code;
   const errorMessage = error.message;
   // ..
 });
    }
    return (
        <>
           <section className="h-screen w-full bg-black text-white flex justify-center items-center px-4 md:px-0">
  <div className="flex flex-col gap-5">
    <div className="flex gap-5 text-2xl font-semibold items-center">
    <Link to="/login"  className="py-2 text-gray-500">Login </Link>
    <Link  to="/register"  className="py-2  border-b-4 ">Register Now</Link>
    </div>
  
    <input
        type="text"
        name="name"
        id=""
        placeholder="Enter Your Name"
        className="p-2 rounded-sm text-black outline-0"
      />
<input
        type="text"
        name="image"
        id=""
        placeholder="Enter Your Photo Url"
        className="p-2 rounded-sm text-black outline-0"
      />

<div className="flex flex-col gap-5 ">
      <input
        type="email"
        name="email"
        id=""
        placeholder="Enter Your Email"
        className="p-2 rounded-sm text-black outline-0"
      />
      <input
        type="password"
        name="password"
        id=""
        placeholder="Enter Password"
        className="p-2 rounded-sm text-black outline-0"
      />
      <button className="bg-[#f4181c] p-3 rounded-sm">Login</button>
      <a href="#">Forgot Password?</a>
    </div>
    <div className="grid grid-cols-2 gap-4 text-black text-[10px] md:text-sm">
   {/* <LoginWithFacebook/>
   <LoginWithApple/> */}
     <LoginWithGoogle/>

  <LoginWithGithub/>
    </div>
  </div>
</section>
    
        </>
    );
}

export default RegisterPage;




 