import React from 'react'
import "../comstyler/Detailstyle.css"

const Detail = ({ meal, recipe }) => {
    if (!meal || !recipe) return null;
  
    return (
      <>
  
      <div className="wrap-card card-animate-card card-pop-card">
    <div className="overlay-card">
      <div className="overlay-content-card card-animate-card slide-left-card delay-2-card">
        <h1 className="h1-card card-animate-card slide-left-card card-pop-card delay-4-card">{meal.strTags}</h1>
        <p className="p-card card-animate-card slide-left-card card-pop-card delay-5-card" style={{color: 'white', marginBottom: '2.5rem'}}>: <em>{meal.strMeal}</em></p>
      </div>
      <div className="image-content-card card-animate-card slide-card delay-5-card" style={{backgroundImage: `url(${meal.strMealThumb})`}}></div>
      <div className="dots-card card-animate-card">
        <div className="dot-card card-animate-card slide-up-card delay-6-card"></div>
        <div className="dot-card card-animate-card slide-up-card delay-7-card"></div>
        <div className="dot-card card-animate-card slide-up-card delay-8-card"></div>
      </div>
    </div>
    <div className="text-card">
      <div style={{marginLeft:"5%"}} className='p-card'><img className="inset-card" src={meal.strMealThumb} alt="" /><em style={{width:"100%"}}>{meal.strMeal}</em>{recipe.ingredients ? (
          <ul>
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        ) : (
        <span></span>
        )} Instructions: {recipe.strInstructions}</div>
    
    </div>
  </div>
      </>
    );
  };
  
  export default Detail;