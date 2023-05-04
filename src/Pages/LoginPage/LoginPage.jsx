import React from 'react';
 

import LoginWithGoogle from '../../Component/LoginWithSocial/LoginWithGoogle';
import LoginWithGithub from '../../Component/LoginWithSocial/LoginWithGithub';
import LoginWithFacebook from '../../Component/LoginWithSocial/LoginWithFacebook';
import LoginWithApple from '../../Component/LoginWithSocial/LoginWithApple';
import { Link } from 'react-router-dom';
const LoginPage = () => {

 
    return (
        <>
      <section className="h-screen w-full bg-black text-white flex justify-center items-center px-4 md:px-0">
  <div className="flex flex-col gap-5">
    <div className="flex gap-5 text-2xl font-semibold items-center">
      <Link to="/login" className="border-b-4 py-2">Login</Link>
      <Link  to="/register" className="py-2 text-gray-500">Register Now</Link>
    </div>
    <div className="flex flex-col gap-5 ">
      <input
        type="email"
        name=""
        id=""
        placeholder="Enter Your Email"
        className="p-2 rounded-sm text-black outline-0"
      />
      <input
        type="password"
        name=""
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

export default LoginPage;
