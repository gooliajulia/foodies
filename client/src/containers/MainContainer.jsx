import { Switch, Route, useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
import CreateRecipe from '../components/CreateRecipe';
import { postRecipe, getRecipes } from '../services/recipe'
import UserRecipes from '../components/UserRecipes';

export default function MainContainer({currentUser}) {
    const [recipes, setRecipes] = useState([]);
    const history = useHistory();

    useEffect(() => {
        const fetchRecipes = async () => {
            const recipeList = await getRecipes();
            setRecipes(recipeList);
        };
        fetchRecipes();
    }, []);

    const handleCreateRecipe = async (formData) => {
        const newRecipe = await postRecipe(formData);
        setRecipes((prevState) => [...prevState, newRecipe]);
        history.push('/home');
    }


    return (
        <div>
            <h2>Good morning, {currentUser?.username}</h2>
            <Switch>
                <Route path='/home/recipes/new'>
                    <CreateRecipe handleCreateRecipe={handleCreateRecipe}/>
                </Route>
                <Route path='/home/recipes'>
                    <UserRecipes recipes={recipes}/>
                </Route>
            </Switch>
        </div>
    )
}
