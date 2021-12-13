import api from './apiConfig';

export const postRecipe = async (recipeData) => {
    const resp = await api.post('/recipes', {recipe: recipeData});
    return resp.data;
}