import React, { useState } from 'react';

const ChefCard = ({ChefPicture, ChefName, YearsOfExperience, NumbersOfRecipes, Likes, rating}) => {
    const [viewDetails, setViewDetails] = useState(false);
    return (
        <>
             <div className="flex flex-col gap-3 "   onMouseEnter={() => setViewDetails(true)}
          onMouseLeave={() => setViewDetails(false)}>
        <div className="aspect-square rounded-xl overflow-hidden relative">
          <img
            className="rounded-xl aspect-square object-cover hover:scale-110 ease-in-out duration-300"
            src={ChefPicture}
            alt=""
          />
          {viewDetails &&   <div className="absolute bottom-5 right-0 left-0 flex justify-center">
            <button className="px-5 bg-[#518f2d] py-2 rounded-lg text-white font-semibold  ">
              View Recipes
            </button>
          </div>}
        
          <span className="absolute z-[999999] top-5 right-5 bg-yellow-400 text-white px-2 py-1 rounded-xl text-sm flex justify-center items-center gap-1">
            <span>{rating} </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-4 h-4 inline fill-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
              />
            </svg>
          </span>
        </div>
        <div className="flex flex-col gap-1">
          <div className="flex justify-between">
            <h1 className="text-xl font-semibold">{ChefName}</h1>
            <p className="text-gray-900">Experience : {YearsOfExperience}</p>
          </div>
          <div className="flex justify-between">
            <p>
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
             {Likes}
            </p>
            <h1>Total Recipes : {NumbersOfRecipes}</h1>
          </div>
        </div>
      </div>  
        </>
    );
}

export default ChefCard;
