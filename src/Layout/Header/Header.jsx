import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthContextProvider';

const Header = () => {
 
  const [langBtn , setLangBtn] = useState(false)
  const [mobileMenuOpen , setMobileMenuOpen] = useState(false)
  const [dropDownOpen , setDropDownOpen] = useState(false); 
  const  { registerUser, user, logOut, loginUser,isLogged,setIsLogged }  = useContext(AuthContext);
  console.log(user)
    return (
        <>
      
      <header className="flex justify-between items-center md:px-12 py-5">
      <div>
        <h1 className='text-3xl font-semibold'>FoodHeaven</h1>
      </div>
      <nav className="flex justify-center items-center gap-10">
        <ul className="flex justify-center items-center space-x-3">
          <li>
          <Link to="/">Home</Link>
          </li>
          <li>
          <Link to="/blog">Blog</Link>
          </li>
         
          {!user && <> <li>
       <Link to="/login">Login</Link>
       
          </li>
          
          <li>
          <Link to="/register">Register</Link>
          
             </li></> 
          }
        </ul>
        {user &&  <div className="w-10 h-10 bg-gray-200 flex justify-center items-center rounded-full relative" onClick={()=>{
          setDropDownOpen(dropDownOpen?false:true);
        }} >
          <img src={user.photoURL} className='w-10 h-10 rounded-full' alt="" />
      {dropDownOpen &&   <div
    id="dropdown"
    className="z-10 absolute top-10 right-5 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
  >
    <ul
      className="py-2 text-sm text-gray-700 dark:text-gray-200"
      aria-labelledby="dropdownDefaultButton"
    >
    
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
       <>
   
 
  
</>

      </nav>
    </header>
        </>
    );
}

export default Header;
