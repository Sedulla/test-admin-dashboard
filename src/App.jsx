import { Routes, Route, Navigate } from 'react-router-dom';
import { Dashboard } from './pages/dashboard/Dashboard';
import { Login } from './pages/login/Login';

export const App = () => {
  return (
    <>
      <Routes>
        <Route to="/" element={<Dashboard />} />
        <Route to="/login" element={<Login />} />
      </Routes>
    </>
  );
};
