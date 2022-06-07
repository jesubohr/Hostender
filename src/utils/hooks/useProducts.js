import { PRODUCTS } from "@data/PRODUCTS";
import { useLocal } from ".";

export default function useProducts() {
    const [products, setProducts] = useLocal("allProducts", PRODUCTS);
    
    function getProduct (id) {
        return products.find(product => product.id === id);
    }

    function addProduct(product) {
        setProducts([...products, product]);
    }

    function removeProduct(product) {
        setProducts(products.filter(p => p.id !== product.id));
    }

    function updateProduct(product) {
        setProducts(products.map(p => p.id === product.id ? product : p));
    }

    return {
        products,
        getProduct,
        addProduct,
        removeProduct,
        updateProduct
    };
}
