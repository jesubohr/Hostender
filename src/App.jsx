import { useEffect } from "react";
import { useNavigate, useLocation, Outlet } from "react-router-dom";
import { useCart } from '@util/hooks';
import Header from './components/Header';
import Footer from './components/Footer';

function getCurrentPath (pathname) {
    const paths = pathname
        .split("/")
        .filter((path) => path !== "");
    return paths.length === 1 ? paths[0] : paths[paths.length - 1];
}

export default function App () {
    const { pathname } = useLocation();
    const navigate = useNavigate();
    const { cart } = useCart();

    useEffect(() => {
        const currentPath = getCurrentPath(pathname);
        if (currentPath === 'products') navigate('/');
        if (currentPath === 'checkout') {
            if (cart.length === 0) navigate('/');
        }
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            //document.documentElement.classList.add('dark');
        }
    }, []);

    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
}
