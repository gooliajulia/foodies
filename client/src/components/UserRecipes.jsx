
import { Link } from 'react-router-dom';

export default function UserRecipes({recipes}) {

    return (
        <div>
            <h2>My Recipes</h2>
            <h3>{recipes[0].name}</h3>
            {recipes?.map((recipe) => (
                <div key={recipe.id}>
                    <Link to={`/home/recipes/${recipe.id}`}>
                        <p>{recipe.name}: {recipe.ingredients}</p>
                    </Link>
                </div>
            ))}
        </div>
    )
}
