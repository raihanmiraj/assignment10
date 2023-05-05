import React from 'react';

const RecipeCard = ({ name, ingredients, cooking_method, rating, image }) => {
    return (
        <>

        


 

 
    <div className="flex gap-4">
      <div
        className=" hover:scale-110 ease-in-out duration-300   "
        
      >
<img className='  object-contain rounded-lg' src={image} alt="" />

      </div>
      <div>
        <div className=" ">
          <p className="font-bold text-base ">
           {name}
          </p>
          <p className="text-gray-700 md:text-sm">
            {cooking_method}
          </p>
          <p className='font-semibold'>rating : {rating}</p>
         <div className='flex flex-wrap gap-2 '>
        {
        ingredients.map(e=>{
            return  <span class="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">{e}</span>
        })
       }
        </div>
        </div>
     
      </div>
    </div>
   
 




          
  
 
        </>
    );
}

export default RecipeCard;
