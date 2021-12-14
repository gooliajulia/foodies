import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getOneRecipe } from '../services/recipe';

export default function RecipeDetail({ handleRecipeDelete, currentUser }) {
    const [recipe, setRecipe] = useState(null)
    const { id } = useParams();

    useEffect(() => {
        const fetchRecipe = async () => {
            const recipeItem = await getOneRecipe(id);
            setRecipe(recipeItem);
        };
        fetchRecipe();
    }, [id])

    return (
        <div>
            <h3>Recipe Detail</h3>
            <h4>{recipe?.name}</h4>
            <img src={recipe?.image_url} alt={recipe?.name}/>
            <p>{recipe?.ingredients}</p>
            { recipe?.user_id === currentUser?.id ?
                <>
                    <Link to={`/home/recipes/${recipe?.id}/edit`} >
                        <button>Edit Recipe</button>
                    </Link>
                    <button onClick={() => handleRecipeDelete(recipe.id)}>Delete</button>
                </>
            : null
            }

        </div>
    )
}
