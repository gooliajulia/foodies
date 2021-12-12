import { Link } from 'react-router-dom'
import './Layout.css';

export default function Layout({currentUser}) {

    return (
        <div id='layout'>
            <header className='layout'>
                {currentUser &&
                    <nav>
                        <Link to='/home'>Home</Link>
                        <Link to='/search'>Search</Link>
                        <Link to='/recipes'>My Recipe Box</Link>
                        <Link to='/foods/new'>Create Recipe</Link>
                    </nav>
                }
            </header>
            <p className='greeting'>Good morning, {currentUser?.username}</p>
            <footer>
                <h3>foodies activity</h3>
                <Link to='/users'>
                    <button>View All Users</button>
                </Link>
            </footer>
        </div>
    )
}
