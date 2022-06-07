import { useLocation, Navigate } from 'react-router-dom';
import { useAuth } from '@util/authUser';

export default function ProtectedRoute ({ children }) {
    const { token } = useAuth();
    const { pathname } = useLocation();

    if (!token) {
        const previousPath = pathname.split('/').pop();
        const newPathname = previousPath ? `/login?redirect=${previousPath}` : '/login';
        return <Navigate to={ newPathname } replace />;
    }
    return children;
}
