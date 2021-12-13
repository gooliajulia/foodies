import { Link } from 'react-router-dom'
import './Layout.css';

export default function Layout({currentUser, users, children}) {

    return (
        <div id='layout'>
            <header className='layout'>
                {currentUser &&
                    <nav>
                        <Link to='/home'>Home</Link>
                        <Link to='/search'>Search</Link>
                        <Link to='/home/recipes'>My Recipe Box</Link>
                        <br/>
                        <Link to='home/recipes/new'>Create Recipe</Link>
                        <Link to='/recipes'>Liked Recipes</Link>
                        <br/>
                        <hr className='solid'/>
                        <br/>
                        <div className='overflow'>
                            <Link to='/home'>Recipe 1</Link>
                            <Link to='/home'>Recipe 2</Link>
                            <Link to='/home'>Recipe 3</Link>
                            <Link to='/home'>Recipe 4</Link>
                            <Link to='/home'>Recipe 5</Link>
                            <Link to='/home'>Recipe 6</Link>
                            <Link to='/home'>Recipe 1</Link>
                            <Link to='/home'>Recipe 2</Link>
                            <Link to='/home'>Recipe 3</Link>
                            <Link to='/home'>Recipe 4</Link>
                            <Link to='/home'>Recipe 5</Link>
                            <Link to='/home'>Recipe 6</Link>
                            <Link to='/home'>Recipe 1</Link>
                            <Link to='/home'>Recipe 2</Link>
                            <Link to='/home'>Recipe 3</Link>
                            <Link to='/home'>Recipe 4</Link>
                            <Link to='/home'>Recipe 5</Link>
                            <Link to='/home'>Recipe 6</Link>
                        </div>
                    </nav>
                }
            </header>
            {children}
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
