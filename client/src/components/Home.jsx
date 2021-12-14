import './Home.css';
import { Link } from 'react-router-dom';

export default function Home({recipes, currentUser}) {
    return (
        <>
        <h4>Discover new recipes</h4>
            <div className='discover-recipes'>
                {recipes?.filter(recipe => 
                    recipe.user_id !== currentUser?.id).map(recipe =>
                        <Link to={`/home/recipes/${recipe.id}`} >
                            <div className='recipe-card'>
                                <h3>{recipe.name}</h3>
                                <h4>chef: {recipe.user.username}</h4>
                                <img src={recipe.image_url} alt={recipe.name} />
                            </div>
                        </Link>
                    )}
            </div>
        </>
    )
}
