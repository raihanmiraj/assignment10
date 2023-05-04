import React, { useEffect, useState } from 'react';
import BlogCard from '../../Component/BlogCard/BlogCard';
import { useLoaderData } from 'react-router-dom';

const BlogPage = () => {
  
 
 
    const [loading, setLoading] = useState(true)
    const [blogData, setBlogData] = useState();
    const {blogDataLoad} = useLoaderData();
    
    useEffect(() => {
       if(loading){
       
 


 
  Promise.all([blogDataLoad ])
  .then(values => {
    setBlogData(values[0].data)
      setLoading(false)
  })
   
 
      }
     
      
    
    }, []);
    return (
        <>
         

            <div className="max-w-screen-xl mx-auto px-5 sm:px-10 md:px-16 relative mt-12">
    

 {loading?<></>: <>
 {blogData.map(e=><BlogCard question={e.question} answer={e.answer}/>  )}
 </>}
   
 
  </div>
</>

       
    );
}

export default BlogPage;
