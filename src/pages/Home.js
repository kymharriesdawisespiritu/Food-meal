import React, { useState, useEffect } from 'react';
import Cards from '../components/Cards';
import Detail from '../components/Detail';
import About from './About';
import 'flowbite'

function Home() {
    const [categories, setCategories] = useState([]);

  const [searchQuery, setSearchQuery] = useState('');

  const [meals, setMeals] = useState([]);

  const [selectedCategory, setSelectedCategory] = useState(null);

  const [defaultImages, setDefaultImages] = useState([]);

  const [selectedMeal, setSelectedMeal] = useState(null); // new state

  const [recipe, setRecipe] = useState(null); // new state


  useEffect(() => {
// data fetch
    async function fetchCategories() {

      try {

        const response = await fetch('https://themealdb.com/api/json/v1/1/categories.php');

        const data = await response.json();

        setCategories(data.categories);

      } catch (error) {

        console.error(error);

      }

    }

    fetchCategories();


    async function fetchDefaultImages() {

      try {

        const response = await fetch('https://themealdb.com/api/json/v1/1/filter.php?c=Beef');

        const data = await response.json();

        setDefaultImages(data.meals);

      } catch (error) {

        console.error(error);

      }

    }

    fetchDefaultImages();

  }, []);


  const handleSearch = (event) => {

    event.preventDefault();

    setSearchQuery(event.target.value);

  };


  const handleSubmit = async (event) => {

    event.preventDefault();

    try {

      const response = await fetch(`https://themealdb.com/api/json/v1/1/search.php?s=${searchQuery}`);

      const data = await response.json();

      if (data.meals == null) {

        alert(`Oops there is no ${searchQuery} but you can search for your fav dish`) 

        searchQuery = setSearchQuery('');

      }

      setMeals(data.meals);

      setSearchQuery('');

    } catch (error) {

      console.error(error);

    }

  };


  const handleCategoryClick = async (category) => {

    setSelectedCategory(category);  

    try {

      const response = await fetch(`https://themealdb.com/api/json/v1/1/filter.php?c=${category.strCategory}`);

      const data = await response.json();

      setMeals(data.meals);

    } catch (error) {

      console.error(error);

    }

  };


  const handleCardClick = async (meal) => {

    setSelectedMeal(meal);

    try {

      const response = await fetch(`https://themealdb.com/api/json/v1/1/lookup.php?i=${meal.idMeal}`);

      const data = await response.json();

      setRecipe(data.meals[0]);

    } catch (error) {

      console.error(error);

    }

  };
  
  return (
    <div  style={{display:'flex', flexDirection:'row', marginTop:"10vh"}} className=" max-w-xxl  border border-gray-200 rounded-lg shadow  ">
        
  <div className="flex flex-wrap -mx-4">
  
    <div className=" md:w-1/2 xl:w-1/3 px-4 mb-4" >
    <ul className=" list-none mb-1 flex items-start justify-evenly py-1 md:py-1 flex-wrap">
        {categories.map((category) => (
          <li key={category.idCategory} onClick={() => handleCategoryClick(category)}>
            <button
              type="button"
              style={{Background: '#F7F7F7'}}
              className="py-2.5 px-5 me-2 mb-2 text-sm font-medium  focus:outline-none bg-white rounded-full  hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
              {category.strCategory}
            </button>
          </li>
        ))}
      </ul>
    </div>
    <form style={{width:'100%'}} onSubmit={handleSubmit} className="max-w-md mx-auto">
      <div className="relative ">
        
        <input value={searchQuery}
            onChange={handleSearch}
            placeholder="Search for a meal"
    
            type="search" id="default-search" className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
        
      </div>
      
      </form>
    <div style={{
  display: 'flex',
  flexDirection: 'row',
  width: '100%',
  height: '80vh',
  margin: '0 auto',
  

  
}}>
  
  {/* Left side */}
  <div  className="card-res">
    {meals.length > 0 ? (
      <div style={{
        overflowY: 'scroll',
        height: '80%', 
        backgroundColor: 'transparent',
      }}>
        <div >
          {meals.map((meal) => (
            <Cards
              key={meal.idMeal}
              meal={meal}
              imageUrl={meal.strMealThumb}
              searchQuery={searchQuery}
              onClick={handleCardClick}
            />
          ))}
        </div>
      </div>
    ) : (
      <div style={{
        backgroundColor: 'transparent',
        overflowY: 'scroll',
        height: '80%',
      }}>
        {defaultImages.map((meal) => (
          <Cards
            key={meal.idMeal}
            meal={meal}
            imageUrl={meal.strMealThumb}
            onClick={handleCardClick}
          />
        ))}
      </div>
    )}
  </div>

  <div style={{
    height: '100vh', 
  }}>
    {selectedMeal ? (
      <Detail meal={selectedMeal} recipe={recipe} />
    ) : (
      <div className="wrap-card card-animate-card card-pop-card">

          <div className="overlay-card">
            <div className="overlay-content-card card-animate-card slide-left-card delay-2-card">
              <h1 className="h1-card card-animate-card slide-left-card card-pop-card delay-4-card"></h1>
              <p className="p-card card-animate-card slide-left-card card-pop-card delay-5-card" style={{color: 'white', marginBottom: '2.5rem'}}>: <em></em></p>
            </div>
            <div className="image-content-card card-animate-card slide-card delay-5-card" style={{backgroundImage: `url(https://media.gettyimages.com/id/1363638825/photo/vegan-plant-based-asian-food-recipes-with-rice-and-brown-rice-as.jpg?s=612x612&w=gi&k=20&c=QuqQ2wgvQazlitFvRhMuR2_nWZEf5CB3xa3FS4R0ffM=)`}}></div>
            <div className="dots-card card-animate-card">
              <div className="dot-card card-animate-card slide-up-card delay-6-card"></div>
              <div className="dot-card card-animate-card slide-up-card delay-7-card"></div>
              <div className="dot-card card-animate-card slide-up-card delay-8-card"></div>
            </div>
          </div>
          <div className="text-card">
            <p className='p-card'><img className="inset-card" src='https://media.gettyimages.com/id/1363638825/photo/vegan-plant-based-asian-food-recipes-with-rice-and-brown-rice-as.jpg?s=612x612&w=gi&k=20&c=QuqQ2wgvQazlitFvRhMuR2_nWZEf5CB3xa3FS4R0ffM=' alt="" />
            <em >Healthy foods are those that provide you with the nutrients you need to sustain your body's well-being and retain energy. Water, carbohydrates, fat,
                <p style={{marginLeft:'10%'}}>rotein, vitamins, and minerals are the key nutrients that make up a healthy, balanced diet.
                </p> </em>
            </p>
          </div>

        </div>
    )}
  </div>
</div>  

  </div>

</div>

  );
}

export default Home;