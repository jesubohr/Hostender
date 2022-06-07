import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useSession, useLocal, useFetch } from '@util/hooks';
import { AuthContext } from '@util/AuthContext';
import { AUTH_URL } from '@util/authUser';
import { useCart } from '@util/hooks';

export default function AuthProvider ({ children }) {
    const [sessionAdmin, setSessionAdmin] = useSession('adminToken');
    const [sessionToken, setSessionToken] = useSession('userToken');
    const [userData, setUserData] = useLocal('userData', {});
    const [token, setToken] = useState(sessionToken);
    const [admin, setAdmin] = useState(sessionAdmin);

    const POST = useFetch('POST');
    const { search } = useLocation();
    const { onClean } = useCart();
    const navigate = useNavigate();

    async function handleLogin (user, setError, setLoading) {
        try {
            let data;
            if(search.includes('admin')) {
                data = await POST(`${AUTH_URL}/login`, user);
                setAdmin(data._id);
                setSessionAdmin(data._id);
            } else {
                data = await POST(`${AUTH_URL}/login`, user);
                setToken(data._id);
                setSessionToken(data._id);
                setUserData({
                    id: data._id,
                    ...data.user
                });
            }
            setLoading(false);

            const redirect = search.split('=').pop();
            navigate(`/${redirect}`);
        } catch (error) {
            setError('Invalid username or password');
            setLoading(false);
        }
    }

    async function handleRegister (user, setError, setLoading) {
        try {
            const data = await POST(`${AUTH_URL}/register`, user);
            setToken(data._id);
            setSessionToken(data._id);
            setUserData({
                id: data._id,
                ...data.user
            });
            setLoading(false);
            window.location.href = '/';
        } catch (error) {
            setError('There was an error registering you. Please try again.');
            setLoading(false);
        }
    }

    async function handleLogout () {
        setUserData(null);
        setToken(null);
        setAdmin(null);
        setSessionToken(null);
        setSessionAdmin(null);
        onClean();
        navigate('/');
    }

    const value = {
        user: userData,
        token,
        admin,
        onLogin: handleLogin,
        onLogout: handleLogout,
        onRegister: handleRegister
    };

    return (
        <AuthContext.Provider value={ value }>
            { children }
        </AuthContext.Provider>
    );
}
