import './SignUpForm.css'
import React, { useState } from 'react'

const SignUpForm = () => {
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            // Verificar si las contraseñas coinciden
            if (password !== confirmPassword) {
              alert('Las contraseñas no coinciden');
              return;
            }
            const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&.,])[A-Za-z\d@$!%*#?&.,]{8,}$/;
            if (!passwordRegex.test(password)) {
              alert(
                'La contraseña debe tener al menos 8 caracteres, una letra, un número y un carácter especial'
              );
              return;
            }
      
            const userData = {
              name: name,
              username: username,
              mail: email,
              password: password,
            };
      
            const response = await fetch('https://catan-simple-backend.onrender.com/users', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(userData),
            });
      
            if (response.ok) {
              alert('Usuario registrado con éxito');
              // Aquí puedes realizar alguna acción adicional después de registrar el usuario
            } else {
              alert(response.data.message);
            }
          } catch (error) {
            console.log('Error:', error);
          }
      
    };

    return (
        <form className="signup-form" onSubmit={handleSubmit}>
            <h5>Formulario Sign Up</h5>
            <label>
                Name:
                <input
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
                required
                />
            </label>
            <label>
                Username:
                <input
                type="text"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
                required
                />
            </label>
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
                Confirm Password:
                <input
                type="password"
                value={confirmPassword}
                onChange={(event) => setConfirmPassword(event.target.value)}
                required
                />
            </label>
            <div className='buttons'>
                <button type="submit">Sign Up</button>
                <button type="submit">
                    <a href='/'>Volver</a>
                </button>
            </div>
        </form>
    );
};


export default SignUpForm