import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
import RecipeCard from '../../Component/RecipeCard/RecipeCard';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Spinner from '../../Component/Spinner/Spinner';
const ChefDetails = ( ) => {
    const {id} = useParams();
    const [loading, setLoading] = useState(true);
    const [chefDetailsData, setChefDetailsData] = useState(null);
    const [buttonDisable, setButtonDisable] = useState(false);
    useEffect(() => {
       
        if(loading){
            axios.get("/chef/"+id)
            .then(response=>{
                setChefDetailsData(response.data);
                setLoading(false);
            })
        }
    }, []);
    return (
        <>{
            loading?<>
            <Spinner/>
            </>:<>
<ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
{/* Same as */}
<ToastContainer />
              <section>

<div className='grid grid-cols-1 md:grid-cols-2  gap-12 px-3 md:px-12 mt-8' >
<div>
<img className='rounded-xl' src={chefDetailsData.image} alt="" />
</div>
<div className='flex flex-col gap-4'>
<h1 className='font-semibold text-4xl'>{chefDetailsData.name}</h1>
<p className='text-lg'>{chefDetailsData.bio}</p>
<p className='space-x-1 font-semibold'>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="3"
        stroke="currentColor"
        className="w-5 h-5 inline fill-[#518f2d] text-[#518f2d]"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"
        />
      </svg> 
   <span>  {chefDetailsData.likes}</span>
    </p>
    <p className='font-semibold'>Experience : {chefDetailsData.years_of_experience} years</p>
    <div className='flex  items-center gap-2'>
    <p className='text-2xl font-semibold'> {chefDetailsData.rating} </p>
    <Rating style={{ maxWidth: 150 }} value={parseInt(chefDetailsData.rating)}  isDisabled />
    
    </div>
  
<div>
<button onClick={()=>{setButtonDisable(true)

toast('🦄 Add to Favorite', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    });
}}  className={`px-5 py-3 ${buttonDisable?"bg-gray-300":"bg-green-600"} text-white font-semibold rounded-lg`} disabled={buttonDisable}>Add to Favorite</button>
</div>
</div>
</div>
 
</section>


<section className=' px-2 md:px-12 mt-12'>
<h4 className="font-bold mt-12 mb-6 pb-2 border-b border-gray-200 text-2xl">
   Recipe Card
  </h4>
  <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>{
    chefDetailsData.recipes .map(e=>{
      return  <RecipeCard name ={e.name} ingredients={e.ingredients} cooking_method={e.cooking_method} rating={e.rating} image={e.image} />  
    })
    
    }</div>
    
   
</section>
            </>
        }
  
          

        </>
    );
}

export default ChefDetails;
