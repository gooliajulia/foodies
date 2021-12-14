import { useState } from 'react';
import './CreateRecipe.css';


export default function CreateRecipe({handleCreateRecipe}) {
    const [formData, setFormData] = useState({
        name: '',
        ingredients: '',
        image_url: '',
    });
    const { name, ingredients, image_url } = formData;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    return (
        <form className='create' onSubmit={(e)=> {
            e.preventDefault();
            handleCreateRecipe(formData);
        }}>
            <h3>Create New Recipe</h3>
            <label>
                Recipe Name:
                <input type='text' name='name' value={name} onChange={handleChange} />
            </label>
            <label>
                Ingredients:
                <input type='text' name='ingredients' value={ingredients} onChange={handleChange}/>
            </label>
            <label>
                Image:
                <input type='text' name='image_url' value={image_url} onChange={handleChange}/>
            </label>
            <button>Add {name} to my recipes</button>
            <img src={image_url} alt={name} />
        </form>
    )
}
