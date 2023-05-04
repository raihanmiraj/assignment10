import React, { useEffect, useState } from 'react';
import { useLoaderData, useNavigate, useNavigation } from 'react-router-dom';
import Header from '../../Layout/Header/Header';
import ChefCard from '../../Component/ChefCard/ChefCard';
import LatestRecipe from '../../Component/LatestRecipe/LatestRecipe';
import ContactForm from '../../Component/ContactForm/ContactForm';
 
 
 
  

const HomePage = () => {
  const {chefDataLoad} = useLoaderData();
 

const [loading, setLoading] = useState(true)
const [chefData, setChefData] = useState();
useEffect(() => {
  Promise.all([chefDataLoad ])
  .then(values => {
    setChefData(values[0].data)
      setLoading(false)
  })
   
}, []);
 
   return (
      
       
 
 
        <>
     

 
  <section className="text-black px-12 mt-12">
    <div className="grid grid-cols-4 gap-8">
      {loading ? <></ >:
     chefData.map((e) => (
      <ChefCard ChefPicture={e.image}
      rating={e.rating}
      ChefName={e.name}
      YearsOfExperience={e.years_of_experience}
      NumbersOfRecipes={e.recipes.length}
      Likes={e.likes} />
    ))
      }
     
    </div>
  </section>

  <section className="text-black px-12 mt-12">
  <h4 className="font-bold mt-12 pb-2 border-b border-gray-200">
    Latest Recipes
  </h4>
    {/* <div className="grid grid-cols-4 gap-8">
      {loading ? <></ >:
     chefData.map((e) => (
      <ChefCard ChefPicture={e.image}
      rating={e.rating}
      ChefName={e.name}
      YearsOfExperience={e.years_of_experience}
      NumbersOfRecipes={e.recipes.length}
      Likes={e.likes} />
    ))
      }
     
    </div> */}
      <LatestRecipe/>
  </section>
  <ContactForm/>
</>

  
    );
}

export default HomePage;
