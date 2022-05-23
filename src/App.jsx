import { Routes, Route, Navigate } from 'react-router-dom';
import { Dashboard } from './pages/dashboard/Dashboard';
import { Login } from './pages/login/Login';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};
