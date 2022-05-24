import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import AuthProvider from './components/AuthProvider';
import ProtectedRoute from './pages/ProtectedRoute';
import Home from './pages/Home';
import AdminPanel from './pages/Admin';
import Login from './pages/Login';
import Register from './pages/Register';
import NotFound from './pages/NotFound';

function App () {
    return (
        <Router>
            <AuthProvider>
                <Routes>
                    <Route index element={
                        <ProtectedRoute>
                            <Home />
                        </ProtectedRoute>
                    } />
                    <Route path="/admin" element={
                        <ProtectedRoute>
                            <AdminPanel />
                        </ProtectedRoute>
                    } />
                    <Route path="/login" element={ <Login /> } />
                    <Route path="/register" element={ <Register /> } />
                    <Route path="*" element={ <NotFound /> } />
                </Routes>
            </AuthProvider>
        </Router>
    );
}

export default App;
