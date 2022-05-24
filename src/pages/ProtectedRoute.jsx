import { useLocation, Navigate } from 'react-router-dom';
import { useAuth } from '../utils/authUser';

export default function ProtectedRoute ({ children }) {
    const { token } = useAuth();
    const location = useLocation();

    if (!token) {
        const previousPath = location.pathname.split('/').pop();
        const pathname = previousPath ? `/login?redirect=${previousPath}` : '/login';
        return <Navigate to={pathname} replace />;
    }
    return children;
}
