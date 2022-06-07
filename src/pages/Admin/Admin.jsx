import { useNavigate } from "react-router-dom";
import { useProducts } from "@util/hooks";
import { ProductItem } from "@block/item";
import Section from "@block/Section";
import Title from "@block/Title";

export default function AdminPanel () {
    const { products } = useProducts();
    const navigate = useNavigate();

    return (
        <Section className="relative">
            <Title>Admin Panel</Title>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full">
                {
                    products.map((item, index) => (
                        <ProductItem key={ index } item={ item } admin />
                    ))
                }
            </div>
            <button
                onClick={ () => navigate("/admin/add") }
                className="flex justify-center items-center fixed bottom-8 right-8 w-16 h-16 bg-main border-4 border-black/10 text-black/80 text-5xl rounded-full shadow-xl shadow-[#d3ab1a80] z-10"
            >+</button>
        </Section>
    );
}
