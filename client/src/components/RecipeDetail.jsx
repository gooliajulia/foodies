import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function RecipeDetail({recipes}) {
    const [recipe, setRecipe] = useState(null)
    const { id } = useParams();

    useEffect(() => {
        const foundRecipe = recipes.find( recipe => recipe.id === Number(id));
        setRecipe(foundRecipe);
    }, [])

    return (
        <div>
            <h3>Recipe Detail</h3>
            <h4>{recipe?.name}</h4>
        </div>
    )
}
