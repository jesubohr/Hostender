import formatedPrice from "@util/formatPrice";
import { Icon } from "@block/icon";

export default function CartItem ({ item, methods }) {
    const { onAdd, onSub, onRemove } = methods;

    return (
        <article className="flex justify-between items-center pb-8 border-b border-gray/40 text-lg">
            <img src={ item.img } alt={ item.name } className="w-28 h-28 border-4 border-gray/20 rounded-full object-cover" />
            <div>
                <h1 className="font-semibold leading-[0.7]">{ item.name }</h1>
                <p className="text-gray text-md">{ item.category }</p>
            </div>
            <div className="flex items-center gap-1">
                <button className="py-1 px-1.5 text-2xl font-semibold" onClick={ () => onSub(item) }>−</button>
                <p className="px-4 border-2 border-gray/60 rounded-lg">{ item.quantity }</p>
                <button className="py-1 px-1 text-2xl font-semibold" onClick={ () => onAdd(item) }>+</button>
            </div>
            <p className="font-medium">{ formatedPrice(item.price) }</p>
            <button className="p-1" onClick={ () => onRemove(item.id) }>
                <Icon icon="close" />
            </button>
        </article>
    );
}
