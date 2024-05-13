import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './Login/Pages/Login.jsx';
import Calculateur from './Auth/Pages/Calculateur.jsx';
import Acceuil from './Auth/Pages/Accueil.jsx';
import Rapport from './Auth/Pages/Rapport.jsx';
import Objectifs from './Auth/Pages/Objectifs.jsx';
import Parametres from './Auth/Pages/Parametres.jsx';
import './App.css';

const App = () => {
  const isConnected = true; // Gérer l'état de connexion ici

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={isConnected ? <Acceuil /> : <Navigate to="/login" replace />} />
        <Route path="/calculateur" element={isConnected ? <Calculateur /> : <Navigate to="/login" replace />} />
        <Route path="/rapport" element={isConnected ? <Rapport /> : <Navigate to="/login" replace />} />
        <Route path="/objectifs" element={isConnected ? <Objectifs /> : <Navigate to="/login" replace />} />
        <Route path="/parametres" element={isConnected ? <Parametres /> : <Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
