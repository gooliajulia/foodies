import { useState } from 'react';
import { Link } from 'react-router-dom';
import './LogIn.css';

export default function LogIn({handleLogin}) {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    })

    const { username, password} = formData;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    return (
        <div className='log-in'>
            <h2>foodies.</h2>
            <form onSubmit={(e) => {
                e.preventDefault();
                handleLogin(formData);
            }}>
                <h3>Log In</h3>
                <div className='inputs'>
                    <label>
                        Username:
                        <input 
                            type='text'
                            name='username'
                            value={username}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Password:
                        <input 
                            type='password'
                            name='password'
                            value={password}
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <button>Log In to My Account</button>
                <p>No account? click <Link to='/register'>here</Link> to register.</p>
            </form>
        </div>
    )
}
