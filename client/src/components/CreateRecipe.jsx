import { useState } from 'react';
import './CreateRecipe.css';


export default function CreateRecipe({handleCreateRecipe}) {
    const [formData, setFormData] = useState({
        name: '',
        ingredients: '',
    });
    const { name, ingredients } = formData;

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
            <button>Add {name} to my recipes</button>
        </form>
    )
}
