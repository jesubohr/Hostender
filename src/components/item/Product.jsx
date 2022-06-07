import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "@util/hooks";
import formatedPrice from "@util/formatPrice";
import getImageColor from "@util/getImageColor";
import { Icon } from "@block/icon";

export default function ProductItem ({ item, admin = false }) {
    const [onCart, setOnCart] = useState(false);
    const imgRef = useRef();
    const itemRef = useRef();
    const navigate = useNavigate();
    const { onAdd } = useCart();

    const route = admin ? "/admin/view" : "/products";

    function setItemColor ({ target }) {
        const color = '#' + getImageColor(target);
        //itemRef.current.querySelector('#details').style.backgroundColor = `${color}9f`;
        //itemRef.current.style.setProperty('--tw-shadow-color', `${color}60`);
        //itemRef.current.style.setProperty('--tw-shadow', 'var(--tw-shadow-colored)');
    }

    function addToCart (item) {
        onAdd(item);
        setOnCart(true);
    }

    useEffect(() => {
        imgRef.current.addEventListener('load', setItemColor);
        imgRef.current.crossOrigin = "Anonymous";
    }, []);

    return (
        <article ref={ itemRef } className="group relative w-full rounded-xl shadow-md hover:shadow-xl dark:shadow-none transition-shadow cursor-pointer">
            { !admin && (
                <button
                    type="button"
                    className="flex justify-center items-center absolute top-3 right-3 w-12 h-12 border-4 border-black/40 rounded-full opacity-30 hover:opacity-100 hover:scale-110 active:scale-125 transition-transform z-20"
                    onClick={ () => addToCart(item) }>
                    { onCart ? <Icon icon="check" /> : <Icon icon="cart" /> }
                </button>
            ) }
            <div
                id="details"
                onClick={ () => navigate(`${route}/${item.id}`) }
                className="absolute h-[calc(100%-3.5rem)] w-full pt-5 px-6 rounded-t-xl backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity z-10">
                <h1 className="max-w-[85%] text-2xl font-semibold">{ item.name }</h1>
                <p className="text-lg font-light">{ item.category }</p>
                <p className="mt-6 text-2xl tabular-nums">{ formatedPrice(item.price) }</p>
            </div>
            <div onClick={ () => navigate(`${route}/${item.id}`) }>
                <img ref={ imgRef } src={ item.img } alt={ item.name } loading="lazy" className="w-full h-52 object-cover rounded-t-xl" />
                <div className="py-4 px-5">
                    <ul className="flex gap-2 text-yellow-400">
                        {
                            Array.from({ length: item.rating }, (_, i) => (
                                <li key={ i }><Icon icon="star" fill="#facc15" /></li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </article>
    );
}
