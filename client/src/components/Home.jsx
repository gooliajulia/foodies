import './Home.css';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Home({recipes, currentUser}) {
    const [ingredientHighlight, setIngredientHighlight] = useState('oil');

    useEffect(()=> {
        if (recipes.length) {
            setIngredientHighlight(recipes[Math.floor(Math.random()*3)].ingredients.split(', ')[Math.floor(Math.random()*3)]);
        }
    }, [recipes])
    return (
        <>
        <h4 className='home-highlight'>Discover new recipes</h4>
            <div className='discover-recipes'>
                {recipes?.filter(recipe => 
                    recipe.user_id !== currentUser?.id).map(recipe =>
                        <Link to={`/home/recipes/${recipe.id}`} >
                            <div className='recipe-card'>
                                <h3>{recipe.name}</h3>
                                <h4>chef: {recipe?.user.username}</h4>
                                <img src={recipe.image_url} alt={recipe.name} />
                            </div>
                        </Link>
                    )}
            </div>
        <h4 className='home-highlight'>Ingredient Spotlight: {ingredientHighlight}</h4>
        <div className='discover-recipes'>
            {recipes?.filter(recipe => 
            recipe.ingredients.toLowerCase().includes(`${ingredientHighlight.toLowerCase()}`)).map(recipe =>
                <Link to={`/home/recipes/${recipe.id}`}>
                    <div className='recipe-card'>
                        <h3>{recipe.name}</h3>
                        <h4>chef: {recipe?.user.username}</h4>
                        <img src={recipe.image_url} alt={recipe.name} />
                    </div>
                </Link>)}
        </div>
        </>
    )
}
