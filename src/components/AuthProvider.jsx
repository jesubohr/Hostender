import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../utils/AuthContext';
import { useSession, useLocal, useFetch } from '../utils/hooks';
import { AUTH_URL } from '../utils/authUser';

export default function AuthProvider ({ children }) {
    const [sessionToken, setSessionToken] = useSession('userToken');
    const [userData, setUserData] = useLocal('userData', {});
    const [token, setToken] = useState(sessionToken);

    const POST = useFetch('POST');
    const { search } = useLocation();
    const navigate = useNavigate();

    async function handleLogin (user, setError, setLoading) {
        try {
            let data;
            if(search.includes('admin')) {
                data = await POST(`${AUTH_URL}/admin`, user);
            } else {
                data = await POST(`${AUTH_URL}/login`, user);
            }
            //setUserData(data.user);
            setToken(data._id);
            setSessionToken(data._id);
            setLoading(false);

            const redirect = search.split('=').pop();
            navigate(`/${redirect}`);
        } catch (error) {
            setError('Invalid username or password');
            setLoading(false);
            console.error(error);
        }
    }

    async function handleRegister (user, setError, setLoading) {
        try {
            const data = await POST(`${AUTH_URL}/register`, user);
            //setUserData(data.user);
            setToken(data._id);
            setSessionToken(data._id);
            setLoading(false);
            window.location.href = '/';
        } catch (error) {
            setError('There was an error registering you. Please try again.');
            setLoading(false);
            console.error(error);
        }
    }

    async function handleLogout () {
        setUserData(null);
        setToken(null);
        setSessionToken(null);
    }

    const value = {
        user: userData,
        token,
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
