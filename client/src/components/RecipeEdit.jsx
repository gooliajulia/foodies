import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './CreateRecipe.css';

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
        <form className='recipe-form' onSubmit={(e) => {
            e.preventDefault();
            handleRecipeUpdate(id, formData);
        }}>
            <h3>Edit Recipe</h3>
            <div className='recipe-form-image-container'>
                <div className='recipe-form-container'>
                    <label>
                        Name: 
                        <input type='text' name='name' value={name} onChange={handleChange} />
                    </label>
                    <label>
                        Ingredients:
                        <input type='text' name='ingredients' value={ingredients} onChange={handleChange} />
                    </label>
                    <label>
                        Image URL:
                        <input type='text' name='image_url' value={image_url} onChange={handleChange} />
                    </label>
                </div>
                <img src={image_url} alt={name} />
            </div>
            <button>Update Recipe</button>
        </form>
    )
}
