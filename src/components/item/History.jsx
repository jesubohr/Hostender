import formatedPrice from "@util/formatPrice";

export default function HistoryItem ({ item }) {
    return (
        <article className="flex justify-between items-center pb-8 border-b border-gray/40 text-lg">
            <img src={ item.img } alt={ item.name } className="w-28 h-28 border-4 border-gray/20 rounded-full object-cover" />
            <div>
                <h1 className="font-semibold leading-[0.7]">{ item.name }</h1>
                <p className="text-gray text-md">{ item.category }</p>
            </div>
            <p className="px-4 border-2 border-gray/60 rounded-lg">{ item.quantity }</p>
            <p className="font-medium">{ formatedPrice(item.price) }</p>
        </article>
    );
}
