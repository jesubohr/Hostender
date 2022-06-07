import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '@util/authUser';

import { Form } from '@block/form';
import { LabeledInput } from '@block/input';
import { Button } from '@block/button';
import { Loader } from '@block/loader';
import Section from '@block/Section';
import Title from '@block/Title';

export default function Register () {
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const { onRegister } = useAuth();

    const handleSubmit = (formData) => {
        onRegister(formData, setError, setLoading);
    };

    return (
        <Section>
            { loading && <Loader /> }
            <Title>Register</Title>
            <Form onSubmit={ handleSubmit }>
                <LabeledInput
                    name="fullName"
                    placeholder="John Doe"
                    label="Enter your fullname"
                    minLength={ 7 }
                />
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
                <Button type="submit">Sign Up</Button>
            </Form>
            <p className="mt-3 text-lg">
                Already have an account? <Link to='/login' className="text-dark font-semibold">Log In</Link>
            </p>
            { error && <p className="error">{ error }</p> }
        </Section>
    );
}
