import { useEffect, useState } from "react";
import { useLocal } from ".";

export default function useCart () {
    const [cartData, setCartData] = useLocal("cartData", []);
    const [cart, setCart] = useState(cartData);

    function addItem (item) {
        const exists = getItem(item.id);
        let newCart;
        if (exists) {
            newCart = cartData.map(prod => {
                if (prod.id === item.id) {
                    prod.quantity += 1;
                }
                return prod;
            });
        }
        else newCart = [...cart, { ...item, quantity: 1 }];

        setCart(newCart);
    }

    function substractItem (item) {
        const exists = getItem(item.id);
        if (exists) {
            const newCart = cartData.map(prod => {
                if (prod.id === item.id) {
                    if (prod.quantity > 1) prod.quantity -= 1;
                }
                return prod;
            });
            setCart(newCart);
        }
    }

    function removeItem (itemId) {
        setCart(cart.filter(item => item.id !== itemId));
    }

    function getItem (itemId) {
        return cart.find(item => item.id === itemId);
    }

    function getTotal () {
        return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    }

    function emptyCart () {
        setCart([]);
    }

    useEffect(() => {
        setCartData(cart);
    }, [cart]);

    return {
        cart,
        getTotal,
        onAdd: addItem,
        onSub: substractItem,
        onRemove: removeItem,
        onClean: emptyCart,
    };
}
