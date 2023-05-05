import { useState ,createContext } from 'react'
 
import RouteHandle from './Config/RouteHandle';
 
import AuthContextProvider from './Provider/AuthContextProvider';
 import axios from 'axios';
 axios.defaults.baseURL = "https://vercel.com/raihanmiraj/assignmentserver";
function App() {
 


  return (
    <>
   <AuthContextProvider>
   <RouteHandle />
   </AuthContextProvider>
    </>
  )
}

export default App
