import Input from "./Input";

export default function LabeledInput ({ type, name, label, placeholder, minLength, error = '' }) {
    return (
        <label className="flex gap-2">
            { label }
            <Input
                type={ type }
                name={ name }
                placeholder={ placeholder }
                label={ label }
                error={ error }
                minLength={ minLength }
            />
        </label>
    );
}
