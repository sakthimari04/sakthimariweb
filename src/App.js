// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage'; 
import WelcomePage from './pages/WelcomePage'; 
import OrderPage from './pages/OrderPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/welcome" element={<PrivateRoute component={WelcomePage} />} />
        <Route path="/order" element={<PrivateRoute component={OrderPage} />} />
      </Routes>
    </Router>
  );
}

function PrivateRoute({ component: Component }) {
  const isAuthenticated = !!localStorage.getItem('token'); 
  return isAuthenticated ? <Component /> : <Navigate to="/login" />;
}

export default App;
