import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getOneRecipe } from '../services/recipe';
import './RecipeDetail.css'

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
        <div className='detail'>
            <img src={recipe?.image_url} alt={recipe?.name}/>
            <div className='sub-detail'>
                <h4 className='detail'>{recipe?.name}</h4>
                <h5 className='detail'>Ingredients: {recipe?.ingredients}</h5>
                { recipe?.user_id === currentUser?.id ?
                    <>
                        <Link to={`/home/recipes/${recipe?.id}/edit`} >
                            <button className='detail'>Edit Recipe</button>
                        </Link>
                        <button className='detail'onClick={() => handleRecipeDelete(recipe.id)}>Delete</button>
                    </>
                : null
                }
            </div>
        </div>
    )
}
