import { Link } from 'react-router-dom'
import './Layout.css';

export default function Layout({currentUser, users, children}) {

    return (
        <div id='layout'>
            <header className='layout'>
                {currentUser &&
                    <nav className='nav-bar'>

                        <Link className='nav' to='/home'>
                            <img className='icon' src="https://img.icons8.com/fluency-systems-regular/48/000000/home.png" alt='house'/><p>Home</p>
                        </Link>
                        <Link className='nav' to='/home/search'>
                        <img className='icon' src="https://img.icons8.com/ios/48/000000/search.png" alt='magnifying glass'/><p>Search</p>
                        </Link>
                        <Link className='nav' to='/home/recipes'>
                        <img className='icon' src="https://img.icons8.com/windows/32/000000/grip-lines-vertical.png" alt='lines'/><p>Recipe Box</p></Link>
                        <br/>
                        <Link to='/home/recipes/new' className='nav'>
                            <img className='icon' src="https://img.icons8.com/ios/50/000000/plus--v1.png" alt='plus sign' /><p>Create Recipe</p></Link>
                        <Link to='/home/recipes' className='nav'>
                        <img className='icon' src="https://cdn-icons-png.flaticon.com/512/1077/1077035.png" alt='heart' /><p>Liked Recipes</p></Link>
                        <Link to='/home/meal-plans/new' className='nav'>
                            <img className='icon' src="https://img.icons8.com/ios/50/000000/plus--v1.png" alt='plus sign' /><p>Create Meal Plan</p></Link>
                        <br/>
                        <hr className='solid'/>
                        <br/>
                        <div className='overflow'>
                            <Link to='/home'>Meal Plan 1</Link>
                            <Link to='/home'>Day before Marathon</Link>
                            <Link to='/home'>Day after Marathon</Link>
                            <Link to='/home'>Mentally on a Beach</Link>
                            <Link to='/home'>Holiday Cheer</Link>
                            <Link to='/home'>Typical Work Day</Link>
                            <Link to='/home'>All My Faves</Link>
                            <Link to='/home'>Spanish</Link>
                            <Link to='/home'>Nana's Recipes</Link>
                            <Link to='/home'>Mama Bear's favorites</Link>
                            <Link to='/home'>Healthy Comfort</Link>
                            <Link to='/home'>Dinner Party</Link>
                            <Link to='/home'>Hungover AF</Link>
                            <Link to='/home'>Italian Dinner Party</Link>
                            <Link to='/home'>Parisian Dreams</Link>
                            <Link to='/home'>Spice things up</Link>
                            <Link to='/home'>We have guests</Link>
                            <Link to='/home'>90s Nostalgia</Link>
                        </div>
                    </nav>
                }
            </header>
            {children}
            <footer>
                <h3>foodies activity</h3>
                {users?.filter((user) => {
                    return user.recipes.length > 0
                }).map(user => 
                        <div className='foodie-activity'>
                            <div className='foodie'>
                                <img className='user' src={user?.image_url} alt={user.username} />
                                <p key={user.id}>{user.username}</p>
                            </div>
                            <div className='foodie-recipe'>
                                <p className='foodie-recipe-name' >{user.recipes[0].name}</p>
                                <img className='feed-thumbnail' src={user.recipes[0].image_url} alt={user.recipes[0].name} />
                            </div>
                        </div>
                    )}
                <Link to='/users'>
                    <button className='view-users'>View All Users</button>
                </Link>
            </footer>
        </div>
    )
}
