import { useProducts } from "@util/hooks";
import uuid from "@util/UUID";

import { Form } from "@block/form";
import { LabeledInput } from "@block/input";
import { Button } from "@block/button";
import Section from "@block/Section";
import Title from "@block/Title";

export default function AddItem () {
    const { addProduct } = useProducts();

    function handleSubmit (formData) {
        console.log({
            id: uuid(),
            name: formData.name,
            category: formData.category,
            price: formData.price,
            img: formData.img
        })
        addProduct({
            id: uuid(),
            name: formData.name,
            category: formData.category,
            price: formData.price,
            img: formData.img
        });
    }

    return (
        <Section className="relative">
            <Title>Add Item</Title>
            <Form onSubmit={ handleSubmit }>
                <LabeledInput
                    name="name"
                    placeholder="Apple"
                    label="Name"
                    minLength={ 4 }
                />
                <LabeledInput
                    name="category"
                    placeholder="Fruit"
                    label="Category"
                    minLength={ 5 }
                />
                <LabeledInput
                    type="number"
                    name="price"
                    placeholder="$1.00"
                    label="Price"
                    minLength={ 5 }
                />
                <LabeledInput
                    name="img"
                    placeholder="https://images.com/apple.png"
                    label="Image"
                    minLength={ 5 }
                    maxLength={ 300 }
                />
                <Button type="submit">Add Item</Button>
            </Form>
        </Section>
    );
}
