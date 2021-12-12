import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function LogIn({handleLogin}) {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    })

    const { username, password } = formData;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    return (
        <div>
            <h2>foodies.</h2>
            <form onSubmit={(e) => {
                e.preventDefault();
                handleLogin(formData);
            }}>
                <h3>Log In</h3>
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
                <Link to='/register'>Register</Link>
                <button>Submit</button>
            </form>
        </div>
    )
}
