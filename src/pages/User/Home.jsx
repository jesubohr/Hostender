import { useState } from 'react';
import { useProducts } from '@util/hooks';
import { ProductItem } from "@block/item";
import { Paginate } from '@block/pagination';
import Section from '@block/Section';
import Title from '@block/Title';

export default function Home () {
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

    return (
        <Section className="flex flex-col items-center gap-20">
            <Title className="-mb-10 self-start">Home</Title>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 w-full">
                {
                    products.slice((page - 1) * 10, page * 10).map((item, index) => (
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
