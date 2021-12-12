import './Landing.css';
import { Link } from 'react-router-dom';

export default function Landing() {
    return (
        <div id='landing'>
            <Link to='/login'>log In / register</Link>
            <h1>foodies.</h1>
        </div>
    )
}
