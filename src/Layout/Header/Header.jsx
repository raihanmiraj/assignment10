import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthContextProvider';
import ActiveLink from '../../Component/ActiveLink/ActiveLink';

const Header = () => {
 
  const [langBtn , setLangBtn] = useState(false)
  const [mobileMenuOpen , setMobileMenuOpen] = useState(false)
  const [dropDownOpen , setDropDownOpen] = useState(false); 
  const [imgDetails, setImgDetails] = useState(false)
  const  { registerUser, user, logOut, loginUser,isLogged,setIsLogged }  = useContext(AuthContext);
 
    return (
        <>
      
      <header className="flex justify-between items-center px-2 md:px-12 py-5">
    
        <h1 className='text-3xl font-semibold'>FoodHeaven</h1>
  
      <button onClick={()=>setMobileMenuOpen(mobileMenuOpen?false:true)} className='flex justify-center items-center md:hidden'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 inline">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>
</button>
<div className={`${mobileMenuOpen?"":"hidden"} absolute top-[70px] right-0 left-0  md:flex  md:static bg-[#518f2d] py-8 md:bg-transparent`}>
<nav className="flex flex-col md:flex-row justify-center items-center gap-2 md:gap-10">
        <ul className="flex flex-col md:flex-row justify-center items-center font-semibold md:space-x-3">
          <li>
          <ActiveLink to="/">Home</ActiveLink>
          </li>
          <li>
          <ActiveLink to="/blog">Blog</ActiveLink>
          </li>
         
          {!user && <> <li>
       <ActiveLink to="/login">Login</ActiveLink>
       
          </li>
          
          <li>
          <ActiveLink to="/register">Register</ActiveLink>
          
             </li></> 
          }
        </ul>
        {user &&  <div className="w-10 h-10 bg-gray-200 flex justify-center items-center rounded-full relative" onClick={()=>{
          setDropDownOpen(dropDownOpen?false:true);

          
        }} >
          <img
             onMouseEnter={() => setImgDetails(true)}
             onMouseLeave={() => setImgDetails(false)}
          src={user.photoURL} className='w-10 h-10 rounded-full' alt="" />
     
      {dropDownOpen &&  
      
    
      <div
    id="dropdown"
    className="z-10 absolute top-10 right-5 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
  >
    <ul
      className="py-2 text-sm text-gray-700 dark:text-gray-200"
      aria-labelledby="dropdownDefaultButton"
    >
    
      <li className='text-center'>
      {user.displayName}
      </li>
      <li>
        <button
          type='button' onClick={logOut}
          className="block w-full py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
        >
          Sign out
        </button>
      </li>
    </ul>
  </div>}   
        </div> }

        {imgDetails &&     <div id="tooltip-light" role="tooltip" class="absolute z-[9999]   inline-block px-3 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg shadow-sm opacity-100 tooltip">
        {user.displayName}
    <div class="tooltip-arrow" data-popper-arrow></div>
</div>}
     

      </nav>
  
</div>
   
    </header>
        </>
    );
}

export default Header;
