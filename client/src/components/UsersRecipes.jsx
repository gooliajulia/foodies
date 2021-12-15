import './UsersRecipes.css';

import { Link } from 'react-router-dom';

export default function UsersRecipes({recipes}) {

    return (
        <div className='recipes-list'>
            <h2>Liked Recipes</h2>
            <div className='column-titles'>
                <h4 className='first'>Name</h4>
                <h4 className='second'>Ingredients</h4>
                <h4 className='third'>Prep Time</h4>
            </div>
            {recipes?.map((recipe) => (
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
    )
}
