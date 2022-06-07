import { Link, NavLink } from 'react-router-dom';
import { useAuth } from '../utils/authUser';
import { DropMenu } from './dropmenu';
import { Icon } from './icon';

export default function Header () {
    const { user, admin, token, onLogout } = useAuth();

    const homePath = admin ? '/admin' : '/home';
    return (
        <header className="relative flex justify-between items-center px-6 sm:px-16 w-full h-20 bg-main border-b-4 border-black/10">
            <Link to={ homePath } className="p-1 py-2 sm:px-4 hover:bg-light dark:hover:bg-slate-600">
                <span className="align-middle text-xl sm:text-3xl">Hostender</span>
            </Link>
            <label htmlFor="checker" className="xs:hidden"><Icon icon="menu" /></label>
            <input type="checkbox" id="checker" className="peer hidden" />
            <nav className="invisible peer-checked:visible xs:visible absolute xs:relative xs:inset-0 top-full right-0 flex flex-col xs:flex-row xs:justify-end grow gap-2 sm:gap-6 bg-main xs:bg-transparent border-4 border-black/10 xs:border-none text-xl z-10">
                {
                    token && (
                        <NavLink to="/cart" className="py-2 px-4 hover:bg-light dark:hover:bg-slate-600 text-center">
                            <span className="align-middle">Cart</span>
                        </NavLink>
                    )
                }
                <div className="flex justify-center items-center gap-6">
                    {
                        token && (
                            <>
                                <span>{ user.username }</span>
                                <DropMenu icon="user">
                                    <NavLink to="/profile" className="w-full">
                                        <span className="align-middle">Profile</span>
                                    </NavLink>
                                    <button
                                        onClick={ onLogout }
                                        className="w-full">
                                        Logout
                                    </button>
                                </DropMenu>
                            </>
                        )
                    }
                    {
                        admin && (
                            <>
                                <span>Admin</span>
                                <DropMenu icon="user">
                                    <button
                                        onClick={ onLogout }
                                        className="w-full">
                                        Logout
                                    </button>
                                </DropMenu>
                            </>
                        )
                    }
                    {
                        !token && !admin && (
                            <NavLink to="/login" className="py-2 px-4 hover:bg-light dark:hover:bg-slate-600">
                                <span className="align-middle">Login</span>
                            </NavLink>
                        )
                    }
                </div>
            </nav>
        </header>
    );
}
