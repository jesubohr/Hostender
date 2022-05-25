import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import AuthProvider from './components/AuthProvider';
import NotFound from './pages/NotFound';
import App from './App';

import ProtectedRoute from './pages/ProtectedRoute';
import Register from './pages/Register';
import Login from './pages/Login';

import { AdminPanel } from './pages/Admin';
import { Home } from './pages/User';

export default function Routing () {
    return (
        <Router>
            <AuthProvider>
                <Routes>
                    <Route path="/" element={ <App /> }>
                        <Route index element={
                            <ProtectedRoute>
                                <Home />
                            </ProtectedRoute>
                        } />
                        <Route path="admin" element={
                            <ProtectedRoute>
                                <AdminPanel />
                            </ProtectedRoute>
                        } />
                        <Route path="login" element={ <Login /> } />
                        <Route path="register" element={ <Register /> } />
                    </Route>
                    <Route path="*" element={ <NotFound /> } />
                </Routes>
            </AuthProvider>
        </Router>
    );
}
