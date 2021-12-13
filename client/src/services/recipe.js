import api from './apiConfig';

export const postRecipe = async (recipeData) => {
    const resp = await api.post('/recipes', {recipe: recipeData});
    return resp.data;
}

export const getRecipes = async () => {
    const resp = await api.get('/recipes');
    return resp.data;
}