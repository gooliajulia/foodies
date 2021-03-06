import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function UserRecipes({currentUser, recipes}) {
    const [userRecipes, setUserRecipes] = useState(null);

    useEffect(()=> {
        setUserRecipes(recipes.filter(recipe => (
            (recipe.user_id === currentUser.id)
        )))
    }, [recipes]);
    return (
        <div>
            <div className='recipes-list'>
            <h2>My Recipes</h2>
            <div className='column-titles'>
                <h4 className='first'>Name</h4>
                <h4 className='second'>Ingredients</h4>
                <h4 className='third'>Prep Time</h4>
            </div>
            {userRecipes?.map((recipe) => (
                <div key={recipe.id}>
                    <Link className='column-content' to={`/home/recipes/${recipe.id}`}>
                        <div className='recipe-link'>
                            <img className='thumbnail' alt={recipe.name} src={recipe.image_url} />
                            <p className='first'>{recipe.name}</p>
                            <p className='center'>{recipe.ingredients}</p>
                            <p className='last' >30 min</p>
                        </div>
                    </Link>
                </div>
            ))}
        </div>
        </div>
    )
}
