import './UserRecipes.css';

import { Link } from 'react-router-dom';

export default function UserRecipes({recipes}) {

    return (
        <div>
            <h2>My Recipes</h2>
            <div className='column-titles'>
                <h4>Name</h4>
                <h4>Ingredients</h4>
                <h4>Prep Time</h4>
            </div>
            {recipes?.map((recipe) => (
                <div key={recipe.id}>
                    <Link className='column-content' to={`/home/recipes/${recipe.id}`}>
                        <div className='recipe-link'>
                            <img className='thumbnail' alt={recipe.name} src={recipe.image_url} />
                            <p className='first'>{recipe.name}</p>
                            <p className='center'>{recipe.ingredients}</p>
                            <p>prep time</p>
                        </div>
                    </Link>
                </div>
            ))}
        </div>
    )
}
