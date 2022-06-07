import { useLocation } from "react-router-dom";
import { useProducts } from "@util/hooks";
import formatedPrice from "@util/formatPrice";

import { Form } from "@block/form";
import { LabeledInput } from "@block/input";
import { Button } from "@block/button";
import Section from "@block/Section";
import Title from "@block/Title";

export default function ViewItem () {
    const { pathname } = useLocation();
    const { getProduct, updateProduct, removeProduct } = useProducts();

    const item = getProduct(pathname.split('/')[3]);

    const handleSubmit = (formData) => {
        updateProduct({
            id: item.id,
            name: formData.name,
            category: formData.category,
            price: formData.price,
            img: formData.img,
            rating: item.rating,
        });
    };
    return (
        <Section className="flex flex-col gx:flex-row justify-between items-center gap-10">
            {
                item
                    ? (
                        <>
                            <img src={ item.img } alt={ item.name } className="w-full max-w-lg max-h-[calc(100vh-10rem)] object-cover" />
                            <Form onSubmit={ handleSubmit }>
                                <LabeledInput
                                    name="name"
                                    label="Name"
                                    value={ item.name }
                                    placeholder="Apple"
                                    minLength={ 4 }
                                />
                                <LabeledInput
                                    name="category"
                                    label="Category"
                                    value={ item.category }
                                    placeholder="Fruit"
                                    minLength={ 5 }
                                />
                                <LabeledInput
                                    type="number"
                                    name="price"
                                    label="Price"
                                    value={ item.price }
                                    placeholder="$1.00"
                                    minLength={ 5 }
                                />
                                <LabeledInput
                                    name="img"
                                    label="Image"
                                    value={ item.img }
                                    placeholder="https://images.com/apple.png"
                                    minLength={ 5 }
                                    maxLength={ 300 }
                                />
                                <Button className="self-center w-full bg-light" type="submit">Save Changes</Button>
                                <Button className="self-center w-full bg-dark text-white" onClick={ () => removeProduct(item) }>Remove from Inventary</Button>
                            </Form>
                        </>
                    ) : <Title>Product not found</Title>
            }
        </Section>
    );
}
