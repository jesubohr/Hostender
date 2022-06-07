import { useState } from 'react';
import { useProducts } from '@util/hooks';
import { ProductItem } from "@block/item";
import { Paginate } from '@block/pagination';
import { Selector } from '@block/listbox';
import Section from '@block/Section';
import Title from '@block/Title';

const OPTIONS = ["Higher Price", "Lower Price", "Category"];
export default function Home () {
    const [filter, setFilter] = useState('Higher Price');
    const [page, setPage] = useState(1);
    const { products } = useProducts();

    const MAX_PAGE = Math.ceil(products.length / 10);
    const prevPage = () => {
        if (page > 1) {
            setPage(page - 1);
        }
    };
    const nextPage = () => {
        if (page < MAX_PAGE) {
            setPage(page + 1);
        }
    };

    function filterProducts (products, filter) {
        switch (filter) {
            case 'Higher Price':
                return products.sort((a, b) => b.price - a.price);
            case 'Lower Price':
                return products.sort((a, b) => a.price - b.price);
            case 'Category':
                return products.sort((a, b) => a.category.localeCompare(b.category));
            default:
                return products;
        }
    }

    return (
        <Section className="flex flex-col items-center gap-20">
            <Title className="-mb-10 self-start">Home</Title>
            <div className="self-end flex items-center gap-4 w-full max-w-xs">
                <p className="text-lg">Sort By:</p>
                <Selector options={ OPTIONS } onOption={ setFilter } />
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 w-full">
                {
                    filterProducts(products, filter).slice((page - 1) * 10, page * 10).map((item, index) => (
                        <ProductItem key={ index } item={ item } />
                    ))
                }
            </div>
            <Paginate
                maxPage={ MAX_PAGE }
                page={ page }
                setPage={ setPage }
                prevPage={ prevPage }
                nextPage={ nextPage }
            />
        </Section>
    );
}
