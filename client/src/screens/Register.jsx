import { useState } from 'react';
import './LogIn.css';

export default function Register({handleRegister}) {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    })
    const { username, password } = formData;

    const handleChange = (e) => {
        const {name, value} = e.target;
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
                handleRegister(formData)}}>
                <h3>Register</h3>
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
                <button>Create Account</button>
            </form>
        </div>
    )
}
