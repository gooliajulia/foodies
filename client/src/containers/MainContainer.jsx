import { Switch, Route, useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
import CreateRecipe from '../components/CreateRecipe';
import { postRecipe, getRecipes, deleteRecipe, putRecipe } from '../services/recipe'
import UserRecipes from '../components/UserRecipes';
import RecipeDetail from '../components/RecipeDetail';
import RecipeEdit from '../components/RecipeEdit';
import './MainContainer.css'
import CreateMealPlan from '../components/CreateMealPlan';
import Search from '../components/Search';
import Home from '../components/Home';
import Users from '../components/Users';

export default function MainContainer({currentUser, handleLogout, users}) {
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
                    <img className='user' src={currentUser?.image_url} alt={currentUser?.username} />
                    <p id='user'>{currentUser?.username}</p>
                    <button className='log-out' onClick={handleLogout}>log out</button>
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
                <Route path='/home/search'>
                    <Search recipes={recipes}/>
                </Route>
                <Route path='/home/recipes/:id'>
                    <RecipeDetail recipes={recipes} handleRecipeDelete={handleRecipeDelete} currentUser={currentUser}/>
                </Route>
                <Route path='/home/recipes'>
                    <UserRecipes recipes={recipes}/>
                </Route>
                <Route path='/home/users'>
                    <Users users={users}/>
                </Route>
                <Route path='/home'>
                    <Home recipes={recipes} currentUser={currentUser}/>
                </Route>
            </Switch>
        </div>
    )
}
