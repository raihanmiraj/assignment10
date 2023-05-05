import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import axios from 'axios';

const Slider = () => {
  const [sliderData, setSliderData] = useState();
  const [currentSlider, setCurrentSlider] = useState(0); 
  const [loading, setLoading] = useState(true);
useEffect(() => {
 if(loading){
  axios.get("/slider")
  .then(response=>{
    setSliderData(response.data)
    setLoading(false);
  })
 }
}, []);

 
    return (
        <>
          {!loading
          && <section className={`bg-[url(${sliderData[currentSlider].image})] w-full h-screen text-white relative bg-no-repeat bg-cover `} style={{backgroundImage: "url('"+sliderData[currentSlider].image+ "')"}}>
          <Header/>
           <div className="w-full h-full flex justify-center md:justify-end items-center">
             <div className="flex flex-col justify-center items-center md:items-end md:mr-12 w-[90%]  md:w-[30%] gap-10 pb-[110px]  md:pb-[70px]">
               <h1 className="text-2xl md:text-5xl font-semibold text-right">
                 Search Your Favourite Chef
               </h1>
               <p className="text-lg  w-[80%] text-center md:text-right ">
                  You can Search and find your favourite chef here
               </p>
               <div className="relative block flex justify-center items-center w-full">
                 <span className="absolute inset-y-0 right-0 flex items-center pr-3">
                   <svg
                     className="h-5 w-5 fill-gray-400"
                     xmlns="http://www.w3.org/2000/svg"
                     x="0px"
                     y="0px"
                     width={30}
                     height={30}
                     viewBox="0 0 30 30"
                   >
                     <path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z"></path>
                   </svg>
                 </span>
                 <input
                   className="w-full bg-transparent placeholder:font-italitc border border-white rounded-full py-2 md:py-5 pl-10 pr-4 focus:outline-none"
                   placeholder=""
                   type="text"
                 />
               </div>
             </div>
           </div>
       
           <div className="absolute bottom-12 right-0 left-0 flex justify-center items-center space-x-4"> 
       {
       sliderData.map((e, index)=>{
       
         return <div key={index} className="w-5 h-5 border border-2 rounded-[5px] object-contain flex justify-center items-center" onClick={()=>setCurrentSlider(index)}>
              {currentSlider == index &&  <div className="bg-white w-2 h-2 rounded-sm" />}
             </div>
       })
       
       }
           
            
           </div>
         </section> 
          }  
        </>
    );
}

export default Slider;
