import { useState } from "react";
import { useAuth } from "@util/authUser";
import { useCart } from "@util/hooks";
import createCheckout from "@util/manageCheckout";

import { Form } from "@block/form";
import { Button } from "@block/button";
import { LabeledInput } from "@block/input";
import { Loader } from '@block/loader';
import Section from "@block/Section";
import Title from "@block/Title";


export default function Checkout () {
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const { user } = useAuth();
    const { cart, onClean } = useCart();
    const BUY = createCheckout();

    const handleSubmit = (formData) => {
        setLoading(true);
        BUY({ owner: user.id, cart, formData }, setError, setLoading);
        onClean();
    };

    return (
        <Section>
            { loading && <Loader /> }
            <Title>Confirm your information</Title>
            <Form onSubmit={ handleSubmit }>
                <LabeledInput
                    type="text"
                    name="fullName"
                    placeholder="Fullname"
                    label="Enter your fullname"
                    minLength={ 7 }
                    value={ user.fullname }
                />
                <LabeledInput
                    type="email"
                    name="email"
                    placeholder="Email"
                    label="Enter your email"
                    minLength={ 10 }
                    value={ user.email }
                />
                <LabeledInput
                    type="text"
                    name="city"
                    placeholder="City"
                    label="Enter your city of residence"
                    minLength={ 4 }
                />
                <LabeledInput
                    type="text"
                    name="address"
                    placeholder="Address"
                    label="Enter your address of residence"
                    minLength={ 7 }
                />
                <LabeledInput
                    type="number"
                    name="zipCode"
                    placeholder="Zip Code"
                    label="Enter your zip code"
                    minLength={ 6 }
                    maxLength={ 6 }
                />
                <LabeledInput
                    type="number"
                    name="cellphone"
                    placeholder="Cellphone"
                    label="Enter your cellphone"
                    minLength={ 10 }
                    maxLength={ 10 }
                />
                <Button type="submit">Buy</Button>
            </Form>
            { error && <p className="error">{ error }</p> }
        </Section>
    );
}
