import { useState } from 'react';
import './CreateRecipe.css';


export default function CreateRecipe({handleCreateRecipe}) {
    const tempImageUrl = 'https://images.unsplash.com/photo-1571987530791-58e3e7744d99?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
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
        <form className='recipe-form' onSubmit={(e)=> {
            e.preventDefault();
            handleCreateRecipe(formData);
        }}>
            <h3>Create New Recipe</h3>
            <div className='recipe-form-image-container'>
                <div className='recipe-form-container'>
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
                </div>
                <img src={image_url? image_url : tempImageUrl } alt={name} />
            </div>
            <button>Add {name} to my recipes</button>
        </form>
    )
}
