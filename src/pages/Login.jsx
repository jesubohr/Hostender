import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '@util/authUser';

import { Form } from '@block/form';
import { LabeledInput } from '@block/input';
import { Button } from '@block/button';
import { Loader } from '@block/loader';
import Section from '@block/Section';
import Title from '@block/Title';

export default function Login () {
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const { onLogin } = useAuth();

    const handleSubmit = (formData) => {
        setLoading(true);
        onLogin(formData, setError, setLoading);
    };

    return (
        <Section className="flex flex-col">
            { loading && <Loader /> }
            <Title>Log In</Title>
            <Form onSubmit={ handleSubmit }>
                <LabeledInput
                    name="username"
                    placeholder="johndoe"
                    label="Enter your username"
                    minLength={ 5 }
                />
                <LabeledInput
                    type="password"
                    name="password"
                    placeholder="********"
                    label="Enter your password"
                    minLength={ 8 }
                />
                <Button type="submit">Log In</Button>
            </Form>
            <p className="mt-3 text-lg">
                Don't have an account yet? <Link to="/register" className="text-dark font-semibold">Register</Link>
            </p>
            { error && <p className="error">{ error }</p> }
        </Section>
    );
}
