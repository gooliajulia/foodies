import { Switch, Route, useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
import CreateRecipe from '../components/CreateRecipe';
import { postRecipe, getRecipes, deleteRecipe, putRecipe } from '../services/recipe'
import UserRecipes from '../components/UserRecipes';
import RecipeDetail from '../components/RecipeDetail';
import RecipeEdit from '../components/RecipeEdit';
import './MainContainer.css'
import CreateMealPlan from '../components/CreateMealPlan';

export default function MainContainer({currentUser, handleLogout}) {
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
        history.push('/home/recipes');
    }

    const handleRecipeDelete = async (id) => {
        await deleteRecipe(id);
        setRecipes((prevState) => prevState.filter((recipe) => recipe.id !== id));
        history.push('/home/recipes')
    }

    const handleRecipeUpdate = async (id, formData) => {
        const newRecipe = await putRecipe(id, formData);
        setRecipes((prevState) =>
            prevState.map((recipe) => {
                return recipe.id === Number(id) ? newRecipe : recipe;
            })
            );
            history.push('/home/recipes');
    }


    return (
        <div className='main-container'>
            <div id='top-header'>
                <h2 className='greeting'>Good morning, {currentUser?.username}</h2>
                <div className='user'>
                    <img className='user' src='https://media-exp1.licdn.com/dms/image/D4D03AQGCF9ln-ItOJg/profile-displayphoto-shrink_200_200/0/1637721714007?e=1645056000&v=beta&t=ihwoULXwg6SAAbyWpNa9-Ohjjl6HtWqo9_2fpfb1Rjs' alt={currentUser?.username} />
                    <p id='user'>{currentUser?.username}</p>
                    <button onClick={handleLogout}>log out</button>
                </div>
            </div>

            <Switch>
                <Route path='/home/recipes/:id/edit'>
                    <RecipeEdit recipes={recipes} handleRecipeUpdate={handleRecipeUpdate}/>
                </Route>
                <Route path='/home/recipes/new'>
                    <CreateRecipe handleCreateRecipe={handleCreateRecipe}/>
                </Route>
                <Route path='/home/meal-plans/new'>
                    <CreateMealPlan />
                </Route>
                <Route path='/home/recipes/:id'>
                    <RecipeDetail recipes={recipes} handleRecipeDelete={handleRecipeDelete}/>
                </Route>
                <Route path='/home/recipes'>
                    <UserRecipes recipes={recipes}/>
                </Route>
            </Switch>
        </div>
    )
}
