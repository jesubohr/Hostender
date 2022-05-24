import { useContext } from 'react';
import { AuthContext } from './AuthContext';

export const AUTH_URL = 'https://hostender-api.herokuapp.com/users';

export function useAuth () {
    return useContext(AuthContext);
}
