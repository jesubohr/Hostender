import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../utils/authUser';

import { Form } from '../components/form';
import { LabeledInput } from '../components/input';
import { Button } from '../components/button';
import { Loader } from '../components/loader';

export default function Login () {
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const { onLogin } = useAuth();

    const handleSubmit = (formData) => {
        setLoading(true);
        onLogin(formData, setError, setLoading);
    };

    return (
        <section className="flex flex-col">
            { loading && <Loader /> }
            <h2>Log In</h2>
            <Form onSubmit={ handleSubmit }>
                <LabeledInput
                    type="text"
                    name="username"
                    placeholder="Username"
                    label="Enter your username"
                    minLength={ 5 }
                />
                <LabeledInput
                    type="password"
                    name="password"
                    placeholder="Password"
                    label="Enter your password"
                    minLength={ 8 }
                />
                <Button type="submit">Log In</Button>
            </Form>
            <p>
                Don't have an account yet? <Link to="/register">Register</Link>
            </p>
            { error && <p className="error">{ error }</p> }
        </section>
    );
}
