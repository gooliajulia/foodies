import { Link } from 'react-router-dom'
import './Layout.css';

export default function Layout({currentUser, users}) {

    return (
        <div id='layout'>
            <header className='layout'>
                {currentUser &&
                    <nav>
                        <Link to='/home'>Home</Link>
                        <Link to='/search'>Search</Link>
                        <Link to='/recipes'>My Recipe Box</Link>
                        <br/>
                        <Link to='/foods/new'>Create Recipe</Link>
                        <Link to='/recipes'>Liked Recipes</Link>
                        <br/>
                        <hr className='solid'/>
                    </nav>
                }
            </header>
            <p className='greeting'>Good morning, {currentUser?.username}</p>
            <footer>
                <h3>foodies activity</h3>
                {users?.map(user => 
                    <p key={user.id}>{user.username}</p>
                )}
                <Link to='/users'>
                    <button>View All Users</button>
                </Link>
            </footer>
        </div>
    )
}
