import Input from "./Input";

export default function LabeledInput ({ type = "text", name, label, placeholder, minLength, maxLength = 20, value = '', error = '' }) {
    return (
        <label className="flex flex-col items-start text-lg">
            <span className="font-medium">{ label }</span>
            <Input
                type={ type }
                name={ name }
                value={ value }
                placeholder={ placeholder }
                label={ label }
                error={ error }
                minLength={ minLength }
                maxLength={ maxLength }
            />
        </label>
    );
}
