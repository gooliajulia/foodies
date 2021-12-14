import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function RecipeEdit({recipes, handleRecipeUpdate}) {
    const [formData, setFormData] = useState({
        name: '',
        ingredients: '',
        image_url: ''
    })
    const { name, ingredients, image_url } = formData;
    const { id } = useParams();

    useEffect(() => {
        const prefillFormData = () => {
            const recipeItem = recipes.find((recipe) => recipe.id === Number(id));
            setFormData({
                name: recipeItem.name,
                ingredients: recipeItem.ingredients,
                image_url: recipeItem.image_url
            });
        }
        if (recipes?.length) prefillFormData();
    }, [recipes, id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            handleRecipeUpdate(id, formData);
        }}>
            <h3>Edit Recipe</h3>
            <label>
                Name: 
                <input type='text' name='name' value={name} onChange={handleChange} />
            </label>
            <label>
                <input type='text' name='ingredients' value={ingredients} onChange={handleChange} />
            </label>
            <label>
                <input type='text' name='image_url' value={image_url} onChange={handleChange} />
            </label>
            <button>Update Recipe</button>
            <img src={image_url} alt={name} />
        </form>
    )
}
