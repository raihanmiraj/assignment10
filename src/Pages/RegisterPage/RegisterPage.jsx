import React, { useState } from 'react';

import LoginWithGoogle from '../../Component/LoginWithSocial/LoginWithGoogle';
import LoginWithGithub from '../../Component/LoginWithSocial/LoginWithGithub';
import LoginWithFacebook from '../../Component/LoginWithSocial/LoginWithFacebook';
import LoginWithApple from '../../Component/LoginWithSocial/LoginWithApple';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { Link } from 'react-router-dom';
import app from '../../firebase/firebase.config';
const RegisterPage = () => {
const [message , setMessage] = useState("");
const changeInputPassword = (e)=>{
  setMessage("")
 

}
 
  const auth = getAuth(app); 
    const handleSubmit = (e)=>{
        e.preventDefault();
 let email = e.target.email.value
 let password = e.target.password.value
 if(password == "" || email ==""){
  setMessage("Password or email can't be empty")
 }else if(password.length <6){
  setMessage("Password Must be more than 6")
return ;
} 
 createUserWithEmailAndPassword(auth, email, password)
 .then((userCredential) => {
 
   const user = userCredential.user;
   user.updateProfile({
    displayName:  e.target.name.value,
    photoURL: e.target.image.value,
  });
  
 
 
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
  


<form  onSubmit={handleSubmit} className="flex flex-col gap-5 ">
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
      <input
        type="email"
        name="email"
        id=""
        placeholder="Enter Your Email"
        className="p-2 rounded-sm text-black outline-0" required
      />
      <input onChange={changeInputPassword}
        type="password"
        name="password"
        id=""
        placeholder="Enter Password"
        className="p-2 rounded-sm text-black outline-0" required
      />
      <p className='text-red-700'>{message}</p>
      <button type="submit" className="bg-[#f4181c] p-3 rounded-sm">Login</button>
      <a href="#">Forgot Password?</a>
    </form>
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




 