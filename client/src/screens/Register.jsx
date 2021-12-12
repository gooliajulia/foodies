import { useState } from 'react';

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
        <div>
            <form onSubmit={(e) => {
                e.preventDefault();
                handleRegister(formData)}}>
                <h3>Register</h3>
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
                <button>Submit</button>
            </form>
        </div>
    )
}
