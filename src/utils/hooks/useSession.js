import { useState, useEffect } from "react";

export default function useSession (key, defaultValue) {
    const [value, setValue] = useState(() => {
        const sessionValue = sessionStorage.getItem(key);
        if (sessionValue) return sessionValue;
        return defaultValue || null;
    });

    useEffect(() => {
        if(value === null) sessionStorage.removeItem(key);
        else sessionStorage.setItem(key, value);
    }, [value, key]);

    return [value, setValue];
}
