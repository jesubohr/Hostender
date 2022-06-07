import { Link, useNavigate } from "react-router-dom";
import { useCart } from "@util/hooks";
import formatedPrice from "@util/formatPrice";

import { CartItem } from "@block/item";
import { Button } from "@block/button";
import Section from "@block/Section";
import Title from "@block/Title";

export default function Cart () {
    const { cart, getTotal, onAdd, onSub, onRemove } = useCart();
    const navigate = useNavigate();

    return (
        <Section>
            <Title>Cart</Title>
            {
                cart.length > 0
                    ? <div className="flex flex-col items-end">
                        <section className="flex flex-col gap-5 w-full">
                            {
                                cart.map((item, index) => {
                                    return (
                                        <CartItem
                                            key={ index }
                                            item={ item }
                                            methods={ { onAdd, onSub, onRemove } }
                                        />
                                    );
                                })
                            }
                        </section>
                        <p className="mt-6 text-gray text-lg font-medium">
                            Subtotal: <span className="text-dark text-3xl font-semibold">{ formatedPrice(getTotal()) }</span>
                        </p>
                        <Button className="mt-6" onClick={() => navigate('/checkout')}>Comprar</Button>
                    </div>
                    : <div className="flex flex-col items-center gap-6">
                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="256" height="256" x="0" y="0" viewBox="0 0 64 64">
                            <g>
                                <path d="m50.6 20.39-2.52 8.82-9.64.69a1.55 1.55 0 0 0 -1.44 1.55 1.56 1.56 0 0 0 1.55 1.55h10.94a2 2 0 0 0 1.92-1.45l2.89-10.1a1.92 1.92 0 0 0 -3.7-1.06z" fill="#e8c547" data-original="#f8cf6d" />
                                <path d="m55 8a8 8 0 0 1 -11.86 7h-3.14v-3.14a8 8 0 1 1 15-3.86z" fill="#ee7231" data-original="#ee7231" />
                                <g fill="#fffeff">
                                    <path d="m52 7.2-1 5a1 1 0 0 1 -1 .8h-6a1 1 0 0 1 -1-.8l-1-5a1 1 0 0 1 1-1.2h8a1 1 0 0 1 1 1.2z" fill="#fffeff" data-original="#fffeff" />
                                    <path d="m45.32 3.05a1 1 0 0 0 -1.27.63l-1 3a1 1 0 0 0 1.9.64l1-3a1 1 0 0 0 -.63-1.27z" fill="#fffeff" data-original="#fffeff" />
                                    <path d="m51 6.68-1-3a1 1 0 1 0 -1.9.64l1 3a1 1 0 0 0 1.9-.64z" fill="#fffeff" data-original="#fffeff" />
                                </g>
                                <path d="m28 64a2 2 0 0 1 -1.91-1.41l-3.57-11.59h-9l-3.61 11.59a2 2 0 0 1 -3.82-1.18l4-13a2 2 0 0 1 1.91-1.41h12a2 2 0 0 1 1.91 1.41l4 13a2 2 0 0 1 -1.91 2.59z" fill="#30323d" data-original="#0c3798" />
                                <path d="m32 46v5h-24.29a3 3 0 0 1 -3-2.69l-2.62-25.41c-.09-1.04-.09-1.9-.09-1.81a2.09 2.09 0 0 1 4.18-.19l2.35 25.1z" fill="#4d5061" data-original="#2f79f0" />
                                <path d="m35 43c0 .22.1-.78-2 18.33a3 3 0 0 1 -6-.66l1.65-14.67h-6.65a3 3 0 0 1 0-6h10a3 3 0 0 1 3 3z" fill="#e8c547" data-original="#88b8f9" />
                                <circle cx="23" cy="11" fill="#e8c547" r="7" data-original="#88b8f9"></circle>
                                <path d="m18.78 20a6.43 6.43 0 0 1 6.39 7.17l-2.17 18.83h-9.77a5.24 5.24 0 0 1 -5-6.74l4.41-14.68a6.41 6.41 0 0 1 6.14-4.58z" fill="#e8c547" data-original="#88b8f9" />
                                <rect fill="#4d5061" height="5" rx="1" width="36" x="28" y="33" data-original="#2f79f0"></rect>
                                <path d="m40.5 31a2.5 2.5 0 0 1 -2.5 2.5h-11a2.45 2.45 0 0 1 -1.66-.64c-.17-.14.78.72-7.46-6.74a3 3 0 1 1 4-4.46c.18.18 1.26 1.39 6.2 6.84h9.92a2.5 2.5 0 0 1 2.5 2.5z" fill="#e8c547" data-original="#88b8f9" />
                                <path d="m44 38h4v20h-4z" fill="#30323d" data-original="#0c3798" />
                                <path d="m44 54h4a1 1 0 0 1 1 1v7a0 0 0 0 1 0 0h-6a0 0 0 0 1 0 0v-7a1 1 0 0 1 1-1z" fill="#4d5061" data-original="#2f79f0" />
                                <path d="m35 62h22v2h-22z" fill="#30323d" data-original="#0c3798" />
                                <circle cx="54" cy="12" fill="#e8c547" r="4" data-original="#f8cf6d"></circle>
                                <path d="m55.41 12 .3-.29a1 1 0 0 0 -1.42-1.42l-.29.3-.29-.3a1 1 0 0 0 -1.42 1.42l.3.29-.3.29a1 1 0 0 0 1.42 1.42l.29-.3.29.3a1 1 0 0 0 1.42-1.42z" fill="#fffeff" data-original="#fffeff" />
                                <path d="m11 8a1 1 0 0 1 -1-1v-6a1 1 0 0 1 2 0v6a1 1 0 0 1 -1 1z" fill="#ee7231" data-original="#ee7231" />
                                <path d="m11 12a1 1 0 1 1 1-1 1 1 0 0 1 -1 1z" fill="#ee7231" data-original="#ee7231" />
                            </g>
                        </svg>
                        <p className="text-2xl">Tu carrito esta vacío.</p>
                        <Link to="/">
                            <Button>¡Ve a comprar!</Button>
                        </Link>
                    </div>
            }
        </Section>
    );
}
