import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import AuthProvider from '@block/AuthProvider';
import NotFound from '@page/NotFound';
import App from './App';

import ProtectedRoute from '@page/ProtectedRoute';
import Register from '@page/Register';
import Login from '@page/Login';

import { AdminPanel, AddItem, ViewItem } from '@page/Admin';
import { Home, ProductView } from '@page/User';
import { Cart, Checkout } from '@page/User';

export default function Routing () {
    return (
        <Router>
            <AuthProvider>
                <Routes>
                    <Route path="/" element={ <App /> }>
                        <Route path="admin">
                            <Route index element={
                                <ProtectedRoute>
                                    <AdminPanel />
                                </ProtectedRoute>
                            } />
                            <Route path="add" element={
                                <ProtectedRoute>
                                    <AddItem />
                                </ProtectedRoute>
                            } />
                            <Route path="view">
                                <Route path=":id" element={
                                    <ProtectedRoute>
                                        <ViewItem />
                                    </ProtectedRoute>
                                } />
                            </Route>
                        </Route>

                        <Route index element={
                            <ProtectedRoute>
                                <Home />
                            </ProtectedRoute>
                        } />

                        <Route path="cart" element={
                            <ProtectedRoute>
                                <Cart />
                            </ProtectedRoute>
                        } />
                        <Route path="checkout" element={
                            <ProtectedRoute>
                                <Checkout />
                            </ProtectedRoute>
                        } />

                        <Route path="products">
                            <Route path=":id" element={
                                <ProtectedRoute>
                                    <ProductView />
                                </ProtectedRoute>
                            } />
                        </Route>

                        <Route path="login" element={ <Login /> } />
                        <Route path="register" element={ <Register /> } />
                    </Route>
                    <Route path="*" element={ <NotFound /> } />
                </Routes>
            </AuthProvider>
        </Router>
    );
}
