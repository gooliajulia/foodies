import { Switch, Route, useHistory } from 'react-router-dom';
import { useState } from 'react';
import CreateRecipe from '../components/CreateRecipe';
import { postRecipe } from '../services/recipe'

export default function MainContainer({currentUser}) {
    const [recipes, setRecipes] = useState([]);
    const history = useHistory();

    const handleCreateRecipe = async (formData) => {
        const newRecipe = await postRecipe(formData);
        setRecipes((prevState) => [...prevState, newRecipe]);
        history.push('/home');
    }

    return (
        <div>
            <h2>Good morning, {currentUser?.username}</h2>
            <Switch>
                <Route path='/home/foods/new'>
                    <CreateRecipe handleCreateRecipe={handleCreateRecipe}/>
                </Route>
            </Switch>
        </div>
    )
}
