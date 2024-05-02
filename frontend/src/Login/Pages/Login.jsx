import React, { useState } from 'react';

const Login = () => {
  // États pour stocker les valeurs des champs de saisie
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  // Fonction de gestion de la soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();
    // Ici, vous pouvez ajouter la logique de vérification du nom d'utilisateur et du mot de passe
    // Par exemple, une requête à votre backend pour vérifier les informations d'identification.
    console.log('Username:', username);
    console.log('Password:', password);
    // Réinitialiser les champs après la soumission
    setUsername('');
    setPassword('');
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
