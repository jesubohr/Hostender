import { useState } from "react";

export default function Form ({ children, onSubmit }) {
    const [error, setError] = useState('');

    function handleSubmit (ev) {
        ev.preventDefault();

        const inputs = [...ev.target.querySelectorAll('input')];
        const values = {};
        
        const allFilled = inputs.every(input => input.value !== '');
        if (!allFilled) {
            setError('All fields are required');
            return;
        }

        inputs.forEach(input => {
            values[input.name] = input.value;
        });

        onSubmit(values);
        setError('');
        inputs.forEach(input => input.value = '');
    }
    return (
        <form
            className="flex flex-col gap-3"
            onSubmit={ handleSubmit }
        >
            { children }
            { error && <p className="error">{ error }</p> }
        </form>
    );
}
