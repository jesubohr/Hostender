import { useLocation } from "react-router-dom";
import { useProducts, useCart } from "@util/hooks";
import formatedPrice from "@util/formatPrice";

import { Button } from "@block/button";
import Section from "@block/Section";
import Title from "@block/Title";

export default function ProductView () {
    const { pathname } = useLocation();
    const { onAdd } = useCart();
    const { getProduct } = useProducts();

    const item = getProduct(pathname.split('/')[2]);
    return (
        <Section>
            {
                item
                    ? (
                        <article className="flex gap-20 w-full">
                            <img src={ item.img } alt={ item.name } className="max-w-lg max-h-[calc(100vh-10rem)] object-cover" />
                            <div className="flex flex-col items-end grow">
                                <Title>{ item.name }</Title>
                                <p className="mt-2 text-xl font-light">{ item.category }</p>
                                <p className="mt-5 text-2xl">{ formatedPrice(item.price) }</p>
                                <Button onClick={ () => onAdd(item) }>Add to cart</Button>
                            </div>
                        </article>
                    ) : <Title>Product not found</Title>
            }
        </Section>
    );
}
