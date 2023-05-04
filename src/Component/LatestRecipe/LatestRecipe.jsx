import React, { useState } from 'react';
 
import axios from 'axios';

const LatestRecipe = () => {
    const [recentRecipeData, setrecentRecipeData] = useState();

    const [currentrecentRecipe, setCurrentrecentRecipe] = useState(0); 
    const [loading, setLoading] = useState(true);
    axios.get("/latestrecipe")
    .then(response=>{
      setrecentRecipeData(response.data)
      setLoading(false);
    })
  

    return (
        <>
         
 
  <div className="mt-8 grid lg:grid-cols-3 gap-10">
    {!loading
    
    && 

    recentRecipeData.map(e=>{
      return  <div className="card hover:shadow-lg">
      <img
        src={e.image}
        alt="stew"
        className="w-full h-32 sm:h-48 object-cover"
      />
      <div className="m-4">
        <span className="font-bold">{e.recipe_name}</span>
        <span className="block text-gray-500 text-sm">Recipe by {e.chef_name}</span>
      </div>
      <div className="badge">
        <svg
          className="w-5 inline-block"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span>{e.time}</span>
      </div>
    </div>
    })
    }
    
    
  </div>
  
 
 
        </>
    );
}

export default LatestRecipe;
