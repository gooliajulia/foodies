import './Home.css';

export default function Home({recipes, currentUser, ingredients, users}) {



    return (
        <>
            <div>
                <h3>{currentUser?.username}</h3>
                <h4>{currentUser.recipes.name}</h4>
            </div>
        </>
    )
}
