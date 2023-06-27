import React, { useState } from 'react';
import './LoginForm.css';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Email: ${email} Password: ${password}`);
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
        <h5>Formulario Log In</h5>
        <label>
            Email:
            <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
            />
        </label>
        <label>
            Password:
            <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
            />
        </label>
        <label>
            <a href='/'>¿Olvidaste tu contraseña?</a>
        </label>
        <div className='buttons'>
            <button type="submit">Log In</button>
            <button type="submit">
                <a href='/signup'>Sign Up</a>
            </button>
        </div>
    </form>
  );
};

export default LoginForm;