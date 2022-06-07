import Input from "./Input";

export default function LabeledInput ({
    type = "text", name, label, placeholder, minLength, maxLength = 50, value = '', error = '', max = 10000
}) {
    return (
        <label className="flex flex-col items-start text-lg">
            <span className="font-medium">{ label }</span>
            <Input
                type={ type }
                name={ name }
                value={ value }
                max={ max }
                placeholder={ placeholder }
                label={ label }
                error={ error }
                minLength={ minLength }
                maxLength={ maxLength }
            />
        </label>
    );
}
