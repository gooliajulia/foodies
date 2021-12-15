import api from './apiConfig';

export const getIngredients = async () => {
    const resp = await api.get('/ingredients');
    return resp.data;
}

export const getOneIngredient = async (id) => {
    const resp = await api.get(`/ingredients/${id}`)
}