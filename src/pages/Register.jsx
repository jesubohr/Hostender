import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../utils/authUser';

import { Form } from '../components/form';
import { LabeledInput } from '../components/input';
import { Button } from '../components/button';
import { Loader } from '../components/loader';

export default function Register () {
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const { onRegister } = useAuth();

    const handleSubmit = (formData) => {
        onRegister(formData, setError, setLoading);
    };

    return (
        <section>
            { loading && <Loader /> }
            <h2>Registrate</h2>
            <Form onSubmit={ handleSubmit }>
                <LabeledInput
                    type="text"
                    name="fullName"
                    placeholder="Fullname"
                    label="Enter your fullname"
                    minLength={ 7 }
                />
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
                <Button type="submit">Sign Up</Button>
            </Form>
            <p>
                Already have an account? <Link to='/login'>Log In</Link>
            </p>
            { error && <p className="error">{ error }</p> }
        </section>
    );
}
